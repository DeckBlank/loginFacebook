import dotenv from 'dotenv'
dotenv.config();
const {
    PORT,
    clientID,
    clientSecret,
    callbackURL,
} = process.env;
export const enviroment = {
    PORT,
    clientID,
    clientSecret,
    callbackURL,
}



