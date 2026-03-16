$(document).ready(function(){

// BASIC SELECTORS

$("h3").css("color","red");      // element selector
$("#para1").css("background","yellow"); // id selector
$(".box").css("border","2px solid blue"); // class selector
$("h1,h2").css("color","green"); // multiple elements


// HIERARCHY SELECTORS

$("div p").css("font-weight","bold");  // parent child
$("div > p").css("background","lightblue"); // direct child
$("#first + p").css("color","purple"); // next element
$("#first ~ p").css("border","2px dashed black"); // siblings


// FILTER SELECTORS

$("li:first").css("background","orange");
$("li:last").css("background","lightgreen");
$("li:eq(2)").css("font-size","20px");
$("li:even").css("color","blue");
$("li:odd").css("color","red");
$("li:not(:first)").css("border","1px solid black");


// ATTRIBUTE SELECTORS

$("[title]").css("background","lightyellow");
$("[title='hello']").css("color","red");
$("[title^='hi']").css("border","2px solid black");
$("[title$='end']").css("font-weight","bold");
$("[title*='middle']").css("background","cyan");

});




$(document).ready(function(){

// 1. Change image source using attr()

$("#changeImg").click(function(){

$("#myImage").attr("src","WIN_20250901_16_53_40_Pro.jpg");

});


// 2. Disable checkbox using prop()

$("#disableCheck").click(function(){

$("#agree").prop("disabled", true);

});


// Enable checkbox

$("#enableCheck").click(function(){

$("#agree").prop("disabled", false);

});


// 3. Retrieve input value using val()

$("#showValue").click(function(){

var name = $("#username").val();

$("#result").text("Entered value: " + name);

});


// 4. removeAttr()

$("#remove").click(function(){

$("#agree").removeAttr("disabled");

});

});


$(document).ready(function(){

// CLICK
$("#clickBtn").click(function(){
$("#mouseResult").text("Button Clicked");
});

// DOUBLE CLICK
$("#dblclickBtn").dblclick(function(){
$("#mouseResult").text("Button Double Clicked");
});

// MOUSE ENTER
$("#mouseArea").mouseenter(function(){
$("#mouseResult").text("Mouse Entered Area");
});

// MOUSE LEAVE
$("#mouseArea").mouseleave(function(){
$("#mouseResult").text("Mouse Left Area");
});

// HOVER
$("#mouseArea").hover(function(){
$("#mouseResult").text("Hovering");
});

// MOUSE DOWN
$("#downBtn").mousedown(function(){
$("#mouseResult").text("Mouse Button Pressed");
});

// MOUSE UP
$("#upBtn").mouseup(function(){
$("#mouseResult").text("Mouse Button Released");
});


// KEYBOARD EVENTS

$("#keyboardInput").keypress(function(){
$("#keyResult").text("Key Pressed");
});

$("#keyboardInput").keydown(function(){
$("#keyResult").text("Key Down");
});

$("#keyboardInput").keyup(function(){
$("#keyResult").text("Key Released");
});


// FORM EVENTS

$("#myForm").submit(function(){
$("#formResult").text("Form Submitted");
});

$("#course").change(function(){
$("#formResult").text("Course Changed");
});

$("#name").focus(function(){
$("#formResult").text("Input Focused");
});

$("#name").blur(function(){
$("#formResult").text("Input Lost Focus");
});


// GENERAL EVENT METHODS

$("#onBtn").click(function(){
$("#onText").on("click", function(){
alert("Paragraph clicked");
});
});

$("#offBtn").click(function(){
$("#onText").off("click");
});

});