import express from 'express'
import morgan from 'morgan';
import { passport } from "./auth";
export const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(morgan('tiny'))

const sessionMiddleware = (req,res,next)=>{
    if (req.isAuthenticated()) {
      next();
    } else {
      res.sendStatus(401)
    }
}

import { facebook,user } from "./routes";

app.use('/',facebook);

app.get('/',sessionMiddleware,user);