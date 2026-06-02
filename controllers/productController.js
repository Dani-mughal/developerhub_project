const Product = require('../models/Product');

// Get home page with featured products
exports.getHomePage = async (req, res, next) => {
    try {
        const featuredProducts = await Product.find({ isFeatured: true });
        res.render('index', { products: featuredProducts });
    } catch (error) {
        next(error);
    }
};

// Get all products and handle search
exports.getProducts = async (req, res, next) => {
    try {
        let query = {};
        const searchQuery = req.query.search;
        
        if (searchQuery) {
            query = {
                $or: [
                    { name: { $regex: searchQuery, $options: 'i' } },
                    { category: { $regex: searchQuery, $options: 'i' } }
                ]
            };
        }
        
        const products = await Product.find(query);
        res.render('products', { products, searchQuery: searchQuery || '' });
    } catch (error) {
        next(error);
    }
};

// Get single product details
exports.getProductDetails = async (req, res, next) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        if (!product) {
            return res.status(404).render('404', { message: 'Product not found' });
        }
        res.render('product-details', { product });
    } catch (error) {
        next(error);
    }
};
