/**
 * Created by garima05 on 07-08-2016.
 */
var canvas = document.getElementById("canImageResize");
var ctx = canvas.getContext("2d");
var imgCircle = new Image();
imgCircle.src = "./images/circle.png";

var imgRect = new Image();
imgRect.src = "./images/rect.png";


var shapes = [];
function drawCircle() {
    var circle = new Shape();
    circle.x = 100 * Math.random();
    circle.y = 100 * Math.random();
    circle.w = 100 * Math.random();
    circle.h = 100 * Math.random();
    circle.img = imgCircle;
    shapes.push(circle);
    circle.draw();

}

function drawRectangle() {
    var rect = new Shape();
    rect.x = 100 * Math.random();
    rect.y = 100 * Math.random();
    rect.w = 100 * Math.random();
    rect.h = 100 * Math.random();
    rect.img = imgRect;
    shapes.push(rect);
    rect.draw();
}


// get canvas onclick coordinates

canvas.addEventListener("mousedown", getPosition, false);

var xPost, yPost;
function getPosition(event) {
    xPost = new Number();
    yPost = new Number();
    //var canvas = document.getElementById("canvas");

    if (event.x != undefined && event.y != undefined) {
        xPost = event.x;
        yPost = event.y;
    }
    else // Firefox method to get the position
    {
        xPost = event.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        yPost = event.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }

    xPost -= canvas.offsetLeft;
    yPost -= canvas.offsetTop;

    console.log("x: " + xPost + "  y: " + yPost);
    var shapeOnWhichBorderIsShown = null;
//ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var idx = 0; idx <shapes.length; idx++) {  //c1,c2,c3
        var shape = shapes[idx];
        if (shape.amIClicked(xPost, yPost) && shapeOnWhichBorderIsShown == null) {
            shapeOnWhichBorderIsShown = shape;  //c3
        }
            shape.clearBorder();
            shape.draw();
    }

    if(shapeOnWhichBorderIsShown!=null){
        shapeOnWhichBorderIsShown.createBorder();
    }


    // alert("x: " + xPost + "  y: " + yPost);
}

