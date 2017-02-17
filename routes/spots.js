const express = require('express');
const router = express.Router();
const knex = require('../db/db_connection');
const bodyparser = require('body-parser')

require('dotenv').config()

router.get('/', function(req, res, next) {
    console.log("Something");
    knex('skate_spot')
        .then(function(data) {
            res.json(data)
        })
});

router.get('/video', function(req, res, next) {
    console.log("Something");
    knex.select('video_url')
        .from('video')
        .then(function(data) {
            res.json(data)
        })
});

module.exports = router;
