// The Set object lets you store unique values of any type, whether primitive values or object references.
//Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

/*
Performance
The Set has method checks if a value is in a Set object, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the Set object. In particular, it is, on average, faster than the Array.prototype.includes method when an Array object has a length equal to a Set object’s size.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
const array = [1,2,3,2,3,4,3,2,1,5,6,7,8];
const withoutDublications = [...new Set(array)]

const arrayText = ['a','a','a','a','a','a','b','b','b','b','b','b','b','c','c','c','c','c','c','c'];
console.log('Object => new Set(arrayText)', new Set(arrayText));
const withoutDublicationsText = [...new Set(arrayText)]
console.log(withoutDublicationsText)

console.log(' ')
console.log(' ')
console.log(' ')
//Array Flat.
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const flatArr = [[1],[[1,2]],[[[3,4,5]]]]
console.log('Without Flat',flatArr)
console.log('with Flat first item ',flatArr.flat())
console.log('with Flat second item ',flatArr.flat(0))
console.log('with Flat last item ',flatArr.flat(2))
//
console.log(' ')
console.log(' ')
console.log(' ')
//The console.trace() method outputs a stack trace to the Web console.
console.trace(new Date())
console.log(' ')
console.log(' ')
console.log(' ')
const printMethod = () => console.trace('Print stack')
const traceFunction  = () => printMethod();
traceFunction();
console.log(' ')
console.log(' ')
console.log(' ')

//flatmap
//The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
const flatMapArr = ['my','name,is,:','Ali,Abu,Ras','.']
console.log( flatMapArr.flatMap(word => word.split(',')).join(' '));
console.log(' ')
console.log(' ')
console.log(' ')
// print number and currancy 
const number = 1234.5;
const lang = 'en-US';
const option = {
    style:'currency',
    currency:'USD'
}

const out = number.toLocaleString(lang,option)
console.log(' ---> out', out);
console.log(' ')
console.log(' ')
console.log(' ')
// using slice with negative number to get items from the end of the array.
const numArr = [1,2,3,4,5,6,7,8,9,0]
console.log('numArr.slice(-1)', numArr.slice(-1));
console.log('numArr.slice(-2)', numArr.slice(-2));
console.log('numArr.slice(-3)', numArr.slice(-3));
