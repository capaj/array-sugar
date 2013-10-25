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
	copy: function (test) {
        var first = [1,2,3];
        var second = first.copy();
        test.equals(first.length, second.length);
		second[1] = 4;
        test.equals(first[1], 2);
        test.equals(second[1], 4);
        test.equals(first == second, false);
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
	},
	insert: function (test) {
		var arr1 = ['a', 'c'];
		arr1.insert(1, 'b');
		test.equals(arr1.length, 3);
		test.equals(arr1[1], 'b');

		arr1.insert(arr1.length - 1, 'g', 'e');
		test.equals(arr1.length, 5);
		arr1.insert(arr1.length - 1);
		test.equals(arr1.length, 5);
		test.equals(arr1.insert(arr1.length-1), arr1);
		arr1.insert(0, ['f','h']);
		test.equals(arr1.length, 7);
		test.done();
	},
	findOne: function (test) {
		var first = {a:2};
		var arr = [first, {b:3}, {c:6}, {a:2, c:3}];
		var testFn = function (e) {
			return e.a == 2;
		};
		test.equals(arr.findOne(testFn), first);

		test.notEqual(arr.findOne(testFn, true), first);
		test.equals(arr.findOne({}), undefined);
		test.done();
	},
	replace: function (test) {
		var arr = ['a', 'b', 'c'];

		test.equals(arr.replace('aaa'), false);
		test.equals(arr.replace('c', 'l'), 2);
		test.equals(arr[2], 'l');
		test.done();
	}
};
