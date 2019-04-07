var init;
var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
function photo() {
var res =  Math.floor(Math.random()*list.length);
init = res;
var img = document.createElement("img");
img.src = "images/fulls/"+res+".jpg";
var src = document.getElementsByClassName('photo')[0];
$(src).css("background-image", "url("+img.src+")");
}
function change_photo() {
    // var img = new Image();
    var img = document.createElement("img");
    var src = document.getElementsByClassName('photo')[0];
    var res = (init + 1) % list.length;
    img.src = "images/fulls/"+res+".jpg";
    $(src).css("background-image", "url("+img.src+")");
    init=res; // update counter
}
