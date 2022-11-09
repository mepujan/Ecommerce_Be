import { CartServices } from "../services/cart.js";

const cartService = new CartServices();

export class CartController{
    async AddToCart(req,res,next){
        /**!SECTION
         * function that add product to the cart
         */
        try{
            const result = await cartService.AddProductToCart(req.body);
            res.send(result);
        }catch(error){next(error);}
    }

    async ViewCart(req,res,next){
        /**
         * function that view cart of user
         */
        try{
            const user_id = req.body.user_id;
            const results = await cartService.GetAllCartData(user_id);
            res.send(results);
        }catch(error){next(error);}
    }

    async DeleteProductFromCartByProductId(req,res,next){
        //function that delete product available on cart of user
        try{
            const result = await cartService.DeleteProductFromCartByProductId(req.query.user_id,req.query.product_id);
            res.send(result);
        }catch(error){next(error);}
    }
}