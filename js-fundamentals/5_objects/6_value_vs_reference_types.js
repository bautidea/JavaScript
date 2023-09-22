/**
 * In Js we have two categories of types:
 * !  - Value types (also called primitives):
 *      - Number.
 *      - String.
 *      - Boolean.
 *      - Symbol.
 *      - Undefined.
 *      - Null.
 * ! - Reference types:
 *      - Objects.
 *      - Functions.
 *      - Arrays.
 * Function and Arrays are Objects, so basically we have primitives and objecs.
 * We are going to see how primitives and objects behave differently.
 */

/**
 * * When we work with primitives, the values are stored inside a variable, and
 * * when we copy that variable, that value, that is stored in the 1st variable,
 * * is copied to the new variable.
 * ! The variables are completly indipendent of each other.
 * ! Primitives are copied by their value.
 */

// Defining two primitives.
let x = 10;
let y = x;

x = 20;

console.log(x); // 20
console.log(y); // 10

/**
 * * When we use an object, that object is not stored in a variable, its stored
 * * somewhere else in the memory, and the address of that memory location is stored
 * * inside that variable.
 * * So when we coppy a into b, its the adress that gets copied not the value itself.
 * ! Objects are copied by their reference
 */

// Defining an object (or reference type).
let a = { value: 10 };
let b = a;

a.value = 20;

console.log(a); // { value : 20}
console.log(b); // { value : 20}

// Another example.
function increase(number) {
  number++;
}

let number = 10;
// When we call increase and pass the 'number' variable,
// the value gets copied into the 'number' parameter,
// So the value 'number' inside the function is completely independen of the
// 'number' variable that was declared above
increase(number);
console.log(number); // 10.

// Now if we apply this to a reference type or object.
function increaseRef(numberRef) {
  numberRef.value++;
}

let numberRef = { value: 10 };

increaseRef(numberRef);
console.log(numberRef); // { value : 11 }.

// The reason that the value gets increased by one is because, when we call
// 'increaseRef' and pass this object, the object is passed by its reference.
// So the local parameter 'numberRef' in the function will poing to the same object
// that was defined below that function. 'numberRef.value' in the function is pointing
// to the adress of 'numberRef.value' variable.
