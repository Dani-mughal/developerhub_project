const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Product = require('../models/Product');

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
        stock: 0,
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
    },
    {
        id: 6,
        name: "Vintage Sunglasses",
        price: 95.00,
        category: "Accessories",
        image: "/assets/minimal.png", // reusing asset
        description: "Protect your eyes with style using these vintage-inspired sunglasses.",
        stock: 3,
        isFeatured: false
    },
    {
        id: 7,
        name: "Gold Pendant Necklace",
        price: 245.00,
        category: "Jewelry",
        image: "/assets/classic.png", // reusing asset
        description: "A delicate 18k gold pendant suitable for everyday elegance.",
        stock: 20,
        isFeatured: false
    },
    {
        id: 8,
        name: "Luxury Briefcase",
        price: 350.00,
        category: "Bags",
        image: "/assets/bag.png", // reusing asset
        description: "The ultimate luxury briefcase for the modern executive.",
        stock: 0,
        isFeatured: true
    }
];

const connectDB = async () => {
    try {
        const mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        
        const conn = await mongoose.connect(mongoUri);
        console.log(`In-Memory MongoDB Connected: ${conn.connection.host}`);
        
        const count = await Product.countDocuments();
        if (count === 0) {
            await Product.insertMany(seedProducts);
            console.log('In-Memory DB seeded successfully with products!');
        }
    } catch (error) {
        console.error(`Error connecting to In-Memory MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
