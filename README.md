array-sugar  [![Build Status](https://travis-ci.org/capaj/array-sugar.svg?branch=master)](https://travis-ci.org/capaj/array-sugar)
============

## DEPRECATED

Tired of not having a last property on array in Javascript? Tired of not having contains method?
This little script solves those by adding a bit of sugar allowing you to do:
```javascript    
     Array.range(1,3)         instead      [1, 2, 3];
     Array.min([1, 3])        instead      Math.min.apply(null,[1, 3]);
     Array.max([1, 3])        instead      Math.max.apply(null,[1, 3]);
     array.contains(o)        instead      array.indexOf(o) != -1
     array.remove(o)          instead      array.splice(array.indexOf(o), 1) //remove returns true when o was removed
     array.replace(o, n)      instead      array[array.indexOf(o)] = n;
     array.findOne(test)      instead      array.filter(test)[0];
     array.clear()            instead      array.length = 0
     array.copy()             instead      array.slice(0)
     array.unique()           instead      array.filter(function(function(itm,i,a){return i === a.indexOf(itm);}))
     array.unique.push(item)  instead      if (~self.indexOf(item)) { self.push(item); }
     array.unique.merge(arr)  instead      as previous but for all items in arr
     array.insert(i,item)     instead      array.splice(i, 0, item); //plus insert can take variable number of args, not just one
     array.isEmpty            instead      array.length == 0
     array.first              instead      array[0]
     array.last               instead      array[array.length-1]
```
Usable in any environment that supports Object.defineProperty(oldest would probably be IE9).

Available through npm and bower, just require(or include with regular script tag) and you should be good to go.

    npm install array-sugar
    bower install array-sugar
    jspm install npm:array-sugar

Then require('array-sugar'); and you're done.

# known incompatibilities
Angular ngSanitize module in it's method assigns to arr.last and this collides with our 'last' getter.

## Is it a good idea to extend array.prototype?

Nope, not really-just look at #smooshgate on twitter. Don't use this library.
