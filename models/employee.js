//Essa e da tela de contratante
const mongoose = require('mongoose')

//tabela
const employeeSchema = new mongoose.Schema({
    //contratante
    employeeName:{
        type:String,
        required:true,
        unique:true,
    },
    //cache
    salary:{
        type:Number,
        required:true
    },
    //estado
    state:{
        type:String,
        required:true
    },
    //cidade
    city:{
        type:String,
        required:true
    },
    //data
    date:{
        type:Date,
        default:Date.now
    },

})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee;