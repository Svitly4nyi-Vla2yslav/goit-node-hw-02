const { ctrlContainer } = require("../../helpers");
const add = require("./add");
const getAll = require("./getAll")
const getById = require("./getById")
const remove = require("./remove")
const update = require("./update")
const updateFavorite = require("./updateFavorite")
const register = require("./authRegister")
const login = require("./authLogin")
const getCurrent = require("./authCurrent")
const logout = require("./authLogout")
const updateSubscription = require("./authSubscription")


module.exports = {
    add: ctrlContainer(add),
    getAll: ctrlContainer(getAll),
    getById: ctrlContainer(getById),
    remove: ctrlContainer(remove),
    update: ctrlContainer(update),
    updateFavorite: ctrlContainer(updateFavorite),
    register: ctrlContainer(register),
    login: ctrlContainer(login),
    getCurrent: ctrlContainer(getCurrent),
    logout: ctrlContainer(logout),
    updateSubscription: ctrlContainer(updateSubscription),
}