const Appointment = require("../Models/appointment.model");

// Fetch all appointments
const getAllAppointments = async (req, res, next) => {
  let appointments;
  try {
    appointments = await Appointment.find();
  } catch (err) {
    console.log(err);
  }
  if (!appointments) {
    return res.status(404).json({ message: "Appointments not found" });
  }
  return res.status(200).json({ appointments });
};

// Fetch appointment by ID
const getById = async (req, res, next) => {
  const id = req.params.id;
  let appointment;
  try {
    appointment = await Appointment.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!appointment) {
    return res.status(404).json({ message: "Appointment Not found" });
  }
  return res.status(200).json({ appointment });
};

//delete appointments
const deleteAppointment = async (req, res, next) => {
  const id = req.params.id;

  let appointment;
  try {
    appointment = await Appointment.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!appointment) {
    return res
      .status(404)
      .json({ message: "Unable to Delete Appointment Details" });
  }
  return res.status(200).json({ appointment });
};

const getAppointmentCount = async (req, res) => {
  try {
    const count = await Appointment.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error getting appointment count:', error);
    res.status(500).json({ message: 'Error getting appointment count', error });
  }
};

module.exports = { getAllAppointments, getById, deleteAppointment,getAppointmentCount };
