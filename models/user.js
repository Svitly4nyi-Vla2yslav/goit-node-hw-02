const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require('joi')

const emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema({

    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: emailValidation,
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: ""
    },
    avatarURL: {
        type: String,
        // required: true,
    }
}, { versionenKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    password: Joi.string(),
    email: Joi.string().pattern(emailValidation).required(),
    subscription: Joi.string(),
});

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailValidation).required(),
})

const updateSubscriptionSchema = Joi.object({
    subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

const schemas = {
    registerSchema,
    loginSchema,
    updateSubscriptionSchema,
};

const User = model("user", userSchema);

module.exports = {
    schemas,
    User,
}