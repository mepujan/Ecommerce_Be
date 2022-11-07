import { VendorServices } from "../services/vendor.js";
const vendorServices = new VendorServices();

export class VendorController{
    async CreateNewVendor(req,res,next){
        /**!SECTION
         * function that sends the newly created object as response to the request
         */
        try{
            const result = await vendorServices.CreateNewVendor(req.body);
            res.send(result);
        }
        catch(error){
            next(error);
        }
    }
}