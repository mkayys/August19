Array.prototype.uniq = function() {
    let uniqArr = [];
    this.forEach(el => {
        if (!uniqArr.includes(el)) {
            uniqArr.push(el);
        }
    })
    return uniqArr;
}

Array.prototype.twoSum = function() {
    let pairs = [];

    for(let i = 0; i < this.length-1; i ++) {
        for(let j = 1; j < this.length; j++) {
            let pair = [];
            if (this[i] + this[j] === 0) {
                pair.push(i, j);
                pairs.push(pair);
            }
        }
    }
    return pairs;
}