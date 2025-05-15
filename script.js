//variables-data types  integers, boolean, string
//arrays -  arrays methods- shift,unshift,pop,push iterations
//functions
//class - super class, inheritance
//context
//dome
//use of let
//use of const

// typeof ()
// console.log()
//map
// const name="sam"
// const capitalName = 
// console.log(capitalName)

const fruits = ["banana", "apple", "mango"];
const upperFruits = fruits.map(fruits => fruits.toUpperCase())
upperFruits.sort()
upperFruits.push("olive")
console.log(upperFruits)
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


const people = [



    { name: "Alice", age: 22 },
    { name: "Sam", age: 30 },
    { name: "Joy", age: 18 },
    //st 
    
];
const adult = people.find(person => person.age >= 18);
console.log(adult)     