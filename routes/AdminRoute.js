const express = require("express");
const router = express.Router();

const DashboardController = require("../app/controllers/admin/DashboardController");
const HistoryController = require("../app/controllers/admin/HistoryController");
const ConfirmController = require("../app/controllers/admin/ConfirmController");
const UserController = require("../app/controllers/admin/UserController");

// Route untuk halaman dashboard
router.get('/dashboard', DashboardController.index);

// Route untuk halaman history
router.get('/history', HistoryController.index);

// Route untuk halaman konfirmasi donasi
router.get('/confirm', ConfirmController.index);

// Route untuk halaman user
router.get('/user', UserController.index);

module.exports = router;