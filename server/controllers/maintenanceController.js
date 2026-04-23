const Maintenance = require('../models/Maintenance');
const Product = require('../models/Product');

// @desc    Add maintenance record
// @route   POST /api/maintenance/:productId
// @access  Private
const addMaintenanceRecord = async (req, res) => {
  const { serviceDate, description, cost } = req.body;

  const product = await Product.findById(req.params.productId);

  if (product && product.user.toString() === req.user._id.toString()) {
    const maintenance = new Maintenance({
      product: req.params.productId,
      serviceDate,
      description,
      cost,
    });

    const createdRecord = await maintenance.save();
    res.status(201).json(createdRecord);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

// @desc    Get maintenance history for a product
// @route   GET /api/maintenance/:productId
// @access  Private
const getMaintenanceHistory = async (req, res) => {
  const product = await Product.findById(req.params.productId);

  if (product && product.user.toString() === req.user._id.toString()) {
    const history = await Maintenance.find({ product: req.params.productId }).sort({
      serviceDate: -1,
    });
    res.json(history);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

// @desc    Delete maintenance record
// @route   DELETE /api/maintenance/:id
// @access  Private
const deleteMaintenanceRecord = async (req, res) => {
  const record = await Maintenance.findById(req.params.id);

  if (record) {
    const product = await Product.findById(record.product);
    if (product && product.user.toString() === req.user._id.toString()) {
      await record.deleteOne();
      res.json({ message: 'Maintenance record removed' });
    } else {
      res.status(401);
      throw new Error('Not authorized');
    }
  } else {
    res.status(404);
    throw new Error('Record not found');
  }
};

module.exports = {
  addMaintenanceRecord,
  getMaintenanceHistory,
  deleteMaintenanceRecord,
};
