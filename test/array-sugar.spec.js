require('../array-sugar');
require('chai').should();
var arr = [1, 2, 3, 4, 5];
var emptyArr = [1, 2, 3, 4, 5];
var forRemove = [1, 2, 3, 4, 5];

describe('array-sugar methods', function(){
    it('should remove a value', function(){
		forRemove.remove(7).should.equal(false);
		forRemove.remove(5).should.equal(true);
		forRemove.last.should.equal(4);
		forRemove.length.should.equal(4);
	});

	it('should clear an array', function(){
		arr.isEmpty.should.equal(false);
		emptyArr.clear();
		emptyArr.length.should.equal(0);
		emptyArr.isEmpty.should.equal(true);
	});

	it('should copy and array', function(){
		var first = [1, 2, 3];
		var second = first.copy();
		first.length.should.equal(second.length);
		(first === second).should.eql(false);
		second[1] = 4;
		first[1].should.equal(2);
		second[1].should.equal(4);
	});

	it('should have last and first', function(){
		arr.first.should.equal(1);
		arr.last.should.equal(5);
		arr.first = -1;
		arr.last = 10;
		arr[0].should.equal(-1);
		arr[arr.length - 1].should.equal(10);
		(typeof emptyArr.first).should.equal('undefined');
		(typeof emptyArr.last).should.equal('undefined');
	});

	it('should have contains', function(){
		arr.contains(3).should.equal(true);
		arr.contains(6).should.equal(false);
	});

	describe('range for generation', function(){
	    it('should return empty array when arguments not numbers', function(){
			Array.range([], []).length.should.equal(0);
	    });

		it('should generate numbers from smaller to higher', function(){
			var r1 = Array.range(10, 5);
			r1.length.should.equal(6);
			r1[2].should.equal(8);
	    });
		it('should generate numbers from higher to smaller', function(){
			var r2 = Array.range(5, 10);
			r2.length.should.equal(6);
			r2[2].should.equal(7);
		});
	});


	it('should insert', function(){
		var arr1 = ['a', 'c'];
		arr1.insert(1, 'b');
		arr1.length.should.equal(3);
		arr1[1].should.equal('b');

		arr1.insert(arr1.length - 1, 'g', 'e');
		arr1.length.should.equal(5);
		arr1.insert(arr1.length - 1);
		arr1.length.should.equal(5);
		arr1.insert(arr1.length - 1).should.equal(arr1);
		arr1.insert(0, ['f', 'h']);
		arr1.length.should.equal(7);
	});

	it('should get rid of dupes by calling unique', function(){
		var a = [1,5,1,6,4,5,2,5,4,3,1,2,6,6,3,3,2,4];
		a = a.unique();
		a.should.eql([1,5,6,4,2,3]);
	});

	it('should insert unique only', function(){
		var arr1 = ['a', 'c'];
		arr1.unique.push('b');
		arr1.length.should.equal(3);

		arr1.unique.push('g');
		arr1.length.should.equal(4);

		arr1.unique.push('g');
		arr1.length.should.equal(4);

		arr1.unique.push('b');
		arr1.length.should.equal(4);
	});

	it('should merge unique', function(){
		var arr1 = ['a', 'b'];
		arr1.unique.merge(['c','d']);
		arr1.length.should.equal(4);

		(function() {
			arr1.unique.merge('g');
		}).should.throw();
		arr1.length.should.equal(4);

		arr1.unique.merge([]);
		arr1.length.should.equal(4);

		arr1.unique.merge(['e','b','f']);
		arr1.length.should.equal(6);

		arr1.unique.merge(['a','c']);
		arr1.length.should.equal(6);
	});

	it('should findOne', function(){
		var first = {a: 2};
		var arr = [first, {b: 3}, {c: 6}, {a: 2, c: 3}];
		var testFn = function(e) {
			return e.a === 2;
		};
		arr.findOne(testFn).should.equal(first);

		arr.findOne(testFn, true).should.not.equal(first);
		(arr.findOne({}) === undefined).should.equal(true);
	});

	it('should replace', function(){
		var arr = ['a', 'b', 'c'];

		arr.replace('aaa').should.equal(-1);
		arr.replace('c', 'l').should.equal(2);
		arr[2].should.equal('l');
	});

	it('should find max value', function(){
		var arr = [5, 9, -10];
		Array.max(arr).should.equal(9);
	});

	it('should find min value', function(){
		var arr = [5, 9, -10];
		Array.min(arr).should.equal(-10);
	});
});


