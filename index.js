var num1=Math.floor(Math.random()*6)+ 1;
var p1="images/dice"+ num1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",p1);


var num2=Math.floor(Math.random()*6)+ 1;
var p2="images/dice"+ num2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",p2);


var h3=document.querySelector(".refresh");
if(p1>p2){
h3.innerHTML="Player 1 wins🚩";
}
else if(p1<p2){
    h3.innerHTML="Player 2 wins🚩";
}
else {
    h3.innerHTML="Tie";
}