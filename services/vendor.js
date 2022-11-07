import Vendor from "../model/vendor.js";

export class VendorServices{
    async CreateNewVendor(newVendor){
        /**
         * function that saves the new incoming data of the vendor to the database
         */
        const vendor = new Vendor(newVendor);
        return await vendor.save();
    }
    
    async GetAllVendorsList(){
        /**!SECTION
         * function that returns list of all vendor available in Brand collection in database.
         */
            return await Vendor.find({});
        }
    
        async GetVendorById(id){
            /**!SECTION
             * function that return single vendor data 
             * as per the id provided by the user
             */
            return await Vendor.findById(id);
        }
    
        async UpdateVendorById(id,updatedVendor){
            /**!SECTION
             * function that returns updated data
             * and the data are updated as per the id provided
             */
            return await Vendor.findByIdAndUpdate(id,updatedVendor,{new:true})
        }
    
        async DeleteVendorById(id){
            /**!SECTION
             * function that find and deletes the data of vendor model
             * and return the instances of deleted data.
             */
            return await Vendor.findByIdAndDelete(id);
        }
}