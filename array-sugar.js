(function (arr) {
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);	//thx to http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
	}

	/**
	 * returns an array of numbers from low to high including low and high
	 * @param {Number} low
	 * @param {Number} high
	 * @returns {Array}
	 */
	arr.range = function (low, high) {
		var r = [];
		if (isNumber(low) && (isNumber(high))) {
			while(high >= low){
				r.push(low);
				low++;
			}
		}
		return r;
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
        }
    };

    var methods = {
		/**
		 * traverses array and returns first element on which test function returns true
		 * @param test
		 * @param {Boolean} fromEnd pass true if you want to traverse array from end to beginning
		 * @returns {*|null|undefined} an element of an array, or undefined when passed param is not a function
		 */
		findOne: function (test, fromEnd) {
			var i;
			if (typeof test !== 'function') return undefined;
			if (fromEnd) {
				i = this.length;
				while(i--){
					if (test(this[i], i, this)) {
						return this[i];
					}
				}
			} else {
				i = 0;
				while(i < this.length){
					if (test(this[i], i, this)) {
						return this[i];
					}
					i++;
				}
			}
			return null;
		},
		/**
		 *	replace method
		 * @param {*} toReplace
		 * @param {*} itemWith
		 * @returns {Number|false} index when item was replaced, false when not
		 */
		replace: function (toReplace, itemWith) {
			var index = this.indexOf(toReplace);
			if (~index) {
				this[index] = itemWith;
				return index;
			} else {
				return false;
			}
		},
		/**
         * @param {*} val
         * @returns {boolean} true when item is in the array
         */
        contains: function (val) {
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
        remove: function (item) {
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
        clear: function () {
            this.length = 0;
        },
		/**
         * will return a copy of the array
         */
        copy: function () {
            return this.slice(0);
        }
    };

    for(var prop in props){
        if (!arrProt.hasOwnProperty(prop)) {
            Object.defineProperty(arrProt, prop, {
                enumerable: false,
                configurable: false,
                set: props[prop].set,
                get: props[prop].get
            });
        }
    }
    for(var m in methods){
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