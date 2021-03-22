import express from 'express';
import dotenv from 'dotenv';

import ServiceRegistryController from '../controllers/ServiceRegistryController.js';
import ServiceRegistry from './service_registry/ServiceRegistry.js';
import { doctorRoutes } from './routes/doctors.js';
import { studnetsRoutes } from './routes/students.js';
import { marketRoutes } from './routes/markets.js';
import { labRoutes } from './routes/labs.js';
import { staffRoutes } from './routes/staff.js';
import { QrRoutes } from './routes/Qr.js';
import { ExcelSheetRoutes } from './routes/ExcelSheet.js';
import { WalletRoutes } from './routes/Wallet.js';
import { PurchaseRoutes } from './routes/Purchase.js';

dotenv.config();
const serviceRegistry = new ServiceRegistry();
const serviceRegistryController = new ServiceRegistryController(serviceRegistry);


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

///////////////////////////////////////////////////DOCTOR///////////////////////////////////////////////////

app.use('/doctors', doctorRoutes);

///////////////////////////////////////////////////STAFF///////////////////////////////////////////////////

app.use('/staff', staffRoutes);

////////////////////////////////////////////////STUDENT///////////////////////////////////////////////////////

app.use('/students', studnetsRoutes);

// ////////////////////////////////////////////////MARKET///////////////////////////////////////////////////////

app.use('/markets', marketRoutes);

////////////////////////////////////////////////LAB///////////////////////////////////////////////////////

app.use('/labs', labRoutes);

////////////////////////////////////////////////QR///////////////////////////////////////////////////////

app.use('/QR', QrRoutes);


////////////////////////////////////////////////EXCEL SHEET///////////////////////////////////////////////////////

app.use('/ExcelSheet', ExcelSheetRoutes);


////////////////////////////////////////////////WALLET///////////////////////////////////////////////////////

app.use('/Wallet', WalletRoutes);

////////////////////////////////////////////////PURCHASE///////////////////////////////////////////////////////

app.use('/Purchase', PurchaseRoutes);


////////////////////////////////////////////////SERVICE REGISTRY///////////////////////////////////////////////////////
app.put('/register/:name/:version/:port', serviceRegistryController.store);
app.delete('/unregister/:name/:version/:port', serviceRegistryController.destroy);


app.listen(PORT, () => {
  console.log(`server running at http://127.0.0.1:${PORT}`);
});
