const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8")
    return JSON.parse(data);
  } catch (error) {
    console.error("Error listContacts :", error);
    throw error;
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId)
    return result || null;
  } catch (error) {
    console.error("Error getContactById :", error);
    throw error;
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.error("Error removeContact :", error);
    throw error;
  }
}

const addContact = async (body) => {
  try {
    const { nanoid } = await import("nanoid");

    const data = await fs.readFile(contactsPath, "utf-8")
    const contacts = JSON.parse(data);
    const newContact = {
      id: nanoid(),
      ...body,
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error("Error addContact :", error);
    throw error;
  }
}

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) {
      return null;
    }

    contacts[index] = { contactId, ...body };
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index];
  } catch (error) {
    console.error("Error updateContact :", error);
    throw error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
