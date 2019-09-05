var init;
var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

function photo() {
var res =  Math.floor(Math.random()*list.length);
init = res;
var src = document.getElementsByClassName('photo_changer')[0];
// var img = document.createElement("img");
src.src = "images/fulls/"+res+".jpg";
$('#photolio').on('load', function(){$('#photolio').removeClass('hidden')});
// $(src).css("background-image", "url("+img.src+")");
}
function decrease_photo() {
  var aux = init-1;
  if(aux<0) {
    aux = list.length-1;
  }
  change_photo(Math.abs(aux));
}
function increase_photo() {
  var aux = init+1;
  change_photo(aux);
}
function change_photo(aux) {
    // var img = new Image();
    // var img = document.createElement("img");
    var src = document.getElementsByClassName('photo_changer')[0];
    var res = aux % list.length;
    src.src = "images/fulls/"+res+".jpg";
    // $(src).css("background-image", "url("+img.src+")");
    init=res; // update counter
}
