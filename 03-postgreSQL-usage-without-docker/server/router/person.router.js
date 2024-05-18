const express = require('express')
const pool = require('../db')
const PersonController = require('../controller/person.controller')

const router = express.Router()

router.get('/persons', PersonController.getAllPersons)
router.get('/person/:id', PersonController.getPerson)
router.post('/person', PersonController.createPerson)
router.put('/person/:id', PersonController.updatePerson)
router.delete('/person/:id', PersonController.deletePerson)

module.exports = router
