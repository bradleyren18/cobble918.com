import {
    elementsStates
} from "./info.js";
const solid = document.getElementById("button1");
const liquid = document.getElementById("button2");
const gas = document.getElementById("button3");
const buttons = [solid, liquid, gas];
const h1 = document.getElementById("h1");
const randint = Math.floor(Math.random() * Object.values(elementsStates).length);
const element = Object.keys(elementsStates)[randint];
const state = Object.values(elementsStates)[randint];
h1.innerText = element;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = ()=>{
        if(buttons[i].innerText === state){
            alert("correct");
            window.location.reload();
        }
        else alert("wrong");
    }
}