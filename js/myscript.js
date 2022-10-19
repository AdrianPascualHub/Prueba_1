//alert("HAS GANAO UN IPHONE 14");
//console.log ("Chavaleria!!");
//CONCATENAR
/**let pname= "John";
let surname ="Doe";
let question="How are you "+pname+" "+surname+"?";
console.log(question);**/
/**let pname= "John";
let surname ="Doe";
let age =23;
let question=`how old is ${pname} ${surname}?`;
let answer ="He is "+age+" years old";
console.log(question);
console.log(answer);**/
//OP ARITMETICOS
/**let operator_a =12;
let operator_b=6;
let sum= operator_a + operator_b;
let rest= operator_a - operator_b;
let mult = operator_a * operator_b;
let division = operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);**/
//INCREMENTO
/**let operator_a=3;
let operator_b=3;
let expo = operator_a**operator_b;
let incr=operator_a++;
let decr=operator_a--;
console.log(expo);
console.log(incr);
console.log(decr);**/
/**let x = 5;
let y=6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=5);**/
//TYPEOF, NULL, UNDEFINED
/**let testBoolean=true;
let testNumber=12;
let testString="Hello!";
let testBooleanObject=new Boolean(true);
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanobject));
let testNull=null;
console.log(typeof(testNull));
let testUndefined;
console.log(testUndefined);**/
//ARRAY
/**var first_array=[];
var second_array=new Array(3);
var third_array=new Array(3,5);
var fourth_array=new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);
//ARRAY lenght
console.log(fourth_array.length);
//ARRAY PUSH 
console.log(fourth_array.push("Spain"));
fourth_array.push("Spain")
console.log(fourth_array);
//ARRAY unshift
fourth_array.unshift(1);
console.log(fourth_array);
//FOR
for (var i=0; i<fourth_array.length;i++){
    console.log("Entramos en la iteracion de "+fourth_array[i]);
}
fourth_array.forEach(function(element){
    console.log("Fourth Iteration "+element);
})**/
//IF ELSE ESLSEIF
/**let aux=0;
if(aux>0){
    console.log("This number is positive");
}else if(aux <0){
    console.log("This number is negative");

}else{
    console.log("This number is 0");
}
//
var DNI_REGEX = /^(\d{8})([A-Z])$/;
let dni ="29503262D"
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
}else{
    console.log("Incorrect DNI");
}**/
//WHILE
/**var i =1;
while(i<10){
    console.log("The number is " + i);
    i++;
}**/
//OBJETO FECHA
/**let today=new Date();
let first_october=new Date(2019, 10, 1);
console.log(today);
console.log(first_october);
console.log(today.getDay());
if(today>first_october){
    console.log("Hoy es despues de 1o");
}else{
    console.log("antes de oc")
}*/
//EVENTOS JS
function myFirstFunction(){
    console.log("Thank u for ur click")
}
function mySecondFunction(){
    console.log("Thank u for u interest")
}
//DOM
/**var div =  document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);*/
/**var div =  document.getElementsByTagName("div");
console.log(div);

var second_div=document.querySelector("#my_second_div");
console.log(second_div);

function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));*/
//FTYPE
/**var numbers=[1,2,3,4];
var n_elevator_2=numbers.map(function(n){return n*n;});
console.log(n_elevator_2);

var n_elevator_2=numbers.map((n)=>{return n*n;});
console.log(n_elevator_2);

var n_elevator_2=numbers.map((n)=>{console.log; return n*n;});
console.log(n_elevator_2);

var n_elevator_2=numbers.map(n=>n*n);
console.log(n_elevator_2);*/

/**let numbers=[[1,2],[2,3],[3,4],[4,5]];
let itself=numbers.map(([x,y])=>x*y);
console.log(itself);*/
//DOM2
/**$("#btn2").addEventListener("click", function () {
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails[]");
    $("#form").appendChild(input);
    myAlert("Add new email input");
});
function $(selector){
    return document.querySelector(selector);
}

function myAlert(msg){
    
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML=msg;
    var close=document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML="X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}

function bind_close(){
    let elements = document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el = elements[i];
        el.addEventListener("click", function(){
            this.parentNode.style.display = "none";
        });
    }
}
**/
//SORT
/**let testArray = [10,2,4,5,3,7];
testArray.sort();
console.log(testArray);

testArray.sort()

function sortNumber(a,b){
    return a-b;
}
console.log(testArray.sort(sortNumber));**/

/**REVERSE
var testArray = [10,1,2,3,4];
testArray.reverse();
console.log(testArray);**/
//SPLIT
/** 
var testString = "a,b,c,d,e,2,3,44,43";
var testArray = testString.split(",");
console.log(testArray);
**/
//JOIN
/** 
var testString="a,b,c,2,3";
var testArray=testString.split(",");
var testJoin = testArray.join(".");
console.log(testJoin);
*/
//FILTER
/**
var testArray=[10,2,3,5,9];
var pairnumber = testArray.filter((num)=>{
    return num % 2 === 0;
})
console.log(pairnumber);
*/
//MAP
/**
var testArray=[1,2,3,4,5,6];
var testArray2 = testArray.map(function(num){
    return num*num;
});
console.log(testArray2);
*/
//Callbacks
/**setTimeout(function(){
    console.log("Hello ");

}, 2500);
*/
//JSON
/**var course = {
    title: "Course JS Advanced",
    section: 4,
    subsection: 6,
    teacher: "Javier Prada",
    intro: function(){
        console.log("as"+this.title+"sa"+this.section+"as");
        this.function2();
    },
    function2: function(){
        console.log("2f");
    }
}
console.log(course["teacher"]);
console.log(course.title);
console.log(course.intro());
*/