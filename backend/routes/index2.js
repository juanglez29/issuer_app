const express=require('express');
const router = express.Router();
const conn_controller= require("../controllers/conn_controller.js")
const wallet_controller= require("../controllers/wallet_controller.js")
const issue_controller=require("../controllers/issue_controller")

router.get('/connections', conn_controller.getconnections);
router.get('/connections/active', conn_controller.getActive);
router.get('/connections/pending', conn_controller.getPending);
router.post('/connections/create-invitation', conn_controller.createInvitation);
router.post('/connections/accept-invitation', conn_controller.acceptInvitation);
router.post('/connections/accept-connection', conn_controller.acceptConnection);
router.post('/connections/remove-connection', conn_controller.removeConnection);
router.post('/connections/send-message', conn_controller.sendMessage);

router.get('/wallet/dids', wallet_controller.getdids);
router.post('/wallet/dids/did', wallet_controller.getdid);
router.get('/wallet/dids/public', wallet_controller.getpublicdid);

router.get('/wallet/credentials/schemas/created', wallet_controller.getschemas);
router.post('/wallet/credentials/schemas', wallet_controller.getschema);
router.get('/wallet/credentials/definitions/created', wallet_controller.getdefinitions);
router.post('/wallet/credentials/definitions/', wallet_controller.getdefinition);

router.post('issue/send-offer/covid', issue_controller.issuecred)

module.exports= router; 