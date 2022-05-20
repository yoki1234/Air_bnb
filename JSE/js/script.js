/*let a = 7; //if statment
let b =10;
if (a==b)
 {
     console.log("the numbers are same.");
 }
 else if(a>b)
 {
     confirm.log("a is greater than b.");
 }
 else
 {
     console.log("b is greater that a.");
 }

 let myage = 20;
 if (myage >30)           // if condition
 {
     console.log("you are over 30.");
 }
 else if (myage > 20)
 {
     console.log("you are over 20.");
 }
 else if (myage < 10)
 {
       console.log ("you are under 10.");
 }
 else{
     console.log("over 10");
 }

 let myage =24;                //And logical
 if (myage >= 18 && myage <= 30){
     console.log("you can come you cool dude!");
 }
 else if ( myage <= 18){
     console.log("your are under age!");
 }
 else{
     console.log("your are over age.");
 }
 function getavg(a,b){
     let avg = (a+b)/2;
     console.log(avg);
 }
console.log("my avg :" + getavg(2,3));*/


/*const myheading = document.querySelector('h1');
myheading.textContent='welcome to the Retro World';

let myimg = document.querySelector('img');

myimg.onclick = function(){
    let mysrc = myimg.getAttribute('src');
    if (mysrc === 'img1.webp'){
        myimg.setAttribute('src','img1.webp');
    }
    else{
        myimg.setAttribute('src','download.jpeg');
    }
}
let poke = document.querySelector('html');

poke.addEventListener('click',() => {
    alert('Ouch! Stop Poking me!');
});

let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setusername(){
    let myname = prompt ('please enter your name.');
    localStorage.setItem('name',myname);
    myheading.textContent = 'cool!'+myname;
}
if (!localStorage.getItem('name')){
    setusername();
}
  else{
      let storedname = localStorage.getItem('name');
      myheading.textContent='cool!'+storedname;
  }
mybutton.onclick=function(){
    setusername();
}*/


for (let line = "#"; line.length < 8; line += "#")
console.log(line);
