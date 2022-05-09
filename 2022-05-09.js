//32
let str = "안녕하세요. 저는 제주대학교 컴퓨턱홍학전공 혜림입니다."

let str_arr = str.split(" ");
// console.log(str_arr.length);

//33
numbers = '1 2 3 4 5';

console.log(numbers.split(' ').reverse().join(' '));

//34
let height = "176 156 155 165 166 169";

height_arr = height.split(" ");
height_sort = height.split(" ").sort();

// console.log(height.split(" ").sort());
var cnt = 0;
for(var i = 0; i<height_arr.length; i++){
    // console.log(height_arr[i]);
    if(height_arr[i] != height_sort[i]){
        cnt++;
    }
}

if(cnt == 0){
    console.log('YES');
}else{
    console.log('NO');
}

//35
function one(n){
    function two(m){
        const ans = Math.pow(m,n);
        return ans;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

// console.log(a(10));
// console.log(b(10));
// console.log(c(10));

//36
let input = 2;
for(let i = 1; i<10; i++){
    let answer = input * i;
    // process.stdout.write(String(answer)+" ");
    // console.log(input*i);
}

//37
let input_names = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';
let name_arr = input_names.split(" ");

let student = {};
// console.log(name_arr);
for(var n of name_arr){
    // console.log(n);
    // console.log(student);
    if(student[n] == undefined){
        student[n] = 1;
    }else{
        student[n]++;
    }
}

let max = 0;
let banjang = '';

for(let key in student){
    if(max < student[key]){
        max = student[key];
        banjang = key
    }
}
console.log(banjang+'(이)가 총 '+max+'표로 반장이 되었습니다.');


//38
let scores = '97 86 75 66 55 97 85 97 97 95';
let scores_arr = scores.split(" ");

scores_arr.sort((a,b)=> b-a);

console.log(scores_arr); 

let min_score = 100;
let idx = 0;
let count = 0;

for(index in scores_arr){
    if(count != 3){
        if(scores_arr[index] < min_score ){
            min_score = scores_arr[index];
            idx = index;
            count++;
        }
    }else{
        break;
    }
}
console.log('사탕을 줄 친구는 '+  (Number(idx)+1) +' 명 입니다');

console.log(count, idx, min_score);


//39
//정규식을 사용하여 전체 q를 e로 변경

let text = 'hqllo my namq is hyqwon';

let regexForQ = /q/gi;

text.replace(regexForQ,'e');

console.log(text.replace(regexForQ,'e'));

//40
let first_input = '50';
let second_input = '5';
let wei_arr = [20,20,20,20,20];

let wei_sum = 0;
let hum_cnt = 0;

for(let i = 0; i <second_input; i++){
    if(wei_sum + wei_arr[i] < first_input){
        wei_sum += wei_arr[i];
        hum_cnt++;
    }else{
        break;
    }
}

console.log(hum_cnt);