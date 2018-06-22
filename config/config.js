var mongoose =require('mongoose');

module.exports =mongoose.connect('mongodb+srv://admin:admin@cluster0-cv9ns.mongodb.net/practice3?retryWrites=true ')

.then(() => {

console.log("DB connected")

}, err => {

console.log("DB error")

}

);
