import { Router } from "express";

const router = Router();


router.get('/',(req,res)=>{
    res.send("Hi I am from Router");
});

router.post('create-user',(req,res)=>{
   res.json("I am creating the user");
});


router.get('/',(req,res)=>{
    res.send("Hi I am from Router");
});

router.post('create-user',(req,res)=>{
   res.json("I am creating the user");
});

export default router;