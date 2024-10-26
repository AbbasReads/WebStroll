let variable = 7;
let arr = new Array(variable);
if (variable == 0)
    console.log(1)
else {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i + 1;
    }
    let fact = arr.reduce((a, b) => a * b)
    console.log(fact);
}