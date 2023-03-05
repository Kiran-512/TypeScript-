console.log(num1)
//console.log(num2) Block-scoped variable 'num2' used before its declaration.

var num1: number = 100
let num2: number = 10

function show() {
  let a: number = 10
  if (true) {
    let a: number = 100
    let b: string = 'Hallow'
    var c: string = 'Hallow'
    console.log(a)
  }
  console.log(a)
  //console.log(b)Cannot find name 'b'.
  console.log(c)
}

// console.log(a) Cannot find name 'a'.
// console.log(c) Cannot find name 'c'.

show()
/*
undefined
100
10
Hallow
*/

// Let variabl can not be redeclared!
//Transpiler treats variable names as case sensitive

let g = ''
let G = ''
