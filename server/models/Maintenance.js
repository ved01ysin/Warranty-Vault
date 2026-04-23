const mongoose = require('mongoose');

const maintenanceSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    serviceDate: {
      type: Date,
      required: [true, 'Please add a service date'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    cost: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Maintenance', maintenanceSchema);
