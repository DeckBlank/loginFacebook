import { enviroment } from "./config/enviroments";
import {app} from './app'

const server = async ()=>{
    await app.listen(enviroment.PORT);
    console.log(`App in port ${enviroment.PORT}`);
}

server();
