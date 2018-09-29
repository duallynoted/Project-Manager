const express = require('express');
let router = express.Router();
const pool = require('../module/pool');


router.get('/', (req, res) => {
    pool.query(`SELECT "entry".id, "entry".name, "entry".date, "entry".start_time, "entry".end_time, "project".name as "project"
    FROM "entry"
    JOIN "project" ON "project"."id" = "entry"."project_id";`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);
        });//end GET query
});//end GET call server side

// router.get('/', (req, res) => {
//     pool.query(`SELECT * FROM "entry"
//     JOIN "project" ON "project"."id" = "entry"."project_id";`)
//         .then((results) => {
//             res.send(results.rows);
//         }).catch((error) => {
//             res.send(500);
//             console.log('error', error);
//         });//end GET query
// });//end GET call server side

router.post('/', (req, res) => {
    console.log(req.body);

    pool.query(`INSERT INTO "entry" ("name","project_id", "date", "start_time","end_time")
    VALUES ($1, $2, $3, $4, $5);`, [req.body.name, req.body.project_id, req.body.date.substring(0, 10), req.body.start_time.substring(11, 19), req.body.end_time.substring(11, 19)])
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error POSTING entry from PostgreSQL', error);
            res.sendStatus(500);
        })//end POST query
});//end POST call server side

router.delete('/', (req, res) => {
    pool.query(`DELETE FROM "entry"
    WHERE "id" = ($1);`, [req.query.id])
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error DELETING entry from PostgreSQL', error);
            res.sendStatus(500);
        })//end DELETE query
});//end DELETE call server side

router.put('/', (req, res) => {
    console.log(req.query);

    pool.query(`INSERT INTO "entry" ("name","project_id", "date", "start_time","end_time")
    VALUES ($1, $2, $3, $4, $5);`, [req.query.name, req.query.project_id, req.query.date.substring(0, 10), req.query.start_time.substring(11, 19), req.query.end_time.substring(11, 19)])
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error UPDATING entry from PostgreSQL', error);
            res.sendStatus(500);
        })//end PUT query
});//end PUT call server side


module.exports = router;
