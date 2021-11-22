/*let x = 5;
let y = 10;

if(x > y){
    alert("x > y");
}else{
    alert("x <= y");
}*/
/*
let day = 3;
switch(day){
    case 1: document.write("day = 1");
    break;
    case 2: document.write("day = 2");
    break;
    default: document.write("day = another day")
}*/
/*
let color = "blue"
switch(color){
    case "Green": document.write("Green")
    break;
    case "yellow":document.write("yellow");
    break;
    case "black": document.write("black");
    break;
    default: document.write(" hz what is color");
};*/

/*
for(i=1; i <= 5; i++){
    document.write(i + "</br>")
};
*/
/*
for( x = 0; x < 9; x++){
    document.write(x + "</br>");
    if(x == 5){
        break;
    }
}

for(y = 1;y < 9; y++){
    if(y == 6){
        continue;
    }
    document.write(y);
}*/

/*
function itest(name){
    document.write("hi " + name);
}

itest("Daivd");*/
/*
function myFunct(x, y){
    document.write("Hi my name is " + x + " I am old " + y)
}

myFunct("Ruslan", 28);*/
/*
function slogene(a, b){
    document.write(a + b);
}

slogene(5, 7);
*/

/*
function myFunction(a, b){
    return a * b;
}

let d = myFunction(5, 6)
document.write(d)
*/

/*
function person(name, age){
    this.name = name;
    this.age = age;
}
let p1 = new person("John", 23);
let p2 = new person("Jemes", 24);
document.write(p1.age)
document.write(p2.name)
*/
/*
function person(name, age){
    this.name = name;
    this.age = age;
    this.chengeName = function(name){
        this.name = name;      
    }
}
let p = new person("david", 23);
p.chengeName("John");

document.write(p.name);*/


/*
function person(name, age){
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear(){
    return 2016 - this.age;
}

let p = new person("a", 22);
document.write(p.yearOfBirth());
*/


/*
let courses = new Array("HTML", "CSS", "JS");
let x = courses[1];
console.log(x);*/

/*
let courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
*/
/*
let courses = ["html", "css", "Js"];
document.write(courses.length);
*/

/*
let x = ["html", "css"];
let y = ["js", "react"];
let courses = x.concat(y);

document.write(courses)
*/

/*
document.write(Math.PI, "</br>");
document.write(Math.E, "</br>");
document.write(Math.LN2, "</br>", Math.LN10, "</br>", Math.LOG2E, "</br>",Math.LOG10E, "</br>");
*/

/*
let x = Math.ceil(Math.random() * 100);
document.write(x)
*/


/*
function x(){
    alert("Hi");
}

setInterval(x, 3000);
*/
/*
let d = new Date("January 2, 2015 10:42:00 ");
document.write(d, "</br>")

let x = new Date();
document.write(x);
*/

/*
function tiymer(){
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d. getSeconds();
    document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(tiymer, 1000)
*/


/*
let elem = document.getElementById("demo");
elem.innerHTML = "hello World";
*/
/*
let p = document.createElement("p");
let node = document.createTextNode("Some new text");
p.appendChild(node);

let div = document.getElementById("demo");
div.appendChild(p);*/

/*
let pos = 0;
let box = document.getElementById("box");

function move(){
    pos += 1;
    box.style.left = pos + "px";
}*/


/*
let outWear = "T-shirt";

function myOutfit(){
    let outWear = "Main";
    return outWear;
}

myOutfit();
console.log(myOutfit());
*/

/*
function boolean(){
    return true;
}
console.log(boolean());*/

/*
function trueOrFaalse(){
    if(trueOrFaalse){
        return "True";
    }
    return "false";
}

console.log(trueOrFaalse(true));*/

/*
function boo(){
if (num > 5 && num < 10){
    return "yes";
}
return "no"
}
*/

/*
function beetvin(val){
    if(val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}*/