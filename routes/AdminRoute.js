const express = require("express");
const router = express.Router();

const DashboardController = require("../app/controllers/admin/DashboardController");
const HistoryController = require("../app/controllers/admin/HistoryController");
const ConfirmController = require("../app/controllers/admin/ConfirmController");
const UserController = require("../app/controllers/admin/UserController");

// Route untuk halaman dashboard
router.get('/admin/dashboard', DashboardController.index);

// Route untuk halaman history
router.get('/admin/history', HistoryController.index);

// Route untuk halaman konfirmasi donasi
router.get('/admin/confirm', ConfirmController.index);

// Route untuk halaman user
router.get('/admin/user', UserController.index);

module.exports = router;