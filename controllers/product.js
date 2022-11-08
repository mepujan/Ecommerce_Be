import { ProductService } from "../services/products.js";
const productService = new ProductService();

export class ProductController{
    async CreateNewProduct(req,res,next){
        /**
         * calls the function that saves data to database
         * and response the saved object to user
         */
        try{
            const result = await productService.CreateNewProduct(req);
            res.send(result);
        }catch(error){
            next(error);
        }
    }

    async GetAllProducts(req,res,next){
        /**
         * function that response all the list of products available in database
         */
        try{
            const result = await productService.GetAllProducts();
            res.send(result);
        }catch(error){
            next(error);
        }
    }

    async GetProductById(req,res,next){
        /**
         * function that response single product item
         */
        try{
            const result = await productService.GetProductById(req.query.id);
            res.send(result);
        }catch(error){
            next(error);
        }
    }

    async UpdateproductById(req,res,next){
         /**
         * function that sends the updated product to the user
         */
        try{
            const result = await productService.UpdateProductById(req.query.id,req.body);
            res.send(result);

        }catch(error){
            next(error);
        }
    }


    async DeleteproductById(req,res,next){
        /**
         * function that sends the deleted product to the user
         */
        try{
            const result = await productService.DeleteProductById(req.query.id);
            res.send(result);
        }catch(error){
            next(error);
        }
    }
}