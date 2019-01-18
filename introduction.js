// ---- ARROW FUNCTION ----
const integers = [1, 2, 3];
const ages = [23, 42, 6, 18];
// const updatedIntegers = integers.map(function(number) {
//    return number += 1
// });

// const adults = ages.filter(function(age) {
//     return age > 20
// });

// const updatedIntegers = integers.map((number) => {
//     return number += 1
// });

// const adults = ages.filter((age) => {
//     return age > 20
// });

// const updatedIntegers = integers.map((number) => number += 1);

// const adults = ages.filter((age) => age > 20);

// const updatedIntegers = integers.map(number => number += 1);

const adults = ages.filter(age => age > 20);

console.log(updatedIntegers);
console.log(adults);

// ---- SPREAD OPERATOR ----
const names = ['Jacob', 'Brandon', 'Sean'];
const moreNames = ['Wallace', 'Paul', 'Miranda'];

// What the spread operator will do is it will take every single element from out array and it expands an array into its elements. Destructuring the arrays that the elements appear individually.

console.log(names);         // ['Jacob', 'Brandon', 'Sean'] - collection of elements
console.log(...names);      // Jacob  Brandon  Sean - expands an array into its elements
// We want to create an array like this [ 'Jacob', 'Brandon', 'Sean', 'George', 'Wallace', 'Paul', 'Miranda' ]

// ES5 way of dealing with the task above
let allNamesES5 = [];
allNamesES5 = allNamesES5.concat(names);      // ['Jacob', 'Brandon', 'Sean']
allNamesES5.push('George');                // ['Jacob', 'Brandon', 'Sean', 'George']
allNamesES5 = allNamesES5.concat(moreNames);  // ['Jacob', 'Brandon', 'Sean', 'George', 'Wallace', 'Paul', 'Miranda']

console.log(allNamesES5);

// ES6 way using Spread Operator
const allNamesES6 = [...names, 'George', ...moreNames]; // ...names / ...moreNames - these are individualized elements inside of a new array - they are not a collection anymore

console.log(allNamesES6);

/* ----------------------------LIFECYCLE METHODS ---------------------------
   Different lifecycle methods of the Components, fetching data
   -------------------------------------------------------------------------

1. Constructor method - works before component is mounted to the DOM
2. Render method
3. Component did mount - is initialized just after components are in the DOM
4. Component will mount - gets invoked before the component is inserted to the DOM, before render() method gets invoked
5. Component did update - this lifecycle method gets called whenever the component is re-rendered / whenever we update state of out component to trigger a re-render
================================================
The following methods are called when a component is being added to the DOM:
1. constructor() : called before component is mounted. NEVER put side effect code inside of the constructor. Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods.
2. componentWillMount(): invoked immediately before mounting occurs. Called before render. Once again, DO NOT put any side effect code inside of componentWillMount, and do not make API calls in this method
3. render(): never fetch data inside of render. Should only be used to return elements.
4. componentDidMount(): Perfect place to fetch data. It gets called after render. This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render. This forces us to set up our initial state properly, otherwise you're likely to get undefined states.

The following methods are called when a component is re-rendered to the DOM:
1. componentDidUpdate(): called when the state of a component changes. Perfect place to update UI or make network calls based on previous state before update, and current state
================================================
