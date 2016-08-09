/**
 * Created by garima05 on 07-08-2016.
 */
var canvas = document.getElementById("canImageResize");
var ctx = canvas.getContext("2d");
var imgCircle = new Image();
imgCircle.src = "./images/circle.png";

var imgRect = new Image();
imgRect.src = "./images/rect.png";

var resizerRadius = 2;
var rr = resizerRadius * resizerRadius;
var draggingImage = false;
var shapes = [];
function drawCircle() {
    var circle = new Shape();
    circle.x = 100 * Math.random();
    circle.y = 100 * Math.random();
    circle.w = 100 * Math.random();
    circle.h = 100 * Math.random();
    circle.img = imgCircle;
    shapes.push(circle);
    circle.draw(true);

}

function drawRectangle() {
    var rect = new Shape();
    rect.x = 100 * Math.random();
    rect.y = 100 * Math.random();
    rect.w = 100 * Math.random();
    rect.h = 100 * Math.random();
    rect.img = imgRect;
    shapes.push(rect);
    rect.draw(true);
}


// get canvas onclick coordinates

canvas.addEventListener("mousedown", getPosition, false);

var xPost, yPost;
var shape;
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
    for (var idx = 0; idx < shapes.length; idx++) {  //c1,c2,c3
        shape = shapes[idx];
        if (shape.amIClicked(xPost, yPost) && shapeOnWhichBorderIsShown == null) {
            shapeOnWhichBorderIsShown = shape;  //c3
        }
        shape.clearBorder();
        shape.draw(true);
    }

    if (shapeOnWhichBorderIsShown != null) {
        shapeOnWhichBorderIsShown.createBorder();
    }

}


var offsetX = canvas.offsetLeft;
var offsetY = canvas.offsetTop;
var startX, startY;
var draggingResizer = {
    x: 0,
    y: 0
};


function drawDragAnchor(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, resizerRadius, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
}
function handleMouseDown(e) {
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);
    draggingResizer = shape.anchorHitTest(startX, startY);
    draggingImage = draggingResizer < 0 && shape.hitImage(startX, startY);
}


function handleMouseMove(e) {

    if (draggingResizer > -1) {

        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);
        var imgright=0, imgbottom;
        shape.resizeShapeFunc(mouseX, mouseY,draggingResizer,imgright,imgbottom);

        // redraw the image with resizing anchors
        shape.draw(true);

    } else if (draggingImage) {

        imageClick = false;

        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);

        // move the image by the amount of the latest drag
        var dx = mouseX - startX;
        var dy = mouseY - startY;
        var imgrt,imght;
        shape.imageResizeDrag(dx, dy,imgrt,imght);
        // reset the startXY for next time
        startX = mouseX;
        startY = mouseY;

        // redraw the image
        shape.draw(false);

    }

}

function handleMouseUp(e) {
    draggingResizer = -1;
    draggingImage = false;
    shape.draw(true);
}

function handleMouseOut(e) {
    handleMouseUp(e);
}


document.body.onmousedown = function (e) {
    handleMouseDown(e);
}
document.body.onmousemove = function (e) {
    handleMouseMove(e);
}
document.body.onmouseup = function (e) {
    handleMouseUp(e);
}
document.body.onmouseout = function (e) {
    handleMouseOut(e);
}

