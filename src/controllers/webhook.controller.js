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
            
                var gpiop = require('rpi-gpio').promise;
 
                // Prendo
                gpiop.setup(20, gpiop.DIR_OUT)
                    .then(() => {
                        return gpiop.write(20, true)
                    })
                    .catch((err) => {
                        console.log('Error: ', err.toString())
                    })
                
                gpiop.setup(26, gpiop.DIR_OUT)
                    .then(() => {
                        return gpiop.write(26, true)
                    })
                    .catch((err) => {
                        console.log('Error: ', err.toString())
                    })
             
                // Apago
                gpiop.setup(20, gpiop.DIR_OUT)
                    .then(() => {
                        return gpiop.write(20, false)
                    })
                    .catch((err) => {
                        console.log('Error: ', err.toString())
                    })
                
                gpiop.setup(26, gpiop.DIR_OUT)
                    .then(() => {
                        return gpiop.write(26, false)
                    })
                    .catch((err) => {
                        console.log('Error: ', err.toString())
                    })
            }
        })
        .catch(console.log);

    }

    res.send('webhook');
}