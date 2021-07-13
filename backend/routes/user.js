import { Router } from "express";

const prefix = "user";
export const user = Router();
user.get(`${prefix}/`,(req,res)=>{
    res.json(req.user)
});
    


