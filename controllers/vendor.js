import { VendorServices } from "../services/vendor.js";
const vendorServices = new VendorServices();

export class VendorController{
    async CreateNewVendor(req,res,next){
        /**!SECTION
         * function that sends the newly created object as response to the request
         */
        try{
            const result = await vendorServices.CreateNewVendor(req.body);
            res.status(201).json(result);
        }
        catch(error){
            next(error);
        }
    }

    async GetAllVendorsList(req,res,next){
        /**
         * function that sends all the avalilable list of vendors to user
         * when this method is called
         */
        try{
            const result = await vendorServices.GetAllVendorsList();
            res.json(result);
        }
        catch(error){
            next(error);
        }
    }

    async GetVendorById(req,res,next){
        /**!SECTION
         * function that response the single vendor object 
         */
        try{
            const result = await vendorServices.GetVendorById(req.query.id);
            res.json(result);
        }catch(error){
            next(error);
        }
        
    }

    async UpdateVendorbyId(req,res,next){
        /**!SECTION
         * function that response the updated result
         */
        try{
            const updatedResult = await vendorServices.UpdateVendorById(req.query.id,req.body);
            res.json(updatedResult);
        }catch(error){
            next(error);
        }

    }

    async DeleteVendorById(req,res,next){
        /**!SECTION
         * function that call delete method in services and
         * return the deleted object to the user
         */
        try{
            const deletedResult = await vendorServices.DeleteVendorById(req.query.id);
            res.json(deletedResult);
        }catch(error){
            next(error);
        }
    }
}