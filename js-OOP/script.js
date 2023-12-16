class Animal {
    constructor(name, mainColor, sound) {
      this.name = name;
      this.mainColor = mainColor;
      this.sound = sound;
    }
    scream(intensity) {
      console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
  }
  
  // The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
  class Cat extends Animal {
    constructor(name, mainColor, sound, nbOfLegs) {
      // `super` refers to the constructor of the parent (Animal)
      // with super Cat gets all the attributes and methods of the Animal class
      super(name, mainColor, sound);
      this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
    }
  }
  
  const garfield = new Cat('Garfield', 'orange', 'Meow', 4);
  console.log(garfield);
  // {
  //   name: 'Garfield',
  //   mainColor: 'orange',
  //   sound: 'Meow',
  //   nbOfLegs: 4
  // }
  
  garfield.scream(2); // <== Meow !!
  garfield.scream(5); // <== Meow !!!!!
  
  // 2nd example:
  class Chameleon extends Animal {
    // Override of the default constructor
    constructor(name) {
      super(name, 'green', '...');
    }
    // Add a new method 'changeColor()'
    changeColor(newColor) {
      this.mainColor = newColor;
    }
  }
  
  const pascal = new Chameleon('Pascal');
  pascal.changeColor('red');
  console.log(pascal);
  // {
  //   name: 'Pascal',
  //   mainColor: 'red', <== notice the difference
  //   sound: '...'
  // }
  
//   Inheritance

class BankAccount {
    constructor(clientName, currency) {
      this.clientName = clientName;
      this.currency = currency;
      this.balance = 0.0;
    }
  
    showBalance() {
      return `${this.currency} ${this.balance}`;
    }
  
    withdrawMoney(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        throw new Error('not enough funds');
      }
    }
  
    depositMoney(amount) {
      this.balance += amount;
    }
  }
  
let account1 = new BankAccount('mike', '$');
account1.depositMoney(100);
account1.withdrawMoney(25);
console.log(account1.showBalance())
  // $ 75


// ﻿﻿As we can see, and already know, the constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.


// Inheritance


class BusinessBankAccount extends BankAccount {
    constructor(clientName, currency, companyName) {
      super(clientName, currency);
      this.companyName = companyName;
    }
  }
  
const sandbox = new BusinessBankAccount('ana', 'eur', 'sandbox');

console.log(sandbox.showBalance()); // => eur 0


// ﻿﻿A constructor can use the super keyword to call the constructor of the superclass.

// extends is a keyword we use to 'substitute' the steps we have done with the first version (super confusing NewFunction.prototype = Object.create(OldFunction.prototype) and NewFunction.prototype.constructor = NewFunction) but in a much cleaner and easier way. So the extends keyword is used in class declarations or class expressions to create a class as a child of another class.

// 💡 It's important to know the ES5 way of doing things because the ES6 way is simply syntactic sugar on top of that to make things prettier. This being said, the logic stays the same.


// To explore a bit more on the topic of the constructor functions, look for the self-guided lessons that follow as well as the resources in the Extra resources section.

// Summary

// We've seen how to create methods (a function linked to an object) and we've seen the keyword this that refers to the current object.

// A class is a tool to create objects faster

// To create a class, we have to write class MyClassName { some code here }

// To inherit from a class, we have to write class ChildClass extends ParentClass



// Introduction

// As already mentioned in the Functions Intro lesson, we can declare functions in 3 different ways: as function declaration (aka statements), as function expressions and as an instance of the global Function object constructor.

// We learned the proper syntax for function declarations would be the following:

function calcSum(x, y) {
  return x + y;
}

calcSum(12, 23); // => 35

// where:

// function is a reserved keyword and serves to show that a particular block of code to be executed will be wrapped under a certain name;

// the name we gave to this function is calcSum;

// (x, y) are parameters to be passed in the function and to be used in between {...} which represents the function body; these are placeholders which will be replaced by some real values at the moment when this function gets executed;

