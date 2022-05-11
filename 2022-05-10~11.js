//41
let input = 15;
let cnt = 0;
for(let i = 2; i <input; i++){
    if(input % i == 0){
        cnt++;
    }
}
if(cnt == 0){
    console.log('YES');
}else{
    console.log('NO');
}


//42
let input_month = 5;
let input_day = 26;
let date = new Date(2020,input_month-1,input_day);
// console.log(date);




//43
let input_number = 13;
let stack = [];
stack.push(1);

console.log(input_number);
while(input_number > 1){
    // console.log(1  ,input_number % 2);
    // stack.push(input_number % 2);
    input_number = Math.floor(input_number / 2); 
    // console.log(2 , input_number);
    if(input_number > 1){
        stack.push(input_number % 2);
    }else{
        stack.push(input_number);
    }
}
// console.log(input_number, 2);
console.log(stack.join(""));


//44
input01 = '18234';   //3849

input01_arr = input01.split("");
input01_sum = 0;
for(let n of input01_arr){
    input01_sum += Number(n);
}

console.log(input01_sum);


//45


//46
let nums = '101112131415';
let nums_arr = nums.split("");
let sums = 0;
console.log(nums_arr);

for(let n of nums_arr){
    sums += Number(n);
}

console.log(sums);

//47
const people = [
    ('이호준', '01050442903'),
    ('이호상', '01051442904'),
    ('이준호', '01050342904'),
    ('이호준', '01050442903'),
    ('이준', '01050412904'),
    ('이호', '01050443904'),
    ('이호준', '01050442903')
]

const set = new Set(people);

console.log(set.size);

//48

let alphabet = 'AAABBBcccddd';
let alphabet_arr = alphabet.split('');

let answer = '';

for(let al of alphabet_arr){
    answer += al.toUpperCase() == al ? al.toLowerCase() : al.toUpperCase()
}
console.log(answer);

//49
let num = '10 9 8 7 6 5 4 3 2 1';
let num_arr = num.split(" ");

let num_max = 0;

for(let i=0; i<num_arr.length; i++){
    if(num_arr[i] < num_arr[i+1]){
        num_max = num_arr[i];
    }
}

console.log(num_max);

//50
function bubble(arr){
    let result = arr.slice();

    for(let i = 0; i< result.length; i++){
        for(let j=i; j<result.length; j++){
            if(result[j] > result[j+1]){
                let tmp = result[j];
                result[j] = result[j+1];
                result[j+1] = tmp;
            }
        }
    }
    return result;
}

const items = prompt('입력하세요.').split(' ').map((n)=> {
    return parseInt(n,10);
})

console.log(bubble(items));


// let str = '4 2 3 8 5';
// let arr = str.split(" ");
// console.log(str.split(' '));
// arr.map((n)=>{
//     console.log(n);
//     return Number(n);
// })


// for(let i = 0; i<arr.length; i++){
//     for(let j = i; j<arr.length; j++){
//         if(arr[j] > arr[j+1]){
//             let tmp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = tmp;
//         }
//     }
// }
// console.log(arr);