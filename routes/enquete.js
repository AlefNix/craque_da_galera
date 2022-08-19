const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const TesteCraque = require('../models/vote')

const Pusher = require('pusher');

var pusher = new Pusher({
    appId : "1433302",
    key : "cfa4b06555370ffa6124",
    secret : "5e4ed79bb2836922f4b2",
    cluster : "sa1",
    useTLS: true,
});

router.get('/', (req, res) => {
    TesteCraque.find().then(testesCraque => res.json({sucess: true, testesCraque: testesCraque }));
});

router.post('/', (req,res) => {
    const newTesteCraque = {
        os: req.body.os,
        points: 1
    }
new TesteCraque(newTesteCraque).save().then(testeCraque => {
    pusher.trigger('enquete', 'votacao', {
        points: parseInt(testeCraque.points),
        os: testeCraque.os
    });
    return res.json({sucess: true})
 });
});

module.exports = router;