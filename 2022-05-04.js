//11
let s = 0;
for(var i=0; i<= 100; i++){
    s+=i;
}
// console.log(s);

//12
class Wizard {
    constructor(health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        console.log('파이어볼');
    }
}

const x = new Wizard(545,210,10);
// console.log(x.health,x.mana,x.armor);
// x.attack();

//13
var planet = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성']

// console.log(Array.isArray(planet));
// var n = prompt("몇 번째 행성일까요");

var n = 1;
if(n>8){
    console.log('행성 총 8개입니다. 다시 입력해주세요');
}else{
    console.log(planet[n-1]);
}

//14
var num = 2;

if(num % 3 == 0 ){
    console.log('짝');
}else{
    console.log(n);
}

//15
var speak_name = '가나다';

if(speak_name == '김다정'){
    console.log('안녕하세요. 저는'+ speak_name+'입니다');
}else{
    console.log('김다정으로 입력해주세요');
}


//16
var input = '거꾸로'
var input_reverse = input.split("").reverse().join("");
console.log(input_reverse);

console.log(input.split(""));         //['거','꾸','로']
console.log(input.split("").reverse()); //['로','꾸','꺼']
console.log(input.split("").reverse().join("")); //로꾸꺼

//17
var tall = 150;

if(tall >= 150){
    console.log('YES');
}else{
    console.log('NO');
}

//18
let score = '20 30 40';
let score_arr = score.split(" ");
let sum = 0, avg;
console.log(score_arr);
for(let i = 0; i<score_arr.length; i++){
    sum += Number(score_arr[i]);
}
avg = sum / score_arr.length;

console.log(avg);


//19
let numbers = '2 5';
let numbers_arr = numbers.split(" ");
let sq = 1;

for(let i = 0; i<numbers_arr[1]; i++){
    console.log(i);
    sq *= 2;
}

//20
let number_input = '10 2';
let number_arr = number_input.split(" ");
console.log(number_arr);

let qu = number_arr[0] / number_arr[1];
let re = number_arr[0] % number_arr[1];
console.log(qu, re);