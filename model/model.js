const mongoose = require('mongoose');
const dataschem = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
});

module.exports=mongoose.model('datas2',dataschem);