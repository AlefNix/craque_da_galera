const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
.connect('mongodb+srv://dramerhax:asdf1234@cluster0.65cqj6e.mongodb.net/?retryWrites=true&w=majority')
.catch(err => console.log(err));