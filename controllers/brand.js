import { BrandService } from '../services/brand.js';
const brand = new BrandService();


export class BrandController{
    async CreateNewBrand(req,res,next){
        const newBrand = req.body;
        const result = await brand.CreateNewBrand(newBrand);
        if(result){
            res.send(result);
        }
        else{
            res.send('error');
        }
    }
}