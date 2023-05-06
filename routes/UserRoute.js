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

// Route untuk halaman konfirmasi donasi
router.get('/Donate', DonateController.index);

// Route untuk halaman user
router.get('/message', MessageController.index);

module.exports = router;