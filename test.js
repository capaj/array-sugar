require('./array-sugar');
var arr = [1,2,3,4,5];
var emptyArr = [1,2,3,4,5];
var forRemove = [1,2,3,4,5];

module.exports = {
    remove: function (test) {
        test.equals(forRemove.remove(7), false);
        test.equals(forRemove.remove(5), true);
        test.equals(forRemove.last, 4);
        test.equals(forRemove.length, 4);
        test.done();
    },
    clear: function (test) {
        test.equals(arr.isEmpty, false);
        emptyArr.clear();
        test.equals(emptyArr.length, 0);
        test.equals(emptyArr.isEmpty, true);
        test.done();
    },
    lastFirst: function (test) {
        test.equals(arr.first, 1);
        test.equals(arr.last, 5);
        arr.first = -1;
        arr.last = 10;
        test.equals(arr[0], -1);
        test.equals(arr[arr.length-1], 10);
        test.equals(typeof emptyArr.first, 'undefined');
        test.equals(typeof emptyArr.last, 'undefined');
        test.done();
    },
    contains: function (test) {
        test.equals(arr.contains(3), true);
        test.equals(arr.contains(6), false);
        test.done();
    },
	range: function (test) {
		test.equals(Array.range([],[]).length, 0);
		test.equals(Array.range(10,5).length, 0);
		test.equals(Array.range(5,10).length, 6);
		test.done();
	}
};
