const express = require('express');
const cors = require('cors');
const { products, appEvents } = require('./api');

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());

    products(app);
};