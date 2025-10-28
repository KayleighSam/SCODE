// const fruits = ["Apple", "Orange", "Banana", "Mango"];
//fruits is an array
//array functions/methods

const { json } = require("server/reply")

//1.Accessing Array elements
//console.log(fruits[3])

//2.changing Array Elements
// fruits[1] = "Avocado";
// console.log(fruits)

//3.Adding without changing - Push
//.push
// const fruits = ["Apple", "Orange", "Banana", "Mango"];

// fruits.push("Berries")
// console.log(fruits)

//Unshift - adding elements at the begining
//.unshift

// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// fruits.unshift("Berries")
// console.log(fruits)

//4. Remove array elements 
//at the end
//.pop
// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// fruits.pop();

// console.log(fruits)

//5..Removes elemnt from  the beggining
//.shift
// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// fruits[1]="Berries"
// fruits.shift()


// console.log(fruits)

// 6.forecach
// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// fruits.sort()
// fruits.forEach(fruit => console.log(fruit))

//7.Sorting
//.sort()
// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// fruits.sort()
// console.log(fruits)

// let numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort();
// console.log(numbers)
//sorting ascending
// numbers.sort(function (a, b) {
//     //expression
//     return b - a;

// });
// console.log(numbers)


//sorting .sort().reverse
// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// fruits.sort().reverse()
// console.log(fruits)
//array of objects 
// const students = [
//     {name:"Dan",age:22},
//     {name:"Alice", age:17},
//     {name:"Bob",age:25}
// ]
// students.sort(
//     function(a, b) {
//         return a.age-b.age
//      }
// )
// console.log(students)

// students.sort((a, b) => a.age - b.age)

// console.log(students)


//Array of objects with array methods

//students
const students = [
    //student1
    {
        id: 1,
        name:"Dan Jonson",
        age:20,
        gender: "Male",
        grade:"9",
        subjects:["Math","English","Sceience"],
        averageScore:55, 
    },
     //student2
     {
        id: 2,
        name:"Sam Mwaura",
        age:40,
        gender: "Male",
        grade:"7",
        subjects:["Math","History","Art"],
        averageScore:72, 
    },
      //student3
    {
        id: 3,
        name:"Cynthia Atieno",
        age:13,
        gender: "Female",
        grade:"9",
        subjects:["Math","English","Sceience"],
        averageScore:90, 
    }
]
//get all students
//.map  
// const names = students.map(student => student.name);
// console.log(names)

//find a student by name
//.find
// const found = students.find(student => student.name === "Sam Mwaura")
// console.log(found)

//filter
//.filter
//filter by average score
//above 80 avarage score
// const topStudents = students.filter(student => student.averageScore < 80)
// console.log(topStudents);

//adding an elements
//.push
// //add new students
// students.push(

//     {
//         id: 4,
//         name: "Mathew Wango",
//         age: 34,
//         gender: "Male",
//         grade: "12",
//         subjects: ["Math", "English", "Sceience"],
//         averageScore: 30,
//     }

// );
// const names = students.map(student => student.name);
// console.log(names)

//loop forEach

// receive Array in HTMLAllCollection
// html + js