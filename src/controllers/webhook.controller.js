import {MercadoPagoConfig, MerchantOrder} from 'mercadopago';
import { spawn } from 'node:child_process';

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

                const child = spawn('sudo', ['python3', '/home/ju0wi/ServidorNode_Raspberry/relaysPrueba.py']);
  
                console.log(`${new Date()} : CHILD STARTED`);
                child.stdout.on("data", (d) => console.log(`${new Date()} : STDOUT => ${d}`));
                child.stderr.on("data", (d) => console.log(`${new Date()} : STDERR => ${d}`));
                child.on("close", () => console.log(`${new Date()} : CHILD ENDED`));
                
            }
        })
        .catch(console.log);

    }

    res.send('webhook');
}
