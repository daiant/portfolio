function salute(callback) {
  var dict =["hola","kaixo","hello","bonjour","hallo","ciao","namaste","salam","Aloha","Merhaba","habari","ni hao","konnichi wa"];
  return dict[Math.floor(Math.random()*dict.length)].toUpperCase();
}
