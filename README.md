array-sugar
============

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

#known incompatibilities
Angular ngSanitize module in version 1.2.0-rc2 in it's method assigns to arr.last and this collides with our 'last' getter.
So beware, I have created a pull request so that ngSanitize doesn't break, but who knows when it is going to be merged. For now, use ngSanitize from my fork:
[compatible ngSanitize](https://github.com/capaj/angular.js/blob/master/src/ngSanitize/sanitize.js)

##Is it a good idea to extend array.prototype?
If I am writing a web app, NOT a library/framework, I don't consider this a bad practice. I have quite few libraries and I do not use array-sugar in them even if It would be helpful most of the time. Users of these libraries would have their Array unexpectedly modified and we can't have that. But if you are building an end product used by end-user, I think it is quite allright to do that.

Missing any sugar? Please do submit a pull or feature request.
