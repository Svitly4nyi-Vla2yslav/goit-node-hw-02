const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require('joi')


const emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: String,
}, { versionenKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailValidation).required(),
    subscription: Joi.string(),
});

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailValidation).required(),
})

const schemas = {
    registerSchema,
    loginSchema,
};

const User = model("user", userSchema);

module.exports = {
    schemas,
    User,
}