        /**
         * Created by garima05 on 07-08-2016.
         */
        function Shape() {
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
            this.img = 0;
        }

        // imageRight = imageX + imageWidth;
        //imageBottom = imageY + imageHeight

        Shape.prototype.draw = function (withAnchors) {

            //  ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

            if (withAnchors) {
                drawDragAnchor(this.x, this.y);
                drawDragAnchor((this.x + this.w), this.y);
                drawDragAnchor((this.x + this.w), (this.y + this.h));
                drawDragAnchor(this.x, (this.y + this.h));
            }
        };

        //function drawDragAnchor(x, y) {
        //    ctx.beginPath();
        //    ctx.arc(x, y, resizerRadius, 0, 2 * Math.PI, false);
        //    ctx.closePath();
        //    ctx.fill();
        //}

        Shape.prototype.createBorder = function () {
            ctx.strokeRect(this.x, this.y, this.w, this.h);
        };
        Shape.prototype.amIClicked = function (xPost, yPost) {
            return (xPost > this.x && xPost < (this.x + this.w) && yPost > this.y && yPost < (this.y + this.h))
        };
        Shape.prototype.clearBorder = function () {
            ctx.clearRect(this.x - 1, this.y - 1, this.w + 2, this.h + 2);
        };

        Shape.prototype.hitImage = function (startX, startY) {
            return (startX > this.x && startX < this.x + this.w && startY > this.y && startY < this.y + this.h);
        };

        Shape.prototype.anchorHitTest = function (startX, startY) {
            var dx, dy;

            // top-left
            dx = startX - this.x;
            dy = startY - this.y;
            if (dx * dx + dy * dy <= rr) {
                return (0);
            }
            // top-right
            dx = startX - (this.x + this.w);
            dy = startY - this.y;
            if (dx * dx + dy * dy <= rr) {
                return (1);
            }
            // bottom-right
            dx = startX - (this.x + this.w);
            dy = startY - (this.y + this.h);
            if (dx * dx + dy * dy <= rr) {
                return (2);
            }
            // bottom-left
            dx = startX - this.x;
            dy = startY - (this.y + this.h);
            if (dx * dx + dy * dy <= rr) {
                return (3);
            }
            return (-1);
        };

        Shape.prototype.resizeShapeFunc = function (mouseX, mouseY) {

        // resize the image
            switch (draggingResizer) {
                case 0:
                    //top-left
                    this.x = mouseX;
                    this.w = (this.x + this.x) - mouseX;
                    this.y = mouseY;
                    this.h = (this.y + this.h) - mouseY;
                    break;
                case 1:
                    //top-right
                    this.y = mouseY;
                    this.w = mouseX - this.x;
                    this.h = (this.y + this.h) - mouseY;
                    break;
                case 2:
                    //bottom-right
                    this.w = mouseX - this.x;
                    this.h = mouseY - this.y;
                    break;
                case 3:
                    //bottom-left
                    this.x = mouseX;
                    this.w = (this.x + this.w) - mouseX;
                    this.h = mouseY - this.y;
                    break;
            }

            if (this.w < 25) {
                this.w = 25;
            }
            if (this.h < 25) {
                this.h = 25;
            }

        // set the image right and bottom
            imgright = this.x + this.w;
            imgbottom = this.y + this.h;
        };


        Shape.prototype.imageResizeDrag = function (dx, dy) {
            this.x += dx;
            this.y += dy;
            this.r += dx;
            this.h += dy;

        };