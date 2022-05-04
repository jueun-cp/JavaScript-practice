//1
var nums = [100,200,300,400,500];
// nums.pop();
// nums.pop();

nums.splice(3,2);
// console.log(nums);

//2
var arr = [200,100,300];
// arr.pop();
// arr.push(100000,300);
arr.splice(2,0,10000);
// console.log(arr);

//3
// console.log(typeof(arr));nums.pop();
 
//4
var test = 2.22
// console.log(typeof(test));
//5
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a+=i;
}
// console.log(a+b);

//8
var d = {
    'height' : 180, 
    'weight' : 78,
    'weight' : 84,
    'temperature' : 36,
    'eyesight' : 1
}
// console.log(d['weight']);

//9
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/',month,'/', day, ' ',hour,':',minute,':',second);

// console.log(result);

//10
for(var i=5; i>0; i--){
    process.stdout.write(' ');
    for(var k=5-i; k<5; k++){
        process.stdout.write(' ');
    }
    // process.stdout.write('1');

    for(var j=5; j>i; j--){
        process.stdout.write('*');
    }

    process.stdout.write('*');
    for(var m =0; m<5-i; m++){
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}


for(var i=1; i<= 9; i+=2){
    console.log(" ".repeat((11-i)/2) + "*".repeat(i));
}