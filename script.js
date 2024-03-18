const div = document.createElement("div");
div.setAttribute("class","grid-container");

div.innerHTML = `
<h1 id="title" class="text-center">Calculator</h1><br>
<p id="description">This is the simple calculator</p><br>


<input type="text" id = "result" placeholder="0">

<div class = "calculator-grid ">
        
            
            
            

            <button id="clear" style="color:red">C</button>
            <button><-</button>
            <button>.</button>
            <button>*</button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>

            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button id="add">+</button>
            
            <button id="1">1</button>
            <button id="2">2</button>
            <button id="3">3</button>
            <button id="subtract">-</button>
            
            <button>0</button>
            <button>00</button>
            <button id="equal">=</button>
            

        </div>
        
        

`

const temp = document.body.appendChild(div);


const input = document.getElementById('result');
const buttons = document.querySelectorAll('button');

function calculate(expression) {
    console.log(expression);
    console.log(typeof(expression));
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}


function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } else if (buttonValue === '<-') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});