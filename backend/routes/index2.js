const express=require('express');
const router = express.Router();
const conn_controller= require("../controllers/conn_controller.js")

router.get('/connections', conn_controller.getconnections);
router.post('/connections/create-invitation', conn_controller.createInvitation);
router.post('/connections/accept-invitation', conn_controller.acceptInvitation);
router.post('/connections/accept-connection', conn_controller.acceptConnection);
router.post('/connections/remove-connection', conn_controller.removeConnection);
router.post('/connections/send-message', conn_controller.sendMessage);

module.exports= router;