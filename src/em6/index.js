
function person(name, age, country) {
    var name = name || "Johan";
    var age = age || 22;
    var country = country || "Colombia";
    console.log(name, age, country);
}

function user(name = "Mia", age = 24, country = "CO"){
    console.log(name, age, country);
}

// person();
// person("Jose", 41, "Costa Rica");

user();
user("Jose", 41, "Costa Rica");