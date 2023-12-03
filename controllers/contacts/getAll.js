
const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;
    const filter = { owner };
    if (favorite) {
        filter.favorite = favorite;
    }
    const result = await Contact.find(
        filter,
        " -__v -updatedAt -createdAt",
        { skip, limit })
        .populate("owner", "subscription email");
    res.json(result)
}

module.exports = getAll;