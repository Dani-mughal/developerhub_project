require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');


const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
const pageRoutes = require('./routes/pages');
app.use('/', pageRoutes);

// Global Error Handler / 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Page not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('404', { message: 'Internal Server Error' });
});

// Connect to MongoDB
connectDB().then(() => {
    // Start server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to database', err);
});

