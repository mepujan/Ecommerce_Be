import { CartServices } from "../services/cart.js";

const cartService = new CartServices();

export class CartController{
    async AddToCart(req,res,next){
        try{
            const result = await cartService.AddProductToCart(req.body);
            res.send(result);
        }catch(error){next(error)}
    }

    async ViewCart(req,res,next){
        try{
            const user_id = req.body.user_id;
            const results = await cartService.GetAllCartData(user_id);
            res.send(results);
        }catch(error){next(error)}
    }

    async DeleteProductFromCartById(req,res,next){
        try{}catch(error){next(error)}
    }
}