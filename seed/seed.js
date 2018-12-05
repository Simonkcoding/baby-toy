const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Toys collection and inserts the Toys below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/babytoy"
);

const ToySeed = [
    {
        name:'1',
        heart:3,
        imgurl:'/img/toy/1.png'
    },{
        name:'2',
        heart:2,
        imgurl:'/img/toy/2.png'
    },{
        name:'3',
        heart:5,
        imgurl:'/img/toy/3.png'
    },{
        name:'4',
        heart:3,
        imgurl:'/img/toy/4.png'
    },{
        name:'5',
        heart:10,
        imgurl:'/img/toy/5.png'
    },{
        name:'6',
        heart:7,
        imgurl:'/img/toy/6.png'
    },{
        name:'7',
        heart:3,
        imgurl:'/img/toy/7.png'
    },{
        name:'8',
        heart:4,
        imgurl:'/img/toy/8.png'
    },{
        name:'9',
        heart:3,
        imgurl:'/img/toy/9.png'
    },{
        name:'10',
        heart:8,
        imgurl:'/img/toy/10.png'
    },{
        name:'11',
        heart:2,
        imgurl:'/img/toy/11.png'
    },{
        name:'12',
        heart:5,
        imgurl:'/img/toy/12.png'
    }
];

const BabySeed = [
    {
        name:'Baby1',
        love:'flower, animals',
        imgurl:'/img/char/1.jpg'
    },{
        name:'Baby2',
        love:'superhero',
        imgurl:'/img/char/2.jpg'
    },{
        name:'Baby3',
        love:'dolls',
        imgurl:'/img/char/3.jpg'
    },{
        name:'Baby4',
        love:'baby food',
        imgurl:'/img/char/4.jpg'
    }
];

// db.Toy
//     .remove({})
//     .then(() => db.Toy.collection.insertMany(ToySeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

db.Baby
    .remove({})
    .then(() => db.Baby.collection.insertMany(BabySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

