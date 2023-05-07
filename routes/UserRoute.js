const express = require("express");
const router = express.Router();

const DashboardController = require("../app/controllers/user/DashboardController");
const HistoryController = require("../app/controllers/user/HistoryController");
const DonateController = require("../app/controllers/user/DonateController");
const MessageController = require("../app/controllers/user/MessageController");

// Route untuk halaman dashboard
router.get('/dashboard', DashboardController.index);

// Route untuk halaman history
router.get('/history', HistoryController.index);
router.post('/donate/delete/:id', HistoryController.deleteDonation);
router.post('/donate/update/:id', HistoryController.updateDonation);

// Route untuk halaman konfirmasi donasi
router.get('/donate', DonateController.index);
router.post('/storeDonation', DonateController.storeDonation);

// Route untuk halaman user
router.get('/message', MessageController.index);

module.exports = router;