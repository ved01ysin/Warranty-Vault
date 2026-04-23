const express = require('express');
const router = express.Router();
const {
  addMaintenanceRecord,
  getMaintenanceHistory,
  deleteMaintenanceRecord,
} = require('../controllers/maintenanceController');
const { protect } = require('../middleware/authMiddleware');

router
  .route('/:productId')
  .post(protect, addMaintenanceRecord)
  .get(protect, getMaintenanceHistory);

router.route('/:id').delete(protect, deleteMaintenanceRecord);

module.exports = router;
