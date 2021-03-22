import express from 'express';
import dotenv from 'dotenv';

import { doctorRoutes } from './routes/doctors.js';
import { studnetsRoutes } from './routes/students.js';
import { marketRoutes } from './routes/markets.js';
import { labRoutes } from './routes/labs.js';
import { staffRoutes } from './routes/staff.js';
import { QrRoutes } from './routes/Qr.js';
//import MarketService from './ServicesModels/MarketService.js';
//import LabService from './ServicesModels/LabService.js';
//import StaffService from './ServicesModels/StaffService.js';
//import QrService from './ServicesModels/QrService.js';

import SheetService from './ServicesModels/SheetService.js';
import WalletService from './ServicesModels/WalletService.js';
import PurchaseService from './ServicesModels/PurchaseService.js';
dotenv.config();


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

///////////////////////////////////////////////////DOCTOR///////////////////////////////////////////////////
app.use('/doctors', doctorRoutes);

////////////////////////////////////////////////STUDENT///////////////////////////////////////////////////////
app.use('/students', studnetsRoutes);

// ////////////////////////////////////////////////MARKET///////////////////////////////////////////////////////
app.use('/markets', marketRoutes);
/*app.get('/markets', (req, res) => {
  const marketService = new MarketService();
  return res.send(marketService.getUrl("index"));
});

app.get('/showOneMarket', (req, res) => {
  const marketService = new MarketService();
  return res.send(marketService.getUrl("show"));
});

app.post('/storeMarket', (req, res) => {
  const marketService = new MarketService();
  return res.send(marketService.getUrl("store"));
});

app.put('/updateMarket', (req, res) => {
  const marketService = new MarketService();
  return res.send(marketService.getUrl("update"));
});

app.delete('/deleteMarket', (req, res) => {
  const marketService = new MarketService();
  return res.send(marketService.getUrl("destroy"));
});

app.post('/depositeInMarketWallet', (req, res) => {
  const marketService = new MarketService();
  return res.send(marketService.getUrl("deposite"));
});*/

////////////////////////////////////////////////LAB///////////////////////////////////////////////////////

app.use('/labs', labRoutes);
/*app.get('/labs', (req, res) => {
  const labService = new LabService();
  return res.send(labService.getUrl("index"));
});

app.get('/showOnelab', (req, res) => {
  const labService = new LabService();
  return res.send(labService.getUrl("show"));
});

app.post('/storelab', (req, res) => {
  const labService = new LabService();
  return res.send(labService.getUrl("store"));
});

app.put('/updatelab', (req, res) => {
  const labService = new LabService();
  return res.send(labService.getUrl("update"));
});

app.delete('/deletelab', (req, res) => {
  const labService = new LabService();
  return res.send(labService.getUrl("destroy"));
});*/
////////////////////////////////////////////////STAFF///////////////////////////////////////////////////////
app.use('/staff', staffRoutes);
/*app.get('/staff', (req, res) => {
  const staffService = new StaffService();
  return res.send(staffService.getUrl("index"));
});

app.get('/showOnestaff', (req, res) => {
  const staffService = new StaffService();
  return res.send(staffService.getUrl("show"));
});

app.post('/storestaff', (req, res) => {
  const staffService = new StaffService();
  return res.send(staffService.getUrl("store"));
});

app.put('/updatestaff', (req, res) => {
  const staffService = new StaffService();
  return res.send(staffService.getUrl("update"));
});

app.delete('/deletestaff', (req, res) => {
  const staffService = new StaffService();
  return res.send(staffService.getUrl("destroy"));
});*/
////////////////////////////////////////////////QR///////////////////////////////////////////////////////
app.use('/QR', QrRoutes);
/*app.post('/storeQr', (req, res) => {
  const qrService = new QrService();
  return res.send(qrService.getUrl("store"));
});*/

////////////////////////////////////////////////EXCEL SHEET///////////////////////////////////////////////////////
app.get('/generateExcelSheet', (req, res) => {
  const sheetService = new SheetService();
  return res.send(sheetService.getUrl("generate"));
});

////////////////////////////////////////////////WALLET///////////////////////////////////////////////////////
app.get('/showOneWallet', (req, res) => {
  const walletService = new WalletService();
  return res.send(walletService.getUrl("show"));
});

app.post('/storeWallet', (req, res) => {
  const walletService = new WalletService();
  return res.send(walletService.getUrl("store"));
});
app.get('/checkBalance', (req, res) => {
  const walletService = new WalletService();
  return res.send(walletService.getUrl("checkBalance"));
});
app.post('/depositeInStudentWallet', (req, res) => {
  const walletService = new WalletService();
  return res.send(walletService.getUrl("deposite"));
});

////////////////////////////////////////////////PURCHASE///////////////////////////////////////////////////////
app.post('/purchase', (req, res) => {
  const purchaseService = new PurchaseService();
  return res.send(purchaseService.getUrl("purchase"));
});

app.put('/convertPoints', (req, res) => {
  const purchaseService = new PurchaseService();
  return res.send(purchaseService.getUrl("convertPoints"));
});


app.listen(PORT, () => {
  console.log(`server running at http://127.0.0.1:${PORT}`);
});
