//Carrinho
var x = 0
function pop(){
  if(x==0){
    document.getElementById('box').style.display = "block";
    x = 1
  }else {
    document.getElementById('box').style.display = "none";
    x = 0
  }
}