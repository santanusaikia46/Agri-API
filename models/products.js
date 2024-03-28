const mongoose = require("mongoose");

const prroductSchema = new mongoose.Schema({
        id: {
          type: String,
          required: true,
          unique: true, // Ensures no duplicate product IDs
        },
        name: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        colors: {
          type: [String], // Array of color codes (hexadecimal)
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        featured: {
          type: Boolean,
        }
});

module.exports = mongoose.model("Product", prroductSchema)