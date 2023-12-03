import axios from 'axios';
import { COSTO_TERMO, MERCADOPAGO_API_KEY, NGROK_URL, QR_ID, TITULO_COMPRA, USER_ID } from '../config';
export const createOrder = (req, res) => {

    let data = JSON.stringify({
    "description": "Pago de dispensador de agua",
    "external_reference": "123456789",
    "items": [
        {
        "sku_number": "A123K9191938",
        "category": "marketplace",
        "title": TITULO_COMPRA,
        "description": "Cobro del dispensador",
        "unit_price": COSTO_TERMO,
        "quantity": 1,
        "unit_measure": "unit",
        "total_amount": COSTO_TERMO
        }
    ],
    "title": TITULO_COMPRA,
    "total_amount": COSTO_TERMO,
    "notification_url": `${NGROK_URL}/webhook`
    
    });

    let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `https://api.mercadopago.com/instore/orders/qr/seller/collectors/${USER_ID}/pos/${QR_ID}/qrs`,
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${MERCADOPAGO_API_KEY}`
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    res.sendStatus(200);
    })
    .catch((error) => {
    console.log(error);
    res.sendStatus(500).json({error: error});
    });
};

