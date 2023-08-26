//Exercise-1
var btn__ex1 = document.getElementById('btn__ex1');
btn__ex1.addEventListener('click',function(){
    var S = 0;
    var n = 0;

    while(S < 10000){
        n++;
        S += n;
    }

    document.getElementById('result__ex1').innerHTML = `
    Số nguyên dương nhỏ nhất là: ${n}
    `
});

//Exercise-2
var btn__ex2 = document.getElementById('btn__ex2');
btn__ex2.addEventListener('click',function(){
    numberX = document.getElementById('numberX').value * 1;
    exponentN = document.getElementById('exponentN').value * 1;
    Sum = 0;

    for(i = 1 ; i <= exponentN ; i++){
        Sum += Math.pow(numberX , i)
    }

    document.getElementById('result__ex2').innerHTML = 'Tổng: ' + Sum;
});

//Exercise-3
document.getElementById('btn__ex3').onclick = function(){
    var numberN = +document.getElementById('numberN').value;
    var factorial = 1;

    for(i = 1 ; i <= numberN ; i++){
        factorial *= i;
    }

    document.getElementById('result__ex3').innerHTML = 'Kết quả của giai thừa là: ' + factorial;
}


//Exercise-5
// function checkPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     if (num <= 3) {
//         return true;
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//         return false;
//     }
//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) {
//             return false;
//         }
//         i += 6;
//     }
//     return true;
// }

function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

document.getElementById('btn__ex5').onclick = function(){
    var inputValue = +document.getElementById('inputValue').value;
    var arrayInput = [];

    for(var i = 1; i <= inputValue; i++){
       if(checkPrime(i) == true){
            arrayInput.push(i);
       }
    }

    document.getElementById('result__ex5').innerHTML = arrayInput;
}

//Exercise-4
document.getElementById('btn__ex4').onclick = function(){
    for (let i = 1; i <= 10; i++) {
        const printDIV = document.createElement('div'); 
        printDIV.className = 'box'; 
            
        if (i % 2 === 0) {
            printDIV.style.backgroundColor = 'red';
        }else if(i % 2 !== 0) {
            printDIV.style.backgroundColor = 'blue';
        } 
        document.body.appendChild(printDIV);
    }

    document.getElementById('result__ex4').innerHTML = printDIV; 
}