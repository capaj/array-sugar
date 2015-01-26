(function(arr) {
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);	//thx to http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
  }

  /**
   * returns an array of numbers from low to high including low and high
   * @param {Number} low
   * @param {Number} high
   * @returns {Array} including low and high
   */
  arr.range = function(low, high) {
    var r = [];
    var holder;

    if (isNumber(low) && (isNumber(high))) {
      if (low > high) {
        holder = low;
        low = high;
        high = holder;
      }
      while (high >= low) {
        r.push(low);
        low++;
      }
      if (isNumber(holder)) {
        r.reverse();
      }
    }
    return r;
  };

  /**
   *
   * @param {Array} array
   * @returns {Number}
   */
  arr.max = function(array) {
    return Math.max.apply(null, array);
  };
  /**
   *
   * @param {Array} array
   * @returns {Number}
   */
  arr.min = function(array) {
    return Math.min.apply(null, array);
  };

  var arrProt = arr.prototype;
  var props = {
    first: {
      get: function() {
        if (this.isEmpty) return undefined;
        return this[0];
      },
      set: function(val) {
        return this[0] = val;
      }
    },
    last: {
      get: function() {
        if (this.isEmpty) return undefined;
        return this[this.length - 1];
      },
      set: function(val) {
        return this[this.length - 1] = val;
      }
    },
    isEmpty: {
      get: function() {
        return this.length === 0;
      },
      set: undefined
    },
    unique: {
      /**
       * @returns {getUnique} function
       */
      get: function() {
        var self = this;

        /**
         *
         * @returns {Array.<T>} with non unique items filtered out
         */
        function getUnique() {
          return self.filter(function(itm, i, a) {
            return i === a.indexOf(itm);
          });
        }

        /**
         * Inserts element to an array only if it is not present yet
         * @param {Object} item to insert
         */
        getUnique.push = function(item) {
          if (!self.contains(item)) {
            self.push(item);
          }
        };
        /**
         * Merges only unique items from both arrays
         * @param {Array} items if a si
         */
        getUnique.merge = function(items) {
          if (items && Object.prototype.toString.call(items) !== "[object Array]") {
            throw new TypeError('Array was expected as a parameter for Array.unique.merge()');
          }

          for (var i = 0, count = items.length; i < count; i++) {
            self.unique.push(items[i]);
          }
        };

        return getUnique;
      }
    }
  };

  var methods = {
    /**
     * traverses array and returns first element on which test function returns true
     * @param {Function<Boolean>} test
     * @param {Boolean} fromEnd pass true if you want to traverse array from end to beginning
     * @returns {*|null|undefined} an element of an array, or undefined when passed param is not a function
     */
    findOne: function(test, fromEnd) {
      var i;
      if (typeof test !== 'function') return undefined;
      if (fromEnd) {
        i = this.length;
        while (i--) {
          if (test(this[i], i, this)) {
            return this[i];
          }
        }
      } else {
        i = 0;
        while (i < this.length) {
          if (test(this[i], i, this)) {
            return this[i];
          }
          i++;
        }
      }
      return null;
    },
    /**
     *  replace method
     * @param {*} toReplace
     * @param {*} itemWith
     * @returns {Number} index when item was replaced, -1 when not
     */
    replace: function(toReplace, itemWith) {
      var index = this.indexOf(toReplace);
      if (~index) {	//Bitwise NOT operator-fast check if index is -1 or not
        this[index] = itemWith;
      }
      return index;
    },
    /**
     * @param {*} val
     * @returns {boolean} true when item is in the array
     */
    contains: function(val) {
      return this.indexOf(val) !== -1;
    },
    /**
     * Syntax:
     *  array.insert(index, value1, value2, ..., valueN)
     * @param {Number} index where item will be inserted, if bigger than length of an array, will be inserted at the end of an array, not
     * @param [...] unlimited amount of values to insert
     * @returns {Array}
     */
    insert: function(index) {
      index = Math.min(index, this.length);
      arguments.length > 1
      && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
      && this.insert.apply(this, arguments);
      return this;
    },
    /**
     * finds and removes the item from array
     * @param item
     * @returns {boolean} true when item was removed, else false
     */
    remove: function(item) {
      var index = this.indexOf(item);
      if (index !== -1) {
        this.splice(index, 1);
        return true;
      }
      return false;
    },
    /**
     * will erase the array
     */
    clear: function() {
      this.length = 0;
    },
    /**
     * will return a copy of the array
     */
    copy: function() {
      return this.slice(0);
    },
    /**
     * Rotates an array by given number of fields in given direction
     * @param {Number} count
     * @param {boolean} direction true for shifting array to the left
     * @returns {Array}
     */
    rotate: function(count, direction) {
      return direction ? this.concat(this.splice(0, count)) : this.splice(this.length - count).concat(this);
    }
  };

  for (var prop in props) {
    if (!arrProt.hasOwnProperty(prop)) {
      Object.defineProperty(arrProt, prop, {
        enumerable: false,
        configurable: false,
        set: props[prop].set,
        get: props[prop].get
      });
    }
  }
  for (var m in methods) {
    if (!arrProt.hasOwnProperty(m)) {
      Object.defineProperty(arrProt, m, {
        enumerable: false,
        configurable: false,
        value: methods[m],
        writable: false
      });
    }
  }
})(Array);