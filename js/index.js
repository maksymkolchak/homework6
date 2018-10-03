const inputValue = parseInt(prompt('Enter your value:'));

//cycle
function fibCycle(inputValue) {
    let first = 1;
    let second = 1;
    let next;
    for (let i = 2; i < inputValue; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
}


//array
function fibArr(inputValue) {
    let fibNumArr = [1, 1];
    for (var i = 2; i < inputValue; i++) {
        fibNumArr.push(fibNumArr[i - 2] + fibNumArr[i - 1])
    }
    return fibNumArr.pop();
}

//recursion
function fibRec (inputValue){
    if (inputValue <= 2){
        return 1;
    }
    return fibRec(inputValue - 2) + fibRec(inputValue -1);
}

document.write('In cycle ' + fibCycle(inputValue));
document.write('<br>In array ' + fibArr(inputValue));
document.write('<br>in recursion '+ fibRec(inputValue));