var player1= prompt("enter player 1 name");
var player2=prompt("enter player 2 name");
document.querySelectorAll("p")[0].innerHTML=player1;
document.querySelectorAll("p")[1].innerHTML=player2;
function rollTheDice()
{var r1=Math.random();
r1*=6;
r1=Math.floor(r1)+1;
var randomdice1= "images/"+"dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdice1);
var r2=Math.random();
r2*=6;
r2=Math.floor(r2)+1;
var randomdice2= "images/"+"dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

if(r1===r2)
{
    document.querySelector("h1").innerHTML="Oops! its a Draw";

}
else if (r1>r2)
{
    document.querySelector("h1").innerHTML=  player1+" is the winner!"; 

}
else
{
    document.querySelector("h1").innerHTML= player2+ " is the winner!";
}
}