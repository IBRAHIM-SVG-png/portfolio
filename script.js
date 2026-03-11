function addHabit(){

let input=document.getElementById("habitInput");
let list=document.getElementById("habitList");

if(input.value==="") return;

let li=document.createElement("li");
li.textContent=input.value;

list.appendChild(li);

input.value="";
}