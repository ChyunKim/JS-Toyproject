// Game 관련 정보를 담는 객체 (게임초기화, 턴변경, current 점수합, total 점수합)
class Game {
    constructor(tscore) {
        this.tscore = tscore;
        this.initGame();
    }
    // 게임 초기화
    initGame() {
        this.turn = 0;
        this.bank = [0,0];
        this.tempscore = [0,0];
        this.totalscore = [0,0];
        for(let i=0; i<2; i++){
            bankscroe[i].innerText = 0;
            playerscore[i].innerText = 0;
        }
        diceimg.src = `./img/${0}.png`;
    }
    // 턴변경
    nextTurn() {
        this.bank[this.turn] = 0;
        bankscroe[this.turn].innerText = 0;
        this.turn === 0 ? this.turn = 1 : this.turn = 0;
    }
    // bank점수 합
    bankScore(score) {
        this.bank[this.turn] += score;
        bankscroe[this.turn].innerText = this.bank[this.turn]; 
    }
    //player total 점수
    totalScore() {
        this.tempscore[this.turn] = this.bank[this.turn];
        this.totalscore[this.turn] += this.tempscore[this.turn];
        playerscore[this.turn].innerText = this.totalscore[this.turn];
        if(this.totalscore[this.turn] >= this.tscore) {
            alert( `PLAYER ${this.turn+1} 승리!`);
            this.initGame();
        }
    }
}

const gamebtn = document.getElementById('gamebtn');
const rollbtn = document.getElementById('rollbtn');
const bankbtn = document.getElementById('bankbtn');
const diceimg = document.querySelector('.dice');
const playerscore = document.querySelectorAll('.player-score');
const bankscroe = document.querySelectorAll('.bank-score');

let targetscore = 50;

// 체크된 input 값 받아오기
const radioList = document.getElementsByName("target-score")
for(const radioBtn of radioList){
  radioBtn.addEventListener('click', (e)=>{
    targetscore = Number(e.target.value)
  }) 
}

const game = new Game(targetscore);

// newgame 버튼 클릭시 게임 초기화
gamebtn.addEventListener('click', () => {
    game.initGame();
})

// roll 버튼이 클릭되었을때
rollbtn.addEventListener('click', ()=> {
    let dicenum = rollDice();
    diceimg.src = `./img/${dicenum}.png`;
    dicenum === 1 ? game.nextTurn() : game.bankScore(dicenum);
})

// bank 버튼이 클릭되었을때
bankbtn.addEventListener('click', () => {
    game.totalScore();
    game.nextTurn();
})

// 랜덤한 주사위 수가 나오도록 설정하는 함수
function rollDice(){
    return Math.floor(Math.random() * 6)+1
}

