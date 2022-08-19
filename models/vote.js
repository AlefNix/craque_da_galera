const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    os: {
        type:String,
        required:true
    },
    points: {
        type:String,
        required: true
    }
});

const TesteCraque = mongoose.model('TesteCraque', VoteSchema);

module.exports = TesteCraque;