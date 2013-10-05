array-sugar
============

Tired of not having a last property on array in Javascript? Tired of not having contains method?
This little script solves those by adding a bit of sugar:

    array.contains(o)      instead      array.indexOf(o) != -1
    array.empty()          instead      array.length = 0
    array.isEmpty          instead      array.length == 0
    array.first            instead      array[0]
    array.last             instead      array[array.length-1]

Usable in any environment that supports Object.defineProperty(oldest would probably be IE9).

Available through npm and bower.

    npm install array-sugar
    bower install array-sugar

Tests via nodeunit included.

Missing any sugar? Please do submit a pull or feature request.
