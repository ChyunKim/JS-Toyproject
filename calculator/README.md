# 계산기
단순한 사칙연산 계산기 기능 구현하기

![image](https://user-images.githubusercontent.com/53160685/179360186-89dc2b23-181e-4631-b1ab-056fc7247df7.png)

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
                <button class="num">C</button>
                <button class="num">+/-</button>
                <button class="num">%</button>
                <button class="num">0</button>
                <button class="num">.</button>
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
    display: grid;
    grid-template-rows: repeat(5, 90px);
    grid-template-columns: repeat(3, 90px);
}

.num:nth-child(4){
    grid-area: 5/1/5/3;
}

.num:nth-child(5){
    grid-area: 5/3
}

.oper-wrapper {
    display: grid;
    grid-template-rows: repeat(4, 90px);
    grid-template-columns: repeat(1, 90px);
}
```

- 각각의 버튼을 grid를 활용하여 배치되도록 스타일적용
- 0은 grid area를 다른 버튼 보다 넓게 적용


