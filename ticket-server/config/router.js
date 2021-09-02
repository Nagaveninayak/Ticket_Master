const express = require('express')
const usersController = require('../app/controllers/usersController')
const customersController = require('../app/controllers/customersController')
const departmentsController = require('../app/controllers/departmentsController')
const employeesController = require('../app/controllers/employeesController')
const ticketsController = require('../app/controllers/ticketsController')

const {authentication} = require('../app/middleware/userAuthentication')

const router = express.Router()

router.post('/users/register', usersController.addUser)
router.get('/users',usersController.showAllUser)
router.post('/users/login', usersController.loginUser)
router.get('/users/account', authentication, usersController.account)
router.delete('/users/logout',authentication, usersController.deleteUser)

//customers
router.post('/customers',authentication, customersController.addCustomer)
router.get('/customers',authentication, customersController.showAllCustomer)
router.get('/customers/:id',authentication, customersController.showOneCustomer)
router.put('/customers/:id',authentication, customersController.editCustomer)
router.delete('/customers/:id',authentication, customersController.deleteCustomer)

//departments
router.post('/departments',authentication, departmentsController.addDepartment)
router.get('/departments',authentication, departmentsController.showAllDepartment)
router.get('/departments/:id',authentication, departmentsController.showDepartment)
router.put('/departments/:id',authentication, departmentsController.editDepartment)
router.delete('/departments/:id',authentication, departmentsController.deleteDepartment)

//employees
router.post('/employees', authentication, employeesController.addEmployee)
router.get('/employees', authentication, employeesController.showAllEmployee)
router.get('/employees/:id', authentication, employeesController.showEmployee)
router.put('/employees/:id', authentication, employeesController.editEmployee)
router.delete('/employees/:id', authentication, employeesController.deleteEmployee)

//tickets
router.post('/tickets', authentication, ticketsController.addTicket)
router.get('/tickets', authentication, ticketsController.showAllTicket)
router.get('/tickets/:id', authentication, ticketsController.showTicket)
router.put('/tickets/:id', authentication, ticketsController.editTicket)
router.delete('/tickets/:id', authentication, ticketsController.deleteTicket)

module.exports = {router}
