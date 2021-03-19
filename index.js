import express from 'express';
import dotenv from 'dotenv';
import DoctorService from './ServicesModels/DoctorService.js';
dotenv.config();


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const docService = new DoctorService();
  return res.send(docService.getUrl("index"));
})


app.listen(PORT, () => {
  console.log(`server running at http://127.0.0.1:${PORT}`);
});
