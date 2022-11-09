import express from 'express';
import multer from 'multer';
import { ProductController } from '../controllers/product.js';
import { ProductStorage } from '../image_handler/handler.js';
// import { ProductValidation } from '../Validation/products.js';
// import {createValidator} from 'express-joi-validation';



const productRouter = express.Router();
const productController = new ProductController();
const uploadProductImage = multer({storage:ProductStorage});
// const validator = createValidator();
productRouter.post('/product/create',uploadProductImage.single('image'),productController.CreateNewProduct);
productRouter.get('/products',productController.GetAllProducts);
productRouter.get('/product/:product_slug/id',productController.GetProductById);
productRouter.put('/product/update',uploadProductImage.single('image'),productController.UpdateproductById);
productRouter.delete('/product/delete',productController.DeleteproductById);
productRouter.get('/products/',productController.SearchProductByName);

export default productRouter;