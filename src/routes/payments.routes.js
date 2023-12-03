import {Router} from 'express';
import {createOrder} from '../controllers/payment.controller.js';
import { receiveWebhook } from '../controllers/webhook.controller.js';

const router = Router();

router.post('/create-order', createOrder);
router.get('/success', (req, res) => res.send('Success'));
router.post('/webhook', receiveWebhook);

export default router;