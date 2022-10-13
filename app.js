const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        //data validation
        type: String,
        required: [true, "no name specified!"]
    },
    rating: {
        //data validation
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "nice"
});
// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "John",
    age: 37,
    favoriteFruit: fruitSchema
});
// person.save();

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});
pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});
person.save();
Person;

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit"
});
const orange = new Fruit({
    name: "orange",
    score: 9,
    review: "yumyum"
});
const banana = new Fruit({
    name: "banana",
    score: 8,
    review: "monkey"
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits");
//     }
// });

// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(fruits);
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "63482a1a4895b8258186ff22"}, {name: "apple"}, function(
//     err
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated document");
//     }
// });

// Fruit.deleteOne({name: "apple"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted document");
//     }
// });

// Person.deleteMany({name: "John"}, function(errr) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all document");
//     }
// });

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});
pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});
person.save();

const mango = new Fruit({
    name: "Mango",
    score: 7,
    review: "Decent fruit."
});
mango.save();

Peron.updateOne({name: "John"}, {favoriteFruit: mango}, function() {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document");
    }
});
