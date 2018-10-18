const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');


keys.addEventListener('click', function(e) {
    const key = e.target;
    const action = key.dataset.action;
    let previousKeyType = calculator.dataset.previousKeyType;

    if (e.target.matches('button')) {
        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide'
        ) {
            previousKeyType = 'operator';
            key.classList.add('is-depressed');
            calculator.dataset.firstValue = display.textContent;
            calculator.dataset.operator = action;
        } 
        if(!action){
            checknumber();
            // if (display.textContent === "0"  ){
            //    display.textContent = key.textContent;
            // } else if (previousKeyType === 'operator'){
            //     cosole.log("previous Key is an operator")
            //     // display.textContent = key.textContent;
            // } else {
            //     display.textContent += key.textContent;
            // }
            // previousKeyType = 'number';
        };
        if (action === 'decimal') {
            if (!display.textContent.includes('.')) {
              display.textContent = display.textContent + '.'
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.'
            }
            previousKeyType = 'decimal';            
            
        }
        if (action === 'calculate') {      
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = display.textContent ;   
            var num2 = display.textContent;
            previousKeyType = 'calculate';
            display.textContent = calculate(firstValue, operator, secondValue)
        }
        if (action === 'clear') {
            reset();
            previousKeyType = 'clear';

        }



        }
function checknumber(){
            if (display.textContent === "0"  ){
               display.textContent = key.textContent;
            } else if (previousKeyType === 'operator'){
                cosole.log("previous Key is an operator")
                // display.textContent = key.textContent;
            } else {
                display.textContent += key.textContent;
            }
            previousKeyType = 'number';
}
     console.log(previousKeyType)
})  



function calculate(firstValue ,  operator , secondValue) {
    if(operator === 'add'){
        return Number(firstValue) + Number(secondValue)
    }
    if(operator === 'subtract'){
        return firstValue - secondValue
    }
    if(operator === 'multiply'){
        return firstValue * secondValue
    }
    if(operator === 'divide'){
        return firstValue / secondValue
    }
}

function reset(){
    display.textContent = 0;
    num1 = 0;
    num2 = 0;
        // Remove .is-depressed class from all keys
    // Array.from(key.parentNode.children)
    //   .forEach(k => k.classList.remove('is-depressed'))
}
