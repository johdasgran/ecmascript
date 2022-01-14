
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

let person = {
    "name": "Johan",
    "age": 23,
    "country": "CO"
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person;

console.log(age, country);