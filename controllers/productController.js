const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res) => {
    // const product = await Product.create(req.body);
    // res.status(StatusCodes.CREATED).json({ product });
    res.send('create Product');
};
const getAllProducts = async (req, res) => {
    // const products = await Product.find({});
    // res.status(StatusCodes.OK).json({ products });
    res.send('List of products');
};

module.exports = {
    createProduct,
    getAllProducts,
};
