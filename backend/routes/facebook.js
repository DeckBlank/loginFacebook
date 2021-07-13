import { passport } from "../auth";
import { Router } from "express";
import { enviroment } from "../config/enviroments";

const prefix = "/auth/facebook";
export const facebook = Router();
facebook.get(`${prefix}/`,passport.authenticate("facebook"));

facebook.get(`${prefix}/callback`,passport.authenticate("facebook"), 
    (req, res) => {
        res.redirect('/');
    }
);