// the return statement shows what will be the returned value from the function. Also, we said that the return is the last piece of code to be executed within the function and that if by accident, we add some code after the return it won't be executed.

// calcSum(12, 23) is the function call, when the function gets executed with some real values passed instead of x and y. 12 and 23 are function arguments.


// Function expression

// Now when we know how to declare and invoke named functions (function statements), it is going to 
// be very easy to explain how to do the same with function expressions. Before we show you how to 
// work with function expression, we need to mention briefly that functions are treated as so-called 
// first-class objects in JavaScript. It must be very confusing to see that - functions are objects?!? 
// But by the end of this course, you will know how and why "everything in JavaScript is an object", 
// including functions. If you are curious to know more about this topic, check the extra resources 
// section later. For now, keep going.

// So if functions are treated as objects, that means they can be assigned to variables (meaning, 
//     they can be stored in variables). And that brings us to function expressions.

// function declaration (statement)
function welcomeMessage(message) {
  return message;
}

// function assigned to a variable
const greeting = welcomeMessage('So nice to have you here! Welcome!');
console.log(greeting); // So nice to have you here! Welcome!


// ﻿﻿Why would we want to do this? For example, we could pass the variable greeting to some other 
// function as an argument.

// The above is a "schooly way" to explain function expressions. Here is how you could and you will 
// do it yourself now when you know that functions can be stored in variables:﻿﻿

// function expression - is a function without name stored in a variable
const welcomeMessage1 = function (message) {
  console.log(message);
};

welcomeMessage1('So nice to have you here! Welcome!');
// => So nice to have you here! Welcome!

// Function declaration vs. function expression

// 💡 A function declaration is a named function and can be stored in a variable if needed (example with greeting). A function expression is an un-named (or so-called anonymous) function that is stored in the variable.

// Both can be reused throughout the code. 

// Function expressions and declarations do the same thing pretty much. In both examples, to call them you do the same (welcomeMessage()), and then they execute whatever code is inside their code block (or how we call it - the function body) {..} .

// So what's the catch, why we have to know both?

// Well, there is a difference and it is not related to what they do, but how they are executed. The order in which code gets executed is what determines the difference between these two. Check this:
// ﻿﻿To understand why and how this happened, we will introduce the concept of hoisting.

// function declaration (statement)

checkFuncDeclaration(); // => Func declaration CAN be invoked before it's defined.
function checkFuncDeclaration() {
  console.log('Func declaration CAN be invoked before it is defined.');
}

// function expression
// checkFuncExpression(); // => ReferenceError: checkFuncExpression is not defined

const checkFuncExpression = function () {
  console.log('Func expression CAN NOT be invoked before it is defined.');
};

// ⚠️ Hoisting is a concept related to the way how programming language gets interpreted by a machine 
// that executes it. This concept is related to any type of variables and data types, and it is not 
// correlated to the functions only. :


// When JavaScript code gets executed, it happens from top to bottom and from left to the right side. Meaning whatever we wrote on line 1 in our code snippet will be executed before anything that comes on line 2, and whatever is on line 2 will be executed before line 3 and so on. This implies, to use a variable, you need to declare it first. However, that is not the case when it comes to function declarations. Function declarations get hoisted (lift) to the top of the code before any other code gets executed. How this process of lifting function declarations happens? Before any code runs, your JavaScript code needs to be interpreted (translated into browser understandable code). In this process of interpretation, function declarations get hoisted on the top of the code. That is why we were able to call the function before we even declared it. So when it comes to the execution phase, function declarations are already interpreted and loaded, which means they can be used although they will be defined at some point later on.

// As you might imagine, the same process doesn't happen with the function expressions. They get interpreted in the exact line where they are written so they can be used only after they are defined first.


// Anonymous functions

// You already have seen these in the examples above, but let's give them some attention since they deserve it. 😉

// An anonymous function is a function without a name.

