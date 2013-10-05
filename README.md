array-sugar
============
syns stands for syntactic sugar.
Tired of not having a last property on array in Javascript? Tired of not having contains method?
This little script solves those.

It provides syntactic sugar enabling you to use:
array.contains(o)      instead      array.indexOf(o) != -1
array.last             instead      array[array.length-1]
array.empty()          instead      array.length = 1
array.isEmpty          instead      array.length == 0

Usable in any environment that supports Object.defineProperty(oldest would probably be IE9).

Tests included.

Missing any sugar? Please do submit a pull or feature request.