Object.defineProperty(Array.prototype, 'first', {
    enumerable: false,
    configurable: false,
    get: function() {
        return this[0];
    },
    set: undefined
});

Object.defineProperty(Array.prototype, 'last', {
    enumerable: false,
    configurable: false,
    get: function() {
        return this[this.length - 1];
    },
    set: undefined
});

/**
 * check whether array contains an item
 */
Object.defineProperty(Array.prototype, 'contains', {
    enumerable: false,
    configurable: false,
    /**
     * @param {*} val
     * @returns {boolean}
     */
    value: function (val) {
        return this.indexOf(val) != -1;
    },
    writable: false
});

/**
 * will erase the array and leave it empty
 */
Object.defineProperty(Array.prototype, 'empty', {
    enumerable: false,
    configurable: false,
    value: function () {
        this.length = 0;
    },
    writable: false
});

/**
 * syntactic sugar for this.length == 0
 */
Object.defineProperty(Array.prototype, 'isEmpty', {
    enumerable: false,
    configurable: false,
    get: function() {
        return this.length == 0;
    },
    set: undefined
});