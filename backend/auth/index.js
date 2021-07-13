import passport from "passport";
import {facebook} from './facebook'
passport.use(facebook);
export {
    passport
}