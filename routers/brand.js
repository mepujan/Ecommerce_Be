import express from 'express';
import { BrandController } from '../controllers/brand.js';


const routes = express.Router();
const brandController = new BrandController();

routes.post('/brand/create',brandController.CreateNewBrand);

export default routes;