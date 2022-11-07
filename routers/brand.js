import express, { Router } from 'express';
import { BrandController } from '../controllers/brand.js';
import { BrandValidations } from '../Validation/brand.js';
import {validate} from 'express-validation';

const routes = express.Router();
const brandController = new BrandController();

routes.post('/brand/create',validate(BrandValidations.CreateOrUpdateBrandValidator),brandController.CreateNewBrand);
routes.get("/brands",brandController.GetAllBrandsList);
routes.get("/brand/id",brandController.GetBrandById);
routes.put("/brand/update",brandController.UpdateBrandbyId);
routes.delete("/brand/delete",brandController.DeleteBrandById);

export default routes;