const express = require('express');
let router = express.Router();
const pool = require('../module/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "project"`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);                        
        });//end GET query
});//end GET call server side

router.post('/', (req, res) => [
    pool.query(`INSERT INTO "project" ("name")
    VALUES ($1);`, [req.body.name]) 
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error POSTING project from PostgreSQL', error);
            res.sendStatus(500);
        })//end POST query
]);//end POST call server side

module.exports = router;