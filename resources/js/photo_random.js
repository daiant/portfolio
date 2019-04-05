var init;
var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
function photo() {
var res =  Math.floor(Math.random()*list.length);
init = res;
var img = document.createElement("img");
img.src = "images/fulls/"+res+".jpg";
var src = document.getElementsByClassName('showing_off')[0];
console.log(img.src);
src.appendChild(img);
src.style.opacity= "1";
}
function change_photo() {
  $(document).ready(function() {
    var img = new Image();
    var div = document.getElementsByClassName('showing_off')[0];
    img.onload = function() {
    div.innerHTML = '<img src="'+img.src+'" />';
    };
    var res = (init + 1) % list.length;
    img.src = "images/fulls/"+res+".jpg";
    init = res;
  });
}
