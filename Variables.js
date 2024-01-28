const AcoountNumber = 4514141; // when declare varibale as const that means values can not be changed
let AcoountType = "Regular"; // used for declaring block scope variable
var AcoountHolderName = "Aman Reddy"; // used for declaring global scope variable
let Branch = "SBI";

console.table([AcoountNumber, AcoountType, AcoountHolderName, Branch]);

// declaring block scope variable

{
  let AcoountHolderName = "Aman Sharma";
  console.log(AcoountHolderName); //  variables that are block-scoped are only accessible inside a particular block of code
}
console.log(AcoountHolderName);
