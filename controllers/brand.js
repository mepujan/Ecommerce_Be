import {
    BrandService
} from '../services/brand.js';
import { VendorServices } from '../services/vendor.js';
const brand = new BrandService();


export class BrandController {
    async CreateNewBrand(req, res, next) {
        /*!SECTION
        function that takes req from the user or application and
        returns the data of saved instance to the user.
        */
        try {
            const result = await brand.CreateNewBrand(req.body);
            res.send(result);
        } catch (error) {
            next(error);
        }
    }

    async GetAllBrandsList(req, res, next) {
        /**
         * function that returns all the brand list result to the user or the application 
         * calling the api
         */
        try {
            const results = await brand.GetAllBrandsList();
            res.send(results?results:[])
        } catch (error) {
            next(error);
        }

    }


    async GetBrandById(req, res, next) {
        /**
         * function that response single brand item as per the id
         */
        try {
            const result = await brand.GetBrandById(req.query.id);
            res.send(result);
        } catch (error) {
            next(error);
        }
    }

    async UpdateBrandbyId(req, res, next) {
        /**
         * update the content of brand as per the id provided
         */
        try{
        const updatedData = req.body;
        const updatedResult = await brand.UpdateBrandById(req.query.id, updatedData);
            res.send(updatedResult);
        } catch(error){
            next(error);
        }
    }

    async DeleteBrandById(req, res, next) {
        /**
         * functions sends the deleted data information to the user
         */
        try{
        const result = await VendorServices.DeleteBrandById(req.query.id);
            res.send(result);
        } catch(error) {
            next(error);
        }
    }
}