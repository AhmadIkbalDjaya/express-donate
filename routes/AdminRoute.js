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
// Route untuk menerima donasi
router.post('/donation/:id/accept', ConfirmController.acceptDonation);
// Route untuk menolak donasi
router.post('/donation/:id/reject', ConfirmController.rejectDonation);


// Route untuk halaman user
router.get('/user', UserController.index);
// DELETE User
router.get('/user/delete/:id', UserController.deleteUser);
// POST Edit User
router.post('/user/edit/:id', UserController.editUser);


module.exports = router;