import multer from 'multer';
import path from 'path';

//saves product images inside images/product_images directory
export const ProductStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'images/products_image');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }

})


//saves user images inside images/product_images directory
export const ProfilePictureStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'images/profile_picture');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})