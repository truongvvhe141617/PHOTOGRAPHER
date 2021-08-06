
var frame = document.getElementsByClassName("frame")[0];
var listImg = document.getElementsByClassName("show");
var sizeImg = listImg[0].clientWidth;

//move to the last picure //647px
var maxMove = sizeImg * (listImg.length - 1);
var move = 0;
function Next() {
    move += sizeImg;
    if (move > maxMove) {
         frame.style.marginLeft = 0 + 'px';
         move=0;
    } else {
        frame.style.marginLeft =  -move + 'px';
    }
}
function Back() {
    move -= sizeImg;
    if (move ==-sizeImg) {
        
         frame.style.marginLeft = -maxMove + 'px';
         move=maxMove;
    } else {
        frame.style.marginLeft = -move + 'px';
    }
}
setInterval(function(){Next();},1000);


