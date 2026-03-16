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



$("#changeImg").click(function(){

$("#myImage").attr("src","WIN_20250901_16_53_40_Pro.jpg");

});




$("#disableCheck").click(function(){

$("#agree").prop("disabled", true);

});




$("#enableCheck").click(function(){

$("#agree").prop("disabled", false);

});




$("#showValue").click(function(){

var name = $("#username").val();

$("#result").text("Entered value: " + name);

});




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





$(document).ready(function(){

// css() method
$("#cssBtn").click(function(){
$("#text").css({
"font-size":"22px",
"text-decoration":"underline"
});
});


// addClass()
$("#addClassBtn").click(function(){
$("#text").addClass("highlight");
});


// removeClass()
$("#removeClassBtn").click(function(){
$("#text").removeClass("highlight");
});


// toggleClass()
$("#toggleBtn").click(function(){
$("body").toggleClass("darkTheme");
});


// hasClass()
$("#checkBtn").click(function(){

if($("#text").hasClass("highlight")){
$("#result").text("Paragraph has highlight class");
}
else{
$("#result").text("Paragraph does not have highlight class");
}

});

});


$(document).ready(function(){

// Parent Traversal

$("#parentBtn").click(function(){

$(".item").parent().css("border","2px solid black");

});

$("#parentsBtn").click(function(){

$(".item").parents().css("padding","10px");

});


// Children Traversal

$("#childrenBtn").click(function(){

$(".parent").children().css("font-weight","bold");

});


// Find Method

$("#childrenBtn").click(function(){

$(".grandparent").find("li").css("border","1px dashed black");

});


// Sibling Traversal

$("#siblingsBtn").click(function(){

$(".item:first").siblings().css("font-style","italic");

});


// Next

$("#nextBtn").click(function(){

$(".item:first").next().css("font-size","20px");

});


// NextAll

$("#nextBtn").click(function(){

$(".item:first").nextAll().css("margin","10px");

});


// Previous

$("#prevBtn").click(function(){

$(".item:last").prev().css("font-weight","bold");

});


// PrevAll

$("#prevBtn").click(function(){

$(".item:last").prevAll().css("padding","5px");

});


// Filtering Methods

$("#filterBtn").click(function(){

$("li").first().css("border","2px solid black");
$("li").last().css("border","2px solid black");
$("li").eq(2).css("font-size","20px");

$("li").filter(":even").css("font-style","italic");

$("li").not(":first").css("margin","5px");

});

});



$(document).ready(function(){

// BASIC EFFECTS

$("#showBtn").click(function(){
$("#box").show();
});

$("#hideBtn").click(function(){
$("#box").hide();
});

$("#toggleBtn").click(function(){
$("#box").toggle();
});


// FADE EFFECTS

$("#fadeInBtn").click(function(){
$("#box").fadeIn();
});

$("#fadeOutBtn").click(function(){
$("#box").fadeOut();
});

$("#fadeToggleBtn").click(function(){
$("#box").fadeToggle();
});

$("#fadeToBtn").click(function(){
$("#box").fadeTo("slow",0.5);
});


// SLIDING EFFECTS

$("#slideDownBtn").click(function(){
$("#box").slideDown();
});

$("#slideUpBtn").click(function(){
$("#box").slideUp();
});

$("#slideToggleBtn").click(function(){
$("#box").slideToggle();
});


// CUSTOM ANIMATION

$("#animateBtn").click(function(){
$("#box").animate({
left:"200px",
opacity:"0.5",
height:"200px",
width:"200px"
});
});

});