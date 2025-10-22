//variables-data types  integers, boolean, string
//arrays -  arrays methods- shift,unshift,pop,push iterations
//functions
//class - super class, inheritance, polymorphism, escapulation
//context
//dome
//json server and json placeholders 
//use of let
//use of const

// typeof ()
// console.log()
//map
// const name="sam"
// const capitalName = 
// console.log(capitalName)

// const fruits = ["banana", "apple", "mango"];
// const upperFruits = fruits.map(fruits => fruits.toUpperCase())
// upperFruits.sort()
// upperFruits.push("olive")
// console.log(upperFruits)
// sorting fruits.sort()
// removes the first item fruits.pop()
// adds at the end fruits.push("avocado")
// removes firts fruits.shift()
//add at the first fruits.unshift("pinneaple")

//map uppecase
//indices of arrays 
//arrays changing values 
//checking array length
//arrays methods - add- .push()
                //remove from the end - .pop()
                // add in the beginning - .unshift()
                //remove from the beginning - .shift()
                //index of the element - indexOf()

//looping arrays -
                    //for loop
                    //for of loop
                    //forEach method

//Advanced methods -
                    //map()
                    //filter()
                    //find ()
                    //includes () returns true or false
                    //sort ()

//ARRAYS 

// const names = ["sam", "joy", 2]
// console.log(names)

//ARRAYS METHODS
//1.MAP
//to uppercase
// const names = ["sam", "joy", "seth"]
// const namesCapital = names.map(names => names.toUpperCase())
// console.log(namesCapital)

// const capNames = names.map(names => names.toUpperCase())
// console.log(capNames)

//2.INDECES OF ARRAYS - SHOWS POSITIONS OF ELEMENTS IN AN ARRAY 
//by use of length
// const names = ["sam", "joy", "seth"]
// console.log(names[5])

//3.Arrays changing values manipulating data 
// const names = ["sam", "joy", "seth"]
// names[0] = "Shiku"
//  console.log(names)

//4.checking array length - .length
// const names = ["sam", "joy", "seth"]
// console.log(names.length)

//5. arrays methods - add- .push() -adds at the end
// const names = ["sam", "joy", "seth"]
// names.push("kayleigh")
// console.log(names)

//remove from the end - .pop()
// const names = ["sam", "joy", "seth"]
// names.pop()
// console.log(names)

// add in the beginning - .unshift()
// const names = ["sam", "joy", "seth"]
// names.unshift("kayleigh")
// console.log(names)

//remove from the beginning - .shift()
// const names = ["sam", "joy", "seth"]
// names.shift()
// console.log(names)

//index of the element - indexOf()
// const names = ["sam", "joy", "seth"]
// console.log(names.indexOf("joy")) fruits

// const people = [
//     { name: "Joy", age: 19 },
//     { name: "Sam", age: 70 },
//     {name:"Bobo",age:12}
// ];
// //array method sorting .sort() and .filter()
// const filterAge = people.filter(person => person.age > 13)
// console.log(filterAge)
// const Users = [
//     { firtsname: "sam", secondname: "Mwaura", Email: "sam@gmail.com", password: "1234" },
//     {firtsname:"sam",secondname:"Mwaura",Email:"sam@gmail.com",password:"1234"}
// ];

// functions - set of instruction that performs a task and regturn a value 
//syntax 
//normal functions
// function "functionname"(args){
//     expressions
// }
// function getName() {
//     return "sam"
// }
// console.log(getName());


// function age() {
//     return 70;
// }
//  console.log(age())

//arrow functions
// const getName = (name) => name;
// console.log(getName("samuuu"))

// function myName(name) {
//     return name
// }
// console.log(myName("JOY IRUSH"))


//write a function to add two numbers 

//normal function 
// function addNumber(x, y) {
//     return x + y;
// }
// console.log(addNumber(10, 50))

//arrow function
// const addNumber = (x,y) => x + y;
// console.log(addNumber(10, 50));

//a function to check if the number is greater than 50 
//normal function

// function numberGreaterThanFifty(num) {
//     return num>50
     
//  }
//  console.log(numberGreaterThanFifty(10))
 

// function numberGreaterThanFifty(num) {
//     if (num > 50) {
//         console.log("Yes:is greater than fifty")
    
//     } else {
//         console.log("No:is less than Fifty")
//     }
    
// }
// numberGreaterThanFifty(10)

// const numbigfifty = (num) => {
//     if (num > 50) {
//         console.log("Yes:is greater than fifty")
    
//     } else {
//         console.log("No:is less than Fifty")
//     }
// }
// numbigfifty(20);

//normal functions , arrowfunctions examples  
//concantination (+)

// let firstname = "john";
// let secondname = "Joy"
// let fullname = firstname + " " + secondname;
// console.log(fullname)



// // concantionation append +=
// let greeting = "Niaje!";
// greeting += ", ";
// greeting += "Joy";
// console.log(greeting);

// templates literals concantination
// let name = "Kayleigh";
// let age = 2;
// let message = `My name is ${name} and I am ${age} years old `;
// console.log(message)


//concantination mixing datatypes
//mix strings and numbers 
// let x = "Age:" + 30;
// console.log(x);
// let y = 10 + "apples"
// console.log(y)


// function/ variable animals that returns animal type name and their sound
const greet = function (name) {
    return `Hi, ${name}`;
}
console.log(greet("sam"))