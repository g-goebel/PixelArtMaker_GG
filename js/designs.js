//  global variables
let color = "#0066ff"; // global variable since it is used in function clickMe below with default color if user doesn't change initially

/* Initial function must be called to draw grid
*/

// receives the size of the grid and builds the table accordingly
function makeGrid() {

  //create a clean state if there was a grid before
  resetGrid();

  // receive the size of the grid
  let gridHeight = $("#input_height").val();
  let gridWidth  = $("#input_width").val();

  // outer loop for the rows
  for ( let counterHeight = 0; counterHeight < gridHeight; counterHeight++ ){
    $("#pixel_canvas").append($("<tr id=row_" + counterHeight + ">"));
    // inner loop for the columns
    for ( let counterWidth = 0; counterWidth < gridWidth; counterWidth++ ) {
      $("#row_" + counterHeight).append($("<td style=\"background-color: white;\">"));
    }
  }
  // enable reset buttons
  $("#resetGrid").attr("style", "visibility: visible");
  $("#resetPainting").attr("style", "visibility: visible");
};


/* Event handler
*   1) reacts on user input to draw colors
*   2) reacts on changes of color picker
*/

// 1) Event handler for the table items: toggle color between white and selected color
$('table').on("click", "td", function(){
  this.style.backgroundColor = this.style.backgroundColor == "white" ? color : "white";
});


// 2) Event handler for color picker to react on color change: enables drawing with multiple colors
$("#colorPicker").on("change", function(){
  color = $("#colorPicker").val();
});


/* Reset functions
*   1) reset grid
*   2) reset painting
*/

// 1) remove grid and hide reset button
function resetGrid(){
  $("tr").remove();
  $("td").remove();
  $("#resetGrid").attr("style", "visibility: hidden");
  $("#resetPainting").attr("style", "visibility: hidden");
}

// 2) remove work of art
function resetPainting(){
  $("td").attr("style", "background-color: white");
}
