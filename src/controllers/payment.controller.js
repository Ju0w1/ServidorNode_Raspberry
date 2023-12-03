import axios from 'axios';
export const createOrder = (req, res) => {

    let data = JSON.stringify({
    "description": "Pago de dispensador de agua",
    "external_reference": "123456789",
    "items": [
        {
        "sku_number": "A123K9191938",
        "category": "marketplace",
        "title": "Termo de agua caliente",
        "description": "Cobro del dispensador",
        "unit_price": 20,
        "quantity": 1,
        "unit_measure": "unit",
        "total_amount": 20
        }
    ],
    "title": "Termo de agua caliente",
    "total_amount": 20,
    "notification_url": "https://dc93-190-135-185-95.ngrok.io/webhook"
    
    });

    let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'https://api.mercadopago.com/instore/orders/qr/seller/collectors/1575603154/pos/DISP001QR003/qrs',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer TEST-5191900924695120-120219-c932f87aa8650a99b05ab6b638334e9e-1575603154'
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

