import { BrandService } from '../services/brand.js';
const brand = new BrandService();


export class BrandController{
    async CreateNewBrand(req,res,next){
        /*!SECTION
        function that takes req from the user or application and
        returns the data of saved instance to the user.
        */
        const result = await brand.CreateNewBrand(req.body);
        if(result){
            res.send(result);
        }
        else{
            res.send('error');
        }
    }

    async GetAllBrandsList(req,res,next){
        /**
         * function that returns all the brand list result to the user or the application 
         * calling the api
         */
        const results = await brand.GetAllBrandsList();
        if(results){
            res.send(results);
        }
        else{
            res.send("error");
        }
    }


    async GetBrandById(req,res,next){
        /**
         * function that response single brand item as per the id
         */
        const result = await brand.GetBrandById(req.query.id);
        if(result){
            res.send(result);
        }
        else{
            res.send("Error");
        }

    }

    async UpdateBrandbyId(req,res,next){
        /**
         * update the content of brand as per the id provided
         */
        const updatedData = req.body;
        const updatedResult = await brand.UpdateBrandById(req.query.id,updatedData);
        if(updatedResult){
            res.send(updatedResult);
        }
        else{
            res.send("Error");
        }
    }

    async DeleteBrandById(req,res,next){
        /**
         * functions sends the deleted data information to the user
         */
        const result = await brand.DeleteBrandById(req.query.id);
        if(result){
            res.send(result);
        }
        else{
            res.send("Error in deleting the data.");
        }
    }
}