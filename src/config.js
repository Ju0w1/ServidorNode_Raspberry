import {config} from 'dotenv';
config();

export const PORT = 3000
export const HOST = `http://localhost:${PORT}`
export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY
export const USER_ID = '1575603154'
export const QR_ID = 'DISP001QR003'
export const NGROK_URL = 'https://6fdc-190-135-185-95.ngrok.io'
export const COSTO_TERMO = 20
export const TITULO_COMPRA = 'Termo de agua caliente'