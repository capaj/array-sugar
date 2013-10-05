require('./index');
var arr = [1,2,3,4,5];

module.exports = {
    empty: function (test) {
        var fullArr = [1,2,3,4,5];
        test.equals(arr.isEmpty, false);
        fullArr.empty();
        test.equals(fullArr.length, 0);
        test.equals(fullArr.isEmpty, true);
        test.done();
    },
    lastFirst: function (test) {
        test.equals(arr.last, 5);
        test.equals(arr.first, 1);
        test.done();
    },
    contains: function (test) {
        test.equals(arr.contains(3), true);
        test.equals(arr.contains(6), false);
        test.done();
    }
};
