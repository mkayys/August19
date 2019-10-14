function inherits(parent, child) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
}

// prototype is POJO that has shared properties of the animal
// every function has a prototype