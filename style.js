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
function boo(num){
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


/*
function Test(num){
    if(num < 5){
        return "Tiny";
    }else if(num < 10){
        return "Small";
    }else if(num < 15){
        return "Medium";
    }else if (num < 20){
        return "Large"
    }else{
        return "Huge";
    }
}

console.log(Test(11));*/

/*
const names = ["Hole-in-one", "eagle", "birdie", "par", "bogey","Double Bogey", "Go Home"];
function tst(par, stockes){
    if(stockes == 1){
        return names[0];
    }else if(stockes <= par - 2){
        return names[1];
    }else if(stockes == par - 1){
        return names[2];
    }else if(stockes == par){
        return names[3];
    }else if(stockes == par + 1){
        return names[4];
    }else if(stockes == par + 2){
        return names [5];
    }else{
        return names[6];
    }
}

console.log(tst(3,2))*/


/*
function polister(val){
    let answer = "";
    switch(val){
        case 1: answer = ("alpha");
        break;
        case 2: answer = ("beta");
        break;
        case 3: answer = ("gamma");
        break;
        case 4: answer = ("delta");
        break;
    }
    return answer;
}

console.log(polister(1));
*/


/*
function tbt(val){
    let answer = "";
    switch(val){
        case "a": answer = ("apple");
        break;
        case "b": answer = ("bird");
        break;
        case "c": answer = ("cat");
        break;
        default: answer = ("stuff");
        break;
    }
    return answer;
}

console.log(tbt("a")); */

/*
function pott(val){
    let answer = "";
    switch(val){
        case 1:
        case 2:
        case 3: answer = "1, 2, 3";
        break;
        case 4:
        case 5:
        case 6: answer = "4, 5, 6";
        break;
        default: answer = "another number";
        break;
    }
    return answer;
}
console.log(pott(9));
*/

/*
function sravnenie(a, b){
    return a < b;
}

console.log(sravnenie(1, 2));*/



/*
let count
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: count++
        break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A": count--
        break;
    }
    if(count <= 0){
        return card + " " + "Hold"; 
    }else{
        return card + " " + "Bet";
    }
}

console.log(cc(5));*/

/*
const myDog = {
    "name": "Tailor",
    "legs": 4,
    "tails": 1,
    "Friends": ["Human", "Dog"]
};
*/

/*
const testObj = {
    "hat": "panama",
    "shirt": "rubashka",
    "shoes": "obuv"
}

let an = testObj.hat;
let un = testObj["hat"];
let zn = testObj.shirt;
let xn = testObj["shirt"];
console.log(an, un, zn, xn);*/


/*
const dog = {
    "name": "lucky",
    "age": 5,
    "friends": "all"
}

dog.name = "Happy";
delete dog["name"];
console.log(dog.name);
*/

/*
const alpha = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    24:"x",
    25:"y",
}

const xer = prompt("напиши цифру для положения ее в алфавите");
console.log(alpha[xer]);*/


/*
function phone(val){
    let result = "";
    const lookup = {
        1: "adam",
        2: "boston",
        3: "charlie",
        4: "delta",
        5: "echo",
    };
    result = lookup[val];
    return result;
}

console.log(phone(1));*/