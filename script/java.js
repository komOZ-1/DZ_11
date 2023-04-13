//Задача 1
console.log('Задача 1');
function task1(a,b,c) {
    return (a-b)/c;
}
console.log(task1(30, 20, 10))

//Задача 2
console.log('Задача 2');
function task2(n1, n2){
    n1 = n1 * n1 * n1;
  console.log(n1 + ' <----куб числа')
    n2 = n2 * n2;
  console.log(n2 + ' <----квадрат числа')


}
task2(2, 2);

//Задача 3
console.log('Задача 3');
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

 function max (a, b) {
    if ( a > b) {
        return a;
    } else {
        return b;
    }

 }

console.log(min(25, 12))
console.log(max(25, 12))

//Задача 4
console.log('Задача 4');
let firstNum = prompt("Введите первое число:  ", "1"),
    secondNum = prompt("Введите первое число:  ", "50");

function printArray(arrayPrint) {
    console.log('Ваш массив: [' + arrayPrint.join() + ']')
}

function getArrayByRange(firstNum, secondNum) {
    let resultArr = [];

    if (firstNum >= secondNum) {
        return [];
    }

    for(let i = firstNum; i <= secondNum; i++) {

        resultArr.push(i);
    }

    return resultArr;
}

printArray(getArrayByRange(firstNum, secondNum))


//Задача 5
console.log('Задача 5');

function isEven (number) {
    let x;
    if (number % 2 == 0) {
        x = true;
    } else {
        x = false;
    }
    return x;
}

console.log(isEven(11));




//Задача 6
console.log('Задача 6');
let arr = [2,1,3,4,5,6,7,8,9,10,11,12,13];
let arr2 = [];

for (let i = 1; i < arr.length; i++) {
    if (isEven(i)) {
        arr2.push(i);
    }
}

console.log(arr2);



//Задача 7
console.log('Задача 7');
function task7(n, s){
    if (+n == NaN) return;
    for(let i = 1; i < n; i++){
        let m = '';
        for(let j = 0; j < i; j++){
            m+= s == undefined || s.trim() == '' ? i : s;
        };
        console.log(m+'\n')
    }
}
task7(prompt('число строк'), prompt('символ'))






//Задача 8
console.log('Задача 8');
function task8(arr) {
    let start = arr.length,
        finish = start,
        row = '';

    for (let i = 0; i < arr.length; i++) {
        row = '';
        for (let j = 1; j < arr.length + arr.length; j++) {
            if (j >= start && j <= finish) {
                row += arr[i];
            } else {
                row += ' ';
            }
        }
        start--;
        finish++;
        console.log(row);
    }

}

task8(['*','*','*','*','*']);


//Задача 9
console.log('Задача 9');
function fibonacci() {
let n = 17;
let fibnum = [0, 1];
    for (i = 2; i < n; i ++) {
        fibnum[i] = fibnum[i-1] + fibnum[i-2];
    }
    console.log(fibnum.slice(0,n));
}
fibonacci()


//Задача 10
console.log('Задача 10');




//Задача 11
console.log('Задача 11');






//Задача 12
console.log('Задача 12');






//Задача 13
console.log('Задача 13');











