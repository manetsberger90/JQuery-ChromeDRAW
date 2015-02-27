//Problem: User interaction causes no change to application.
//Solution: When user interacts cause change appropriately.

    

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mousedown = false;
//When Clicking on Control List Items.
$(".controls").on("click", "li", function() { 
  //Deselect sibling elements.
  $(this).siblings().removeClass("selected");  
  //Select click element.
  $(this).addClass("selected");
  //cache current color here.
  color = $(this).css("background-color");
});



//When new color button is pressed 
$("#revealColorSelect").click(function() {
 //Show Color Select or hide the Color Select.
    changeColor();
    $("#colorSelect").toggle();
});

//Update the "newcolor" span.
function changeColor() {
var r = $("#red").val();
var g = $("#green").val();
var b = $("#blue").val();
   //When Color sliders change.
    $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b +")");
}

$("input[type=range]").on("input", changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
  //Select the new color
    $newColor.click();
});

//On Mouse events on the canvas
$canvas.mousedown(function(e){
    lastEvent = e;
    mousedown = true;
}).mousemove(function(e) {
     //Draw Lines.
    if(mousedown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
    }
}).mouseup(function() {
  mousedown = false;  

  }).mouseleave(function() {
    $canvas.mouseup();
});
 
  