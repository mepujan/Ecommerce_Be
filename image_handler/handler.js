import multer from 'multer';
import path from 'path';


export const ProductStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'images/products_images');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }

})

export const ProfilePictureStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'images/profile_picture');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})