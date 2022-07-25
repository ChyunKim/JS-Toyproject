# 계산기
단순한 사칙연산 계산기 기능 구현하기

![calculator](https://user-images.githubusercontent.com/53160685/180818786-67d151d3-06ba-43ec-a26d-71fff715216b.gif)


## HTML 기본틀
```HTML
 <div id="container">
        <div id="display-wrapper">
            <div class="process-display"></div>
            <div class="result-display">0</div>
            <div class="display-line"></div>
        </div>
        <div id="btn-container">
            <div class="num-wrapper">
              <button class="preoper">C</button>
                <button class="preoper">+/-</button>
                <button class="preoper">%</button>
                <button class="preoper">.</button>
                <button class="num">0</button>
                <button class="num">1</button>
                <button class="num">2</button>
                <button class="num">3</button>
                <button class="num">4</button>
                <button class="num">5</button>
                <button class="num">6</button>
                <button class="num">7</button>
                <button class="num">8</button>
                <button class="num">9</button>
            </div>
            <div class="oper-wrapper">
                <button class="oper">/</button>
                <button class="oper">×</button>
                <button class="oper">－</button>
                <button class="oper">＋</button>
                <button id="oper-result" class="oper">＝</button>

            </div>
        </div>
    </div>
```
- 각각의 숫자를 버튼으로 생성
- 숫자를 입력하고 결과를 출력하는 div 생성

## CSS grid

```css
.num-wrapper {
    display:grid;
    grid-template-rows: repeat(5, 90px);
    grid-template-columns: repeat(3, 90px);
    border-radius: 6px;

}
.preoper{
    font-size: 18px;
}
.preoper:nth-child(4){
    grid-area: 5/3;
}

.num:nth-child(5){
    grid-area: 5/2/5/3;
}

.oper-wrapper {
    display: grid;
    grid-template-rows: repeat(4, 90px);
    grid-template-columns: repeat(1, 90px);
}
.oper {
    font-size: 26px;
}
.oper:nth-child(1) {
    font-size: 22px;
}
.oper:nth-child(5) {
    color: #FFB800;
}
```

- 각각의 버튼을 grid를 활용하여 배치되도록 스타일적용
- ```0```, ```.``` 버튼은 마지막 행에 배치되도록 설정


## javascript

```javascript
let display = document.querySelector('.result-display');  
let process = document.querySelector('.process-display');
let numbtn = document.querySelectorAll('.num');
let operbtn = document.querySelectorAll('.oper');
let preoperbtn = document.querySelectorAll('.preoper');
```
- 각각의 dom 요소를 변수에 할당

```javascript
numbtn.forEach((arr) =>{
    arr.addEventListener('click',()=>{
       ...
    })
})

preoperbtn.forEach((arr) =>{
    arr.addEventListener('click',()=>{
        ...
    })
})

operbtn.forEach((arr) => {
    arr.addEventListener('click',()=>{
      ...
    })
})

```

- 각각의 버튼이 클릭될때 마다 이벤트 발생하도록 설정

```javascript
class Calculator {
    
    // 인스턴스 초기화
    constructor() {
        this.num = '';
        this.result = '';
        this.count = 0;
    }
    
    // 계산기 연산후 초기화 메소드
    init() {
        this.num = 0;
        display.innerHTML = '';
        process.innerHTML = '';
    }

    // 버튼이 클릭될 때 숫자를 저장하는 메소드
    appendNum(number) {
        this.num += number;
        this.num = Number(this.num);
    }

    // 입력된 숫자가 출력되도록 하는 메소드
    display() {
        display.innerHTML = this.num;
    }

    // C, +/-, %, . 과 같은 연산자가 클릭될때 계산하는 메소드
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
    
    // +,x, -, / 와 같은 연산시 메소드
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
```

- Calculator 클래스
- 클래스는 호이스팅이 되지 않으므로 전역 변수 선언 전 구현
- 각각의 메소드를 구현하여 버튼이 클릭될때 메소드 호출


```javascript

// new 연산자로 클래스(객체) 생성
const calculator = new Calculator();

// 계산기 초기화 메소드 호출
calculator.init();

// 각각의 버튼이 클릭될 때 그에 맞는 메소드 호출
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

```

