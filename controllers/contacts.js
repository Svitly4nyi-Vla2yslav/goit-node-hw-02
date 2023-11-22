const {Contact} = require("../models/contact")

const {  ctrlContainer } = require("../helpers")

// HttpError,

const getAll = async (req, res) => {
    const result = await Contact.find();
    res.json(result)
}

// const getById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);
//     if (!result) {
//         throw HttpError(404, "Not found")
//     }
//     res.json(result);
// }

const add = async (req, res) => {
    const result = await Contact.create(req.body)
    res.status(201).json(result)
}

// const update = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contacts.updateContact(contactId, req.body);
//     if (!result) {
//         throw HttpError(404, "Not found")
//     }
//     res.json(result)
// }

// const remove = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//         throw HttpError(404, 'Not found')
//     }
//     res.json({
//         message: "Delete success😁 "
//     })
// }

module.exports = {
    getAll: ctrlContainer(getAll),
    // getById: ctrlContainer(getById),
    add: ctrlContainer(add),
    // update: ctrlContainer(update),
    // remove: ctrlContainer(remove),
}