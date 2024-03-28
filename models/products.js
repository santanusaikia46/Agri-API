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
        type: String,
        enum: {
            values: ["agri1", "agri2", "agri3", "agri4", "agri5"],
            message: `{VALUE} is not supported`
        },
    },
});

module.exports = mongoose.model("Product", prroductSchema)