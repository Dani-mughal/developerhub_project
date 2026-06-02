require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const seedProducts = [
    {
        id: 1,
        name: "Premium Leather Bag",
        price: 299.00,
        category: "Accessories",
        image: "/assets/bag.png",
        description: "Handcrafted with the finest materials, this piece is designed to last a lifetime.",
        stock: 12,
        isFeatured: false
    },
    {
        id: 2,
        name: "Minimalist Watch",
        price: 150.00,
        category: "Watches",
        image: "/assets/watch.png",
        description: "A sleek and modern watch to keep you on time and in style.",
        stock: 5,
        isFeatured: false
    },
    {
        id: 3,
        name: "Silk Scarf",
        price: 85.00,
        category: "Accessories",
        image: "/assets/scarf.png",
        description: "100% pure silk scarf featuring an elegant timeless pattern.",
        stock: 0, // Out of stock example
        isFeatured: false
    },
    {
        id: 4,
        name: "Classic Elegance",
        price: 199.00,
        category: "Accessories",
        image: "/assets/classic.png",
        description: "Timeless accessory for every occasion.",
        stock: 8,
        isFeatured: true
    },
    {
        id: 5,
        name: "Modern Minimal",
        price: 120.00,
        category: "Accessories",
        image: "/assets/minimal.png",
        description: "Minimalist accessory designed with modern life in mind.",
        stock: 15,
        isFeatured: true
    }
];

const importData = async () => {
    try {
        await connectDB();
        await Product.deleteMany();
        
        await Product.insertMany(seedProducts);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
