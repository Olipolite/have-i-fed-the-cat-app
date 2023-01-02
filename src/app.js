const express = require('express');
const { Cat } = require('./models')

const app = express();

app.use(express.json());

app.post('/cats', async(req, res) => {
    await Cat.create(req.body).then(cat => res.status(201).json(cat))
})

module.exports = app;