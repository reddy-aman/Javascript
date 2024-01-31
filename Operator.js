// Notes
// 1. operators are symbols that perform operations on operands. for ex +,- and so on
// 2. Operands can be variables, values, or expressions

// Types of operators in js

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Conditional Operators
// 6. Type Operators

// 1. Arithmetic Operators
// +	Addition	
// -	Subtraction
// *	Multiplication	
// **	Exponentiation	
// /	Division
// %	Remainder/Moduls
// ++	Pre increment		
// ++	Post increment		
// --	Pre decrement		
// --	Post decrement

let a = 45
let b = 4
let Addition = a+b // Addition
let Subtraction = a-b // Subtraction
let Multiplication = a*b // Multiplication
let Exponentiation = a**b // Exponentiation
let Division = a/b // Division
let Moduls = a%b // Remainder/Moduls
let Preincrement = x=++a // Preincrement
let Postincrement = y=a++ // Postincrement
let Predecrement = x=--a // Preincrement
let Postdecrement = y=a-- // Postincrement

console.table([("a+b = "+ Addition),("a-b = "+ Subtraction),("a*b = "+ Multiplication),("a**b = "+ Exponentiation),("a/b = "+ Division),("a%b = "+ Moduls),("x=++a = "+ Preincrement),("y=a++ = "+ Postincrement),("x=--a = "+ Predecrement),("y=a-- = "+ Postdecrement)])

// 2. Assignment Operators
// Assignment operators assign values to JavaScript variables.
// =	
// +=	
// -=	
// *=	
// /=	
// %=	
// **=	

let x1 = 2
let y1 = 2
{
  console.table([(x1=y1),(x1+=y1),(x1-=y1),(x1*=y1),(x1/=y1),(x1%=y1),(x1**=y1)])

}

// 3. Comparison Operators
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

let ab = 30
let bc = 3
{
    console.table([(ab==bc),(ab===bc),(ab!=bc),(ab!==bc),(ab>bc),(ab<bc),(ab>=bc),(ab<=bc),])

}

// 4. Logical Operators
// &&	logical and
// ||	logical or
// !	logical not

let small_no = 3
let big_no = 4
{
    console.table([small_no<big_no && small_no == big_no])
    console.table([small_no<big_no || small_no == big_no])
    console.table([!true])

}

// 5. Type Operators

// typeof	Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type

let Type = 6
let Type1 = "Aman"
{
    console.table([typeof(Type), typeof(Type1)])
    console.table([Type instanceof Number, Type1 instanceof String])
    console.table([Type === 6, Type1 === "Aman"]);

}