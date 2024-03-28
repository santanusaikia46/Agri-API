const mongoose = require("mongoose");

const prroductSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price must be provide"]
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String
    },
});

module.exports = mongoose.model("Product", prroductSchema)