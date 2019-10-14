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
function sum2(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4)) // 10
console.log(sum2(1, 2, 3, 4, 5)) // 15



// bind with args
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind2(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

Function.prototype.myBind = function(ctx) {
    let bindArgs = Array.from(arguments).slice(1);
    const that = this;
    return function _myBind() {
        let callArgs = Array.from(arguments);
        return that.apply(ctx, bindArgs.concat(callArgs));
    }

}

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
    const that = this;
    return function _myBind2(...callArgs) {
        return that.apply(ctx, bindArgs.concat(callArgs));
    }
}


function curriedSum(numArgs) {
    let nums = [];
    return function _curriedSum(num) {
        nums.push(num);
        if (nums.length === numArgs) {
            let total = nums.reduce((a,b) => a + b, 0);
            return total;
        } else {
            return _curriedSum;
        }
    }
}