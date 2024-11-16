// Importing the mongoose library to define schema and interact with MongoDB
let mongoose = require("mongoose");

// Defining a new schema for contacts registration with mongoose
// This schema represents the structure of data to be stored in MongoDB for each contacts
let schema1 = new mongoose.Schema({
    // contacts name of type String
    fname: String,

    // contacts name of type String
    lname: String,

    // contacts email address, stored as a String
    email: String,

    // contacts phone number, stored as a Number
    phone: Number,

    // contacts name of type String
    companyname: String,

    // contacts designation or job title, stored as a String
    jobtitle: String,   
});

// Creating a model named 'modelcontactsErona' using the defined schema
// This model will represent the collection in MongoDB and allow CRUD operations
let modelcontactsErona = mongoose.model("modelcontactserona", schema1);

// Exporting the model to make it accessible in other files
module.exports = modelcontactsErona;
