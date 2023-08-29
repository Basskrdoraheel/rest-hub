const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    gender: String,
    phone: String,
    create_data:{
        type: Date,
        default: Date.now 
    }
});

const Contact = module.exports = mongoose.model("contact", contactSchema);
module.exports.createContact = function (callback, limit) {
    Contact.find(callback).limit(limit)
}