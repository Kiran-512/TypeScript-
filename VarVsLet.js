console.log(num1);
//console.log(num2) Block-scoped variable 'num2' used before its declaration.
var num1 = 100;
var num2 = 10;
function show() {
    var a = 10;
    if (true) {
        var a_1 = 100;
        var b = 'Hallow';
        var c = 'Hallow';
        console.log(a_1);
    }
    console.log(a);
    //console.log(b)Cannot find name 'b'.
    console.log(c);
}
// console.log(a) Cannot find name 'a'.
// console.log(c) Cannot find name 'c'.
show();
/*
undefined
100
10
Hallow
*/
// Let variabl can not be redeclared!
//Transpiler treats variable names as case sensitive
var g = '';
var G = '';
