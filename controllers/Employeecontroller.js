const { response } = require('express')
const Employee = require('../models/Employee')

// Show the list of all employees
const index = (req,res,next) =>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error =>{
        res.error({
            message:'An error occured'
        })
    })
}

// Save the employee info
 const store =(req,res,next) =>{
     let employee = new Employee(
         {
             name:req.body.name,
             designation:req.body.designation,
             email:req.body.email,
             phone:req.body.phone,
             age:req.body.age
         }
     )
     employee.save(function(err){
        if(err){
             console.log(err);
             return;
        }
  
        res.json({ 
            message:"data saved"
         });
  })
    

 }
 module.exports ={
     index, store
 }