// An anonymous function usually is not available to be used after its initial creation. The reason to create a function without any name is that it will be used just in that very moment and never again in your code, so really no need to name them. 

// Anonymous functions as other function's arguments

// Anonymous functions can be used as an arguments passed to another function. Here are some examples:

function printName(name, anonFunc) {
    anonFunc(name);
  }
  
  printName('sandra', function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
  });
  
  // => Sandra
  function getLength(str, anonFunc) {
    anonFunc(str);
  }
  
  getLength('aleksandra', function (str) {
    console.log(`${str} has ${str.length} letters.`);
  });
  
  // => aleksandra has 10 letters.
  
  getLength('nick', function (str) {
    console.log(`${str} has ${str.length} letters.`);
  });
  // => nick has 4 letters.
  
  




//   Very often, we will use anonymous functions as arguments in the setTimeout() JavaScript native method:

  setTimeout(function () {
    console.log('I am anonymous function and I will execute after 1 second.');
  }, 1000);
  
  // ... nothing happens for 1 second
  // => I am anonymous function and I will execute after 1 second.


//   Since anonymous functions are not available to be used later, if, for some reason, we have a need to use them, we should give them a proper function declaration or function expression structure. Then we will be able to reference them and use them whenever we need to do so.

function notifyUser() {
    console.log('I am anonymous function and I will execute after 1 second.');
  }
  
setTimeout(notifyUser, 1000);

// Arrow functions

// According to the official MDN arrow function docs, an arrow function expression is a syntactical alternative to a regular function expression.

// This update was introduced with ES6 and its main goal is to introduce simpler syntax and help with some earlier challenges related to the scope with nested functions/methods (we will learn much more about scope in one of the next lessons, but in this one we will just demo how it really looks).

// Let's see how arrow functions look like:

// function expression syntax
const greeting2 = function (name) {
  console.log(`Hello, ${name}!`);
};

// arrow function syntax
const greeting3 = name => {
  return name;
};


// ✅ As we can see, the keyword function is omitted, the parameter doesn't have braces around (although this changes when we have more than one parameter), and there's => arrow between the parameter and the body ({...}) of the function. 

// But this function can, even more, be shortened - since we return only one expression (there is only one line of code in the body), so we can omit the braces and skip the return since it's implicit:

const greeting4 = name => `Hello, ${name}!`;

greeting4('Ana'); // => Hello, Ana!

// So much cleaner and shorter! In case there are no parameters passed then empty parentheses are mandatory:

const greeting5 = () => console.log('Hello there!');

// The this keyword and the matter of a scope

// This concept will be explained in one of the next lessons much deeper, but for now, let's see what we can do to simplify it, so you understand the basics.

// Let's take the next example - a simple object with two 3 properties, where one of them is a method:

const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      console.log(this);
      console.log(this.name);
    }
  };
  
console.log(user.getOlder());
  // => { name: 'ana', age: 29, getOlder: [Function: getOlder] }
  // => ana

// As shown, the keyword this refers to the object (user) itself. So if we would like to get Ana older for a year, we could update our code as follows:

const newUser = {
    name: 'Ana',
    age: 29,
    getOlder: function(){
        this.age += 1;
        console.log(this.age);
    }
};

console.log(newUser.getOlder());

// ﻿﻿Cool! Now, let's add the setInterval() JS native method to make Ana "older" every second for one year:

const user1 = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      setInterval(function () {
        this.age += 1;
        console.log(this);
      }, 1000);
    }
  };


  
// user1.getOlder();


// *********************

// The arguments object

// Inside the body of a function, you can access an object called arguments. This object represents all the arguments passed to a function. The specific thing related to it is that this is an array-like object. According to the MDN, “array-like” means that arguments have a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach()

function printSomething() {
    console.log(arguments);
  }
  
  printSomething('hi');
  
  // [Arguments] { '0': 'hi' }
  
