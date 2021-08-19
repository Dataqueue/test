const express = require('express')
const routes = express.Router()

const EmployeerController = require('../controllers/Employeecontroller')

routes.get('/',EmployeerController.index)
routes.post('/store',EmployeerController.store)

module.exports  = routes