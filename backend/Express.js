// Importing required modules
const expressApp = require("express");
const mongooseClient = require("mongoose");
const bodyParser = require("body-parser");
const corsMiddleware = require("cors");
const contactsRecords = require("./models/modelcontactsErono");

// Initializing express application
const server = expressApp();
server.use(corsMiddleware());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongooseClient.connect("mongodb://127.0.0.1:27017/erono", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to DB..."))
    .catch((err) => console.error("Problem connecting to DB: ", err.message));

// Storing contacts data
server.post("/contacts", async (req, res) => {
    try {
        const { fname, lname, email, phone, companyname, jobtitle } = req.body;

        if (!fname || !lname || !email || !phone || !companyname || !jobtitle) {
            return res.status(400).json("All fields are required.");
        }

        const existingContact = await contactsRecords.findOne({ email });
        if (existingContact) {
            return res.status(409).json("Email already registered.");
        }

        const newContact = new contactsRecords({ fname, lname, email, phone, companyname, jobtitle });
        await newContact.save();
        res.status(201).json("Input stored in DB successfully...");
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json("Data could not be saved, problem during save...");
    }
});

// Fetching list of contacts
server.get("/contacts-list", async (req, res) => {
    try {
        const contacts = await contactsRecords.find();
        res.json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json("Error fetching contacts.");
    }
});

// Fetching specific contact data for editing
server.get("/contacts-list/:ID", async (req, res) => {
    try {
        const contact = await contactsRecords.findById(req.params.ID);
        if (!contact) {
            return res.status(404).json("Contact not found.");
        }
        res.json(contact);
    } catch (error) {
        console.error("Error fetching contact:", error);
        res.status(500).json("Error fetching contact.");
    }
});

// Updating contact information
server.put("/contacts-list/:ID", async (req, res) => {
    try {
        await contactsRecords.findByIdAndUpdate(req.params.ID, req.body);
        res.json("Successfully updated data.");
    } catch (error) {
        console.error("Error updating contact:", error);
        res.status(500).json("Error updating contact.");
    }
});

// Deleting a contact record
server.delete("/contacts-list/:ID", async (req, res) => {
    try {
        await contactsRecords.findByIdAndDelete(req.params.ID);
        res.json("User deleted.");
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json("Problem during deletion.");
    }
});

// Starting the server
server.listen(4001, () => {
    console.log("Server listening at 4001...");
});
