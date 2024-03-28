const products = require("../models/products");

const getAllProducts = async (req, res) => {
    const Products = await Product.find(req.query)
    res.status(200).json({ Products });
};
const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "getAllProductsTesting"});
};

module.exports = { getAllProducts, getAllProductsTesting};