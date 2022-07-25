class Calculator {
    constructor() {
        this.num = '';
        this.result = '';
        this.count = 0;
    }
    init() {
        this.num = 0;
        display.innerHTML = '';
        process.innerHTML = '';
    }
    appendNum(number) {
        this.num += number;
        this.num = Number(this.num);
    }
    display() {
        display.innerHTML = this.num;
    }
    preoper(input) {
        let str = '';
        let digit = 0;
        switch(input) {
            case 'C':
                this.init();
                break;
            case '+/-':
                this.num *= -1;
                this.display();
                break;
            case '%':
                str = String(this.num).substring(2);
                digit = str.length;
                this.num *= 0.01;
                this.num = this.num.toFixed(digit+2);
                this.display();
                break;
            case '.':
                digit = String(this.num).indexOf('.');
                if(digit < 0) {this.num = this.num + input; this.display();}
                break;
        }
    }
    operator(input){ 

        if(input === '=') {
            process.innerHTML += this.num;
            display.innerHTML = eval(process.innerHTML);
            process.innerHTML = '';
        } else if (input === 'x') {
            process.innerHTML += this.num + '*';
            this.num = 0;
        } else{
            process.innerHTML += this.num + input;
            this.num = 0;
        }
    }

    
}

let display = document.querySelector('.result-display');  
let process = document.querySelector('.process-display');
let numbtn = document.querySelectorAll('.num');
let operbtn = document.querySelectorAll('.oper');
let preoperbtn = document.querySelectorAll('.preoper');
let number = 0;
let pre ='';
let oper ='';

const calculator = new Calculator();

calculator.init();

numbtn.forEach((arr) =>{
    arr.addEventListener('click',()=>{
        number = arr.innerHTML;
        calculator.appendNum(number);
        calculator.display();
    })
})

preoperbtn.forEach((arr) =>{
    arr.addEventListener('click',()=>{
        pre = arr.innerHTML;
        calculator.preoper(pre);
    })
})

operbtn.forEach((arr) => {
    arr.addEventListener('click',()=>{
        oper = arr.innerHTML;
        calculator.operator(oper);
    })
})



