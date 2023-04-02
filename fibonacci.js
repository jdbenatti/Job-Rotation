function getFibonacci(e){

    var num = parseInt(document.getElementById('numero').value);

    if (isFibonacci(num)) {
        alert(num + " é um numero Fibonacci");
    } else {
        alert(num + " nao é um numero Fibonacci");
    }
}

function isFibonacci(n) {

    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function isPerfectSquare(x) {
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}