//   We can use the square bracket [] to access the arguments: arguments[0] returns the first argument, arguments[1] returns the second one, and so on. We can also use the length property of the arguments object to determine the number of arguments.

function printSomething() {
    console.log('arguments length: ', arguments.length);
    console.log('all: ', arguments);
    console.log('first arg: ', arguments[0]);
    console.log('second arg: ', arguments[1]);
  }
  
  printSomething('hi', 'there');

//   How to use the arguments?

// The arguments can be used in the for loop:

function printArgs() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  
  printArgs('hey', 'there', 'rooter');
  
  // hey
  // there
  // rooter
  
  printArgs(1, 77, { name: 'milo' }, ['cat', 'dog']);
  
  // 1
  // 77
  // { name: 'milo' }
  // [ 'cat', 'dog' ]

//  Keep in mind that arguments is an object so .forEach() and other array specific methods can't be used on it. If you try to use array methods on it, you will get an error similar to this one:

// TypeError: arguments.forEach is not a function

// However, you should treat it as an array when using it in your code. Although it has some limitations, this "array-like object" can be easily turned into an array, if needed:

// Check the example here:

function useArgsAsArr() {
  const argsArr = Array.from(arguments);

  argsArr.forEach(el => console.log(el));
}

useArgsAsArr('i', 'am', 'iterated', 'with', 'forEach');

// i
// am
// iterated
// with
// forEach


// Context﻿

// Introduction

// Context refers to the value of this for the code that is running:

// CONTEXT === THIS


// Global Context

// When we are in the global scope, this is always a reference to the window object:

var a = 1;

console.log(this); // Window object
// console.log(this === window); // true

// console.log(window.a); // 1
console.log(this.a); // 1
console.log(a); // 1

// If we declare a function, it will create a new scope, but the context in which that function runs will still be the same. By default, a function always runs in the scope of the object it belongs to:

function foo() {
  console.log(this); // Window object
}

foo();


// JavaScript Function Internals

// JavaScript has the ability to modularize logic in functions which can be invoked at any point within the execution.

// Invoking a function is pretty easy, but what does exactly happens when we call a function? Javascript follows these steps:

// Suspends execution of the current function

// Passes controls to the invoked function

// Passes (secretly) two parameters to the invoked function:

// An array named arguments

// A parameter named this

function doStuff(a, b) {
  console.log(arguments); // ['hi', 2, 8]
}
doStuff('hi', 2, 3 + 5);

// Even though there is only one invocation operator (), there are four invocation patterns, 4 different ways of calling functions. Each pattern differs in how the this parameter is initialised. Invoking a function with a different pattern can produce a vastly different result.

// Method Invocation

// When a function is part of an object, it is called a method. Method invocation is the pattern of invoking a function that is part of an object. For example:

var obj = {
  value: 0,
  increment: function () {
    this.value++;
  } // this == obj
};

obj.increment();

// ﻿﻿Method invocation can be easily identified when a function is preceded by object., where object is the name of some object. JavaScript will set the this parameter to the object where the method was invoked on. JavaScript binds this at runtime (also known as late binding).

// Function Invocation

// When we call a function normally, we are using the function invocation pattern, and JavaScript will bind the value of this to the global object.
// What would the following code do?

var value = 500;
var obj = {
  value: 0,
  increment: function () {
    this.value++;

    var innerFunction = function () {
      console.log(this.value);
    };

    innerFunction(); // Function invocation pattern
  }
};
obj.increment(); // Method invocation pattern

// ﻿﻿The real answer is 500, not 1. Note that innerFunction is called using the function invocation pattern, therefore this is set to the global object. The result is that innerFunction will not have this set to the current object. Instead, it is set to the global object, where value is defined as 500.

// If we really want to have innerFunction access the context of it's parent, we may want to keep state in the closure by storing that as the previous this.

