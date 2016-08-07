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

Shape.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};
Shape.prototype.createBorder = function () {
    ctx.strokeRect(this.x, this.y, this.w, this.h);
};
Shape.prototype.amIClicked = function (xPost, yPost) {
    return (xPost > this.x && xPost < (this.x + this.w) && yPost > this.y && yPost < (this.y + this.h))
};
Shape.prototype.clearBorder = function () {
    ctx.clearRect(this.x-1, this.y-1, this.w+2, this.h+2);
};