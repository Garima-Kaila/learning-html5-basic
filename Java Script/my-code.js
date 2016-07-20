$(document).ready(function(){
/*
//hide p tag
$("p").hide();
$("h1").click(function() {
   $(this).next().slideToggle(250);
   });   */
   
 /* 
 $("#btTest").click(function() {
     $("div p").css("background-color","orange");

   }); */ 
   
   /*
   $("#btTest").click(function() {
     $("div > p:first-child").css("background-color","orange");
	 */
	 
	/*  $("#btTest").click(function() {
     $("p:even").css("background-color","orange");*/
	 
	 //The mousedown event is triggered when the mouse button is pressed while over the selected element.
/*	
	$("h1").mousedown(function() {
    $(this).css("background-color","red");
  });  */
  
  
  //The mouseup event is triggered when the mouse button is released while over the selected element
  /*
  $("h1").mouseup(function() {
    $(this).css("background-color","pink");
  }); */
  
  
  //The mouseenter event is triggered when the mouse cursor enters the selected element.
  /*
  $("h1").mouseenter(function() {
    $(this).css("background-color","red");
  });  */
  
  //The mouseleave event is triggered when the mouse cursor leaves the selected element.
 /* $("h1").mouseleave(function() {
    $(this).css("background-color","yellow");
	
  */
  
  //The unbind method removes the specified event
  
   /* $("h1").mouseenter(function() {
    $(this).css("background-color","red");
  });
  $("h1").mouseleave(function() {
    $(this).css("background-color","yellow");
    $(this).unbind();
  });*/


 /*
     $("h1").click(function() {
    $("h3").hide(1000);
  });   */
  /*
  $("h3").hide();
    $("h1").click(function() {
    $("h3").show(1000);
  }); */
 
/* 
  $("h3").hide();
    $("h1").click(function() {
    $("h3").toggle(1000);
  });  */
  
  
 /*   $("h1").click(function() {
    $("h3").slideUp(1000);
  }); */
  
  
 /*  $("h1").click(function() {
    $("h3").slideDown(1000);
  });  */
  
  
   /* $("h3").hide();
  
  $("h1").click(function() {
    $("h3").slideToggle(1000);
  });*/
  
  /* $("h1").click(function() {
    $("h3").fadeOut(1000);
  });*/
  
  /*  $("h1").click(function() {
    $("h3").fadeIn(1000);
  }); */
  
  /* $("h3").hide();
  
  $("h1").click(function() {
    $("h3").fadeToggle(1000);
  });*/
  
  
 /*  $("h1").click(function() {
    $("h3").fadeTo(1000, 0.3);
  });  */

  
   $("h1").click(function() {
    $("h3").animate( {
	"font-size":"30px",
	//"font-size":"toggle",
	"width":"150px",
	"left":"100px"
	},1000);
	});  
   
  /* $("#hid").click(function()
   {
   $(this).addClass("emphasis");
   
  }); */
  
  $("#hid").click(function()
   {
    $(this).toggleClass("shrink emphasis" );
   
  });
  
 /* $("#htextChange").click(function()
   {
   $(this).text("Hello,..!! I hv Changed");
   });  */
   
   
  /*  $("#htextChange").click(function()
   {
   $("#ptextChange").text("Hello,..!! I hv Changed");
   });  */
  
  
  //html() Replace with HTML markup
  /* $("#htextChange").click(function()
   {
   $("#ptextChange").html('Hello...new <b style="color: red;">text</b>');
   });   */
  
/*  $("#htextChange").click(function()
   {
   $("div").empty();
   }); */
   
   //Append text
  /*  $("#htextChange").click(function()
   {
   $("#ptextChange").append("more text");
  
  }); */
  
  //after() Add HTML markup after selection
 /* $("#htextChange").click(function()
   {
   $("div").after("<p>New text</p>");
  }); */
  
   var hText = "This is just some text.";

  $("htextChange").click(function() {
    $("ptextChange").text(hText);
  });
  
  });
  