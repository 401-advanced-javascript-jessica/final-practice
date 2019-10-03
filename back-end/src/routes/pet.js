'use strict';

const express = require('express');
const petRouter = express.Router();

let pets = [
    { name: 'Frank', _id: 1 },
    { name: 'Betty', _id: 2 },
    { name: 'Ginger', _id: 3 },
    { name: 'Kali', _id: 4 },

];

petRouter.get('/pet', (req, res, next) => {
    res.status(200).send(pets);
});

petRouter.delete('/pet/:id', (req, res, next) => {
 pets = pets.filter( (pet) => req.params.id != pet._id);
    res.send('Deleted');
});

module.exports = petRouter;