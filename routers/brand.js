import express from 'express';
import { BrandController } from '../controllers/brand.js';
import { BrandValidations } from '../Validation/brand.js';
import {validate} from 'express-validation';

const routes = express.Router();
const brandController = new BrandController();

routes.post('/brand/create',validate(BrandValidations.CreateOrUpdateBrandValidator),brandController.CreateNewBrand);

export default routes;