var value = 500;
var obj = {
  value: 0,
  increment: function () {
    var that = this;
    that.value++;

    var innerFunction = function () {
      console.log(that.value);
    };

    innerFunction(); // Function invocation pattern
  }
};
obj.increment();

// Apply Method

// The apply method allows manual invocation of a function.

// Apply is a hidden method of every function, so we call it by adding .apply() to the function itself and it takes two parameters:

// An object to bind the this parameter to

// An array which is mapped to the parameters


var obj = {
  foo: function (a, b, c) {
    console.log(arguments);
    console.log(this);
  }
};

obj.foo(1, 2, 3);
// ==> [1,2,3]
// ==> obj {}

// obj.foo.apply(window, [1, 2, 3]);
// ==> [1,2,3]
// ==> window {}

// Call Method

// JavaScript also has another invoker called call, that is identical to apply except that instead of taking an array of parameters, it takes an argument list.

var fer = { name: 'Fer', coder: true };
var harry = { name: 'Harry', coder: true };

var hi = function () {
  console.log('Whatsup, ' + this.name);
};

var bye = function () {
  console.log('Laters, ' + this.name);
};

hi(); // Error

hi.call(fer);
bye.call(harry);

var myDetails = {name:'Topister', course:'Computer Science'};

var course = function(){
  console.log('Hello, ' + this.name + ' you are pursuing, ' + this.course);
}

console.log(course.call(myDetails));

// All four of these lines do exactly the same thing. The run hi or bye in the scope of either fer or harry.

var fer = { name: 'Fer', coder: true, nationality: 'Mexican' };
var harry = { name: 'Harry', coder: true, nationality: 'Taiwanese' };

var update = function (name, coder, nationality) {
  this.name = name;
  this.coder = coder;
  this.nationality = nationality;
};

update.call(fer, 'Fer', true, 'Spanish');
update.apply(harry, ['Harry', true, 'Canadian']);

// Apply Vs Call

// Function.call(this, param1, param2, param 3,... )
// Function.apply(this, [param1, param2, param 3, ...])

// The limitations of call quickly become apparent when you want to write code that doesn't know the number of arguments that the functions need.

var addGrades_CALL = function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  console.log(arguments); // ==> [1,2,3,4,5,6,7,8,9,10]
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

addGrades_CALL.call(null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// In the case of apply, passing an array as a parameter will allow us to iterate through all the parameters easily:

var grades1 = [1, 2, 3, 4, 5];
var grades2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var addGrades_APPLY = function () {
  console.log(arguments);
  var sum = 0;
  for (var i = 0; i < arguments[1].length; i++) {
    sum += arguments[1][i];
  }
  return sum;
};

addGrades_APPLY(null, grades1);
addGrades_APPLY(null, grades2);

// Bind

// Bind creates a new function that, when called, has its this keyword set to the first provided parameter, with a given sequence of arguments preceding any provided when the new function is called.

var obj = {
  foo: function () {
    console.log(this);
  }
};

var bindFoo = obj.foo.bind(window);

obj.foo(); // ==> obj
bindFoo(); // ==> window

// Summary

// In this lesson, you have learned one more way of defining functions in JavaScript, and that is functions as expressions. In the core, there is no huge difference between function declaration and expression, but when it comes to interpreting them in by our computers. We learned that the function declarations get hoisted and can be called before even defined in the code, which could but doesn't have to be always a positive side. Function expressions enforce a better structured code. We learned that functions could be passed as arguments to other functions, and then we saw how that looks in the case of closures. We learned that some functions would be used only once, so no need to name them (aka anonymous functions). The ES6 brought a much nicer and shorter way of writing functions using the arrow function expression syntax. And finally, we saw that functions by default have access in their bodies to the arguments, array-like object, and we saw a couple of use cases.

// We have seen that JavaScript has the ability to modularise logic in functions.

// We have seen the four different ways to invoke a function in JavaScript, and which are the main differences between them. Finally, we have learnt what is the bind method and how it can helps us on our developments.

