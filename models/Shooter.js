const mongoose = require('mongoose')

const ShooterSchema = new mongoose.Schema({
  shooterName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  hitMiss: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  userId: {//the logged in user at that time
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Shooter', ShooterSchema)
