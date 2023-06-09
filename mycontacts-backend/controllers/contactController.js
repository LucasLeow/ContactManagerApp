const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContacts=asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})
//@desc Get desired contact
//@route GET /api/contacts/:id
//@access public 
const getContact= asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
})

//@desc Create new contact
//@route POST /api/contacts
//@access public 
const createContact= asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body; 
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const contact = await Contact.create({
        name:name,
        email:email,
        phone:phone
    });
    res.status(201).json(contact);
})

//@desc Update  existing contact
//@route PUT /api/contacts/:id
//@access public 
const updateContact= asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found, update fail");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        );
    res.status(200).json(updatedContact);
})

//@desc delete  existing contact
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact= asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact);
});

module.exports={
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};