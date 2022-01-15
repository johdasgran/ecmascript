
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

var p1 = new Promise((resolve, reject) => {
    resolve('Success!');
    or
    // reject(new Error("Error! haha"));
  });
  
  p1.then(value => {
    console.log(value); // Success!
  }, reason => {
    console.error(reason); // Error!
  });