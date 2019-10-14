// with arguments keyword
function sum() {
    let args = Array.from(arguments);
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;

}

// with rest operator
// function sum() {

// }

console.log(sum(1, 2, 3, 4)) // 10
console.log(sum(1, 2, 3, 4, 5)) // 15