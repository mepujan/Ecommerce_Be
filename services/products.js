import Product from "../model/product.js";
import path from 'path';
import config from "../configurations/config.js";
import mongoose from "mongoose";


export class ProductService{
    async CreateNewProduct(req){
        /**
         * function that takes req as an argument and
         * saves the data to database and return currently saved object instance
         */
        const product = new Product(req.body);
        product.product_image_url = path.join(config.host,req.file.path);
        return await product.save();
    }


    async GetAllProducts(){
        /**
         * returns all the product objects available in database
         */
        return await Product.aggregate([
            {
                $lookup:{
                    from:'vendors',
                    localField:'vendor',
                    foreignField: '_id',
                    as:'vendor'
                }
            },
            {
                $unwind :'$vendor'
            },
            {
                $lookup:{
                    from:'brands',
                    localField:'brand',
                    foreignField: '_id',
                    as:'brand'
                }
            },
            {
                $unwind :'$brand'
            },
        ]);
    }

    async GetProductById(id){
        /**
         * returns the single product object 
         */
        const product =  await Product.aggregate([
            {
                $match:{ _id : mongoose.Types.ObjectId(id)}
            },
            {
                $lookup:{
                    from:'vendors',
                    localField:'vendor',
                    foreignField: '_id', 
                    as:'vendor'
                }
            },
            {
                $unwind :'$vendor'
            },
            {
                $lookup:{
                    from:'brands',
                    localField:'brand',
                    foreignField: '_id',
                    as:'brand'
                }
            },
            {
                $unwind :'$brand'
            },
        ]);

        return product[0];
    }


    async UpdateProductById(id,updatedProduct){
        //function that find and update the data and return it
        return await Product.findByIdAndUpdate(id,updatedProduct,{new:true});
    }


    async DeleteProductById(id){
        //function that find the data and delete it.
        return await Product.findByIdAndDelete(id);
    }


    async SearchProductByName(productName){
        //List all data that matches the product name
        return await Product.aggregate([
            {$match:{product_name: productName}},
            {
                $lookup:{
                    from:'vendors',
                    localField:'vendor',
                    foreignField: '_id',
                    as:'vendor'
                }
            },
            {
                $unwind :'$vendor'
            },
            {
                $lookup:{
                    from:'brands',
                    localField:'brand',
                    foreignField: '_id',
                    as:'brand'
                }
            },
            {
                $unwind :'$brand'
            },
        ]); 
    }
}