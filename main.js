// var 
// var fun = function f() { };

// function convertToString(a, b, c, d,) {
//     console.log(arguments);
//     // return String(v);
// }
// var res = convertToString( 132, 234, 'asd', true);
// console.log(res);

// var fun = (a, b) => Boolean(b - a);
// console.log(fun(5, 5));


var arr = [1, 2, 3, 4, 5];
var sum=0;
arr.forEach(function (item, index, list) {
    // for(i=0;i<arr.length;i++){
    //     console.log(item+list[i]);
    sum=sum+item;
});
console.log(sum);