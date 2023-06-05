const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        require: true,
        unique: [true, 'Email already present'],
        validate(v) {
            if (!validator.isEmail(v)) {
                throw new Error('Invalid Email')
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:10,
        unique:true
    },
    address:{
        type:String,
        require:true
    }

});

// we will create a new collectin using model

const student = new mongoose.model('Student',studentSchema);

module.exports = student;