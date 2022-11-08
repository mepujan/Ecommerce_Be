import express from 'express';
import { CartController } from '../controllers/cart.js';



const cartRouter = express.Router();
const cartController = new CartController();

cartRouter.post('/cart/add',cartController.AddToCart);
cartRouter.get("/cart",cartController.ViewCart);
cartRouter.delete("/cart/delete",cartController.DeleteProductFromCartByProductId);

export default cartRouter;