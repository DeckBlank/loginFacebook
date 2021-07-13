import { enviroment } from "../config/enviroments";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { User } from "../db/models/user.js";


const {clientID,clientSecret,callbackURL} = enviroment
const credenciales = {clientID, clientSecret, callbackURL}
/* passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  }); */
const callback = function (accessToken, refreshToken, profile, cb) {
    const findOrCreateUser = async () => {
        let user ;
        try {
            user = User.findOne({ facebookId: profile.id });
            if (user)  return cb(null, user)
        } catch (error) {
            return cb(error);
        }
        try {
            let  newUser = await User.createOne({
                facebookId : profile.id,
                nombre : profile.displayName
            }); 
            return cb(null, newUser);
        } catch (error) {
            return cb(error);
        }
    }
    process.nextTick(findOrCreateUser);
  }

  export const facebook = new FacebookStrategy(credenciales,callback)