
// First Installtaion of node is mandatory and then only we can install the typeScript

// npm install - g typescript

// check version
// node -v
// tsc -v


// tsc.cmd -init
// tsc.cmd -v
//tsc.md filename.ts

// Use tsc.cmd instead of tsc
// example:
// Before: tsc script.ts && node script.js
// After: tsc.cmd script.ts && node script.js


/*
TypeScript Compilation :
Node filename.js - to view result on console
tsc.cmd file.ts - convert into file.js
*/

/*
= > Data types in typescript
:-> Build-in dataTypes
1. number
(float and double doesnt exist here, for this also number data type is used)

2. string

3. Boolean

4. void
used with functions, when func returns nothing

5. null
Nullable values can be stored withthe null dataType.

6. undefined
- Any variable which isn't initialised in typeScript, so it takes undefined a default value!

:-> UserDefined dataTypes

1. Array

2. Tuple

3. Enum

4. Class

5. Interface

6. Functions
*/


// TypeScript Annotation
/*
We can specify the type using :Type or : Type
after the variable parameter or property!
*/

/ Variables in TypeScript /
/*
1. $ and _ is acceptable anywhere
$1Number, $2Number, _1Number - OK
1$Number, 1_Number  - Not Ok

- Variables must be declared before it's use!
*/
