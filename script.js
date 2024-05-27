class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        if(number == '.'&& this.currentOperand.includes('.'))
            return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '')
            return
        if(this.previousOperand !== ''){
            this.compute()

        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.currentOperand

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-Operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-Operand]')

const Calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        Calculator.chooseOperation(button.innerText)
        Calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button =>{
    Calculator.compute()
    Calculator.updateDisplay()
})