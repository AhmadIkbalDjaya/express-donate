const mongoose = require('mongoose');
const Donation = mongoose.model('Donation', {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  condition: {
    type: String,
    enum: ["Baik", "Masih Layak"]
  },
  status: {
    type: String,
    enum: ['Selesai', 'Berlansung', 'Pending'],
    default: 'Pending'
  },
  is_accept: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = Donation;
