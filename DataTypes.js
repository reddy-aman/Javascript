// Total 7 primitive data types in js
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

let a = 241
let b = 24.25
let c = "Aman Reddy"
let d = BigInt(78574)
let e = true
let f ;
let g = null
let h = Symbol("I am Symbol")

console.table([typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(f),typeof(g),typeof(h)])
console.table([a,b,c,d,e,f,g,h])

// non primitive data types in js
// declaration of Objects

const items = {
    "Aman" : true,
    "Reddy": false,
    "Tejas" : 127,
    "Nothing" : undefined
}

console.table(items)