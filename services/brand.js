import Brand from '../model/brand.js';

export class BrandService{
    async CreateNewBrand(brand){
        /* function that takes brand object as an input and parse it to brand model and 
        save it to the database and return that instance of saved database. */
        const newBrand = new Brand(brand);
        return await newBrand.save();
    } 

    async GetAllBrandsList(){
    /**!SECTION
     * function that returns list of all brands available in Brand collection in database.
     */
        return await Brand.find({});
    }

    async GetBrandById(id){
        /**!SECTION
         * function that return single brand data 
         * as per the id provided by the user
         */
        return await Brand.findById(id);
    }

    async UpdateBrandById(id,updatedBrand){
        /**!SECTION
         * function that returns updated data
         * and the data are updated as per the id provided
         */
        return await Brand.findByIdAndUpdate(id,updatedBrand,{new:true})
    }

    async DeleteBrandById(id){
        return await Brand.findByIdAndDelete(id);
    }
}