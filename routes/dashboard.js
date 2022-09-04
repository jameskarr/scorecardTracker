const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, dashboardController.getShooters)

router.post('/createUser', dashboardController.createUser)

router.put('/markComplete', dashboardController.markComplete)

router.put('/markIncomplete', dashboardController.markIncomplete)

router.put('/addOneScore', dashboardController.addOne)

router.put('/minusOneScore', dashboardController.minusOne)

router.put('/addOneDom', dashboardController.addOneDom)

router.put('/addZeroDom', dashboardController.addZeroDom)

router.delete('/deleteUser', dashboardController.deleteUser)


module.exports = router