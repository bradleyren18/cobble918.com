import {
    names, numbers
} from "./info.js";
var tempNames = names;
var tempNumbers = numbers;
var h1 = document.getElementById("h1")
var buttons = [];
    function randomise(arr1, arr2, num, arrLength) {
        var array = [];
        for (let i = 0; i < num; i++) {
            var randint = Math.floor(Math.random() * arrLength);
            const element = arr1[randint];
            const number = arr2[randint];
            array.push([element, number]);
            
        }
        return array;
    }
    var choices = randomise(tempNames, tempNumbers, 5, 92);
    var num = Math.floor(Math.random() * 5);
    var question = choices[num][1];
    h1.innerText = question;
    console.log(choices)
    for (let i = 0; i < 5; i++) {
        var currentButton = document.getElementById(`button${i+1}`)
        currentButton.innerText = choices[i][0];
        currentButton.name = choices[i][1]
        buttons.push(currentButton)
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = ()=>{
            if(buttons[i].name == question){
                alert("correct");
                window.location.reload();
            }
            else alert("wrong");
        }
    }