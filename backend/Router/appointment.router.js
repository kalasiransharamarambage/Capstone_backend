const express = require('express');
const router = express.Router();
const AppointmentController = require('../Controller/appointment.controller');

router.get('/', AppointmentController.getAllAppointments);
router.get('/count', AppointmentController.getAppointmentCount); 
router.get('/:id', AppointmentController.getById);
router.delete("/:id", AppointmentController.deleteAppointment);


module.exports = router;
