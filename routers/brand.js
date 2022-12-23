import express from 'express';
import { BrandController } from '../controllers/brand.js';

const routes = express.Router();
const brandController = new BrandController();

routes.post('/brand/create',brandController.CreateNewBrand);
routes.get("/brands",brandController.GetAllBrandsList);
routes.get("/brand/id",brandController.GetBrandById);
routes.put("/brand/update",brandController.UpdateBrandbyId);
routes.delete("/brand/delete",brandController.DeleteBrandById);

export default routes;