//21
var x= new Set('javascript');

console.log(x);

//22
var six = 12;
console.log(six && 6 == 0);

//24
var name = 'marry';
console.log(name.toUpperCase());

//25
function circle(n){
    return n*n*3.14;
}

console.log(circle(3));

//26
var planet = 
{
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune'
};

function sayEngName(str){
    return planet[str];
}
var str = '지구';
console.log(sayEngName(str));


//27
var student = {};
function addStudent(str1, str2) {
    var arr = str1.split(' ');
    var arr2 = str2.split(' ');
    for(var i=0; i<arr.length; i++){
        student[arr[i]] = arr2[i];
    }
}

var input1 = 'Yujin Hyewon';
var input2 = '70 100';

addStudent(input1,input2);


//28
var program = 'Javascript';
for(var i=0; i<program.length-1; i++){
    console.log(program[i],'',program[i+1]);
}

//29
var spell = 'A';
if(spell == spell.toUpperCase()){
    console.log('YES')
} else{
    console.log('NO')
}

//30
var input01 = 'pineapple is yummy';
var input02 = 'apple';

console.log(input01.indexOf(input02));