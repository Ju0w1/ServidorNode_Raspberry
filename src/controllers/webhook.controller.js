import {MercadoPagoConfig, MerchantOrder} from 'mercadopago';

export const receiveWebhook = (req, res) => {
    const paymentReq = req.query;
    // console.log(paymentReq);

    if( paymentReq.topic === "merchant_order") {
        const client = new MercadoPagoConfig({ accessToken: 'TEST-5191900924695120-120219-c932f87aa8650a99b05ab6b638334e9e-1575603154' });

        const merchantOrder = new MerchantOrder(client);

        merchantOrder.get({ 
            merchantOrderId: paymentReq['id']
        }).
        then((data)=>{
            if(data.order_status === 'paid'){
                console.log(data.order_status)
                console.log('Habilitar electrovalvula')
                
                const {spawn} = require('child_process');

                var process = spawn('python3',["../relaysPrueba.py"]); 
  
                process.stdout.on('data', function(data) { 
                    res.send(data.toString()); 
                } ) 
                
            }
        })
        .catch(console.log);

    }

    res.send('webhook');
}