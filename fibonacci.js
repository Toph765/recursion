function fibs(n) {
    let a = 0;
    let b = 1;
    let fib = [a, b];

    if (n < 0) return "please enter valid number";
    if (n === 1) fib = [a];

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        fib.push(c);
    }

    return fib;
}

console.log("//ITERATIVE:")
console.log(fibs(-1));
console.log(fibs(1));
console.log(fibs(5));
console.log(fibs(8));
console.log(fibs(13));

function fibsRec(n, arr = [0, 1]) {
    if (n <= 0) return "Please enter valid number";
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    if (arr.length >= n) return arr;
    else {
        let c = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(c);
        return fibsRec(n, arr)
    }
}

console.log("//RECURSIVE:");
console.log(fibsRec(-1));
console.log(fibsRec(1));
console.log(fibsRec(5));
console.log(fibsRec(8));
console.log(fibsRec(13));
