const { Contact } = require("../models/contact")

const { HttpError, ctrlContainer } = require("../helpers")

const getAll = async (req, res) => {
    const result = await Contact.find();
    res.json(result)
}

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result);
}

const add = async (req, res) => {
    const result = await Contact.create(req.body)
    res.status(201).json(result)
}

const update = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result)
}


const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const { favorite } = req.body
    const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true });
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result)
}
const remove = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, 'Not found')
    }
    res.json({
        message: "Delete success😁 "
    })
}

module.exports = {
    getAll: ctrlContainer(getAll),
    getById: ctrlContainer(getById),
    add: ctrlContainer(add),
    update: ctrlContainer(update),
    updateFavorite: ctrlContainer(updateFavorite),
    remove: ctrlContainer(remove),
}