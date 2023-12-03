const { HttpError } = require("../../helpers");
const { User } = require("../../models/user")

const updateSubscription = async (req, res, next) => {
    const { _id } = req.user;
    const { subscription } = req.body;

    if (!["starter", "pro", "business"].includes(subscription)) {
        next(HttpError(400))
    }
    const result = await User.findByIdAndUpdate(
        _id,
        { subscription },
        { new: true, runValidators: true });

    if (!result) {
        next(HttpError(500))
    }

    req.user.subscription = subscription;
    await req.user.save();
    res.json(result);
}

module.exports = updateSubscription;