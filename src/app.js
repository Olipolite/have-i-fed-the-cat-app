const express = require('express');
const { Cat } = require('./models')

const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat))
})

app.get('/cats', (req, res) => {
    Cat.findAll(req.body).then(cat => res.status(201).json(cat))
})

app.get('/cats/:id', (req, res) => {
    Cat.findByPk(req.params.id).then(cat => res.status(201).json(cat))
})

app.patch('/cats/:id', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.id } }).then(cat => res.status(201).json(cat))
})

module.exports = app;