import Brand from '../model/brand.js';

export class BrandService{
    async CreateNewBrand(brand){
        const newBrand = new Brand(brand);
        return await newBrand.save();
    } 
}