
// function person(name, age, country) {
//     var name = name || "Johan";
//     var age = age || 22;
//     var country = country || "Colombia";
//     console.log(name, age, country);
// }


// function user(name = "Mia", age = 24, country = "CO"){
//     console.log(name, age, country);
// }

// person();
// person("Jose", 41, "Costa Rica");

// user();
// user("Jose", 41, "Costa Rica");

// let hello = "Hola";
// let world = "Mundo <3";

// console.log(hello + " " + world);
// console.log(`${hello} ${world}`);

// let lorem = `lorem ipsu sad asjdjas shdsaldsad sajdoasjd
// sakdlksalñdksañlkdñlasds4
// sadasdsa3
// sdsdmlsam40`

// console.log(lorem);

// let person = {
//     "name": "Johan",
//     "age": 23,
//     "country": "CO"
// }

// console.log(person.name, person.age, person.country);

// let {age, country} = person;

// console.log(age, country);

// let team1 = ["Eyey", "Jojo", "Hehe"];
// let team2 = ["Grr", "Jejey", "Bebe"];

// let education = ["Edu", ...team1, ...team2];

// console.log(education);

// {
//     var globalVar = "Variable GLobal";
// }
// {
//     let globalLet = "Variable Let";
//     console.log(globalLet);
// }
// console.log(globalVar);



// const saludo = ["h","e","l"];
// saludo.push("l", "o")

// console.log(saludo);

// let name = "Johan";
// let lastname = "Hehehe";

// obj = {name, lastname}

// console.log(obj)

// const obj = [
//     {name: "Johan", age: 23},
//     {name: "Hei", age: 21}
// ]

// let listOfAge = obj.map(function (item) {
//     console.log(item.age);
// });

// let listOfNname = obj.map(item => {console.log(item.name);});

// const helloPromise = () => {
//     return new Promise((resolve, reject) => {
//         if(true){
//             resolve("Hey!");
//         } else {
//             reject("Ups!")
//         }
//     });
// }

// helloPromise()
// .then(response => console.log(response))
// .catch(error => console.log(error));

// var p1 = new Promise((resolve, reject) => {
//     resolve('Success!');
//     or
//     // reject(new Error("Error! haha"));
//   });
  
//   p1.then(value => {
//     console.log(value); // Success!
//   }, reason => {
//     console.error(reason); // Error!
//   });


  // class calculator {
  //   constructor(){
  //     this.valueA;
  //     this.valueB;
  //   }

  //   sum(valueA, valueB){
  //     this.valueA = valueA;
  //     this.valueB = valueB;
  //     return this.valueA + this.valueB;
  //   }

  // }

  // const s = new calculator();

  // console.log(s.sum(8, 7));


// import { hello } from './module';

// const hello = require('./module');

// console.log(hello());

/*** GENERATORS ***/


// function* helloWorld(){
//   if(true){
//     yield "Hello, "
//   }
//   true ? yield "Johan." : "";
// }

// const g = helloWorld();

// console.log(g.next().value + g.next().value);


const saludo = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve("Jey jey ho ho"), 3000)
      : reject(new Error("Error pirata"));
  });
}

// const helloAsync = async () => {
//   const hello = await saludo();
//   console.log(hello);
// }

// helloAsync();

const otherHello = async () => {
  try {
    const hello = await saludo();
    console.log(hello);
  } catch (error) {
    console.error(error);
  }
}

otherHello();

/***00 */

// const helloWorld = () => {
//   return new Promise((resolve, reject) => {
//       (true) ?
//           setTimeout(() => resolve("Hello World"), 3000) :
//           reject(new Error("Fatal Error"))
//   });
// }

// const byeWorld = () => {
//   return new Promise((resolve, reject) => {
//       (true) ? 
//       setTimeout(() => resolve("Bye world"), 3000) :
//       reject(new Error("Fatality"))
//   });
// }

// const saySomething = async () => {
//   const hi = await helloWorld()
//   console.log(hi)
//   const goodBye = await byeWorld()
//   console.log(goodBye)
// }

// saySomething();

/*** CALL, ASYNC AWAIT ***/

function resolveAfter4Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 4000);
  });
}

async function asyncCall() {
  console.log('calling...');
  const result = await resolveAfter4Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

/** JUEGO CON PROMESAS, ASYNC AWAIT (Call) */


const obj = {
  name: "Johan",
  age: 23,
  country: "Colombia"
}

let { name, ...all} = obj;

// console.log(typeof all)
// console.log(name, all)
// console.log(name, all.age)

const user = {
  ...obj,
  correo: "asda@gmail.com",
  direccion: "Calle 23x 6y"
}

console.log(user);

/** REGEX000 */

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const match = regexData.exec('2018-04-28');
 const year = match[1];
 const month = match[2];
 const day = match[3];
 console.log('Date -> ', year, month, day);


 /*** * */


// array to object
let entries = [["name", "Johan"], ["age", 23]];
console.log(Object.fromEntries(entries))

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);


/*** EM11 */


// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}


// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
// const replacedString = string.replace("JavaScript", "Python");
// console.log(replacedString);


const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

// const message = new Message();
// message.show('Hola!');

//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    // {...}
}


let isTrue = true;//false
let isFalse = false;
console.log(isTrue &&= 80);

console.log(isTrue ||= "hahaha");


//El operador de asignación AND lógico ( x &&= y) solo asigna si x es verdadero .

let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// expected output: 2

b &&= 2;
console.log(b);
// expected output: 0


let x = 0;
let y = 1;

// x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
// y &&= 0; // 0

console.log(x, y )