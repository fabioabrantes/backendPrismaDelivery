import express,{Request,Response} from 'express';
import * as dotenv from 'dotenv';
import { RegisterClientController } from './modules/registerClient/RegisterClientController';


type IUser = {
  name:string;
  description:string;
  suap:number;
}

dotenv.config();

const app = express();
//middleware
app.use(express.json());


const registerClientController = new RegisterClientController();
app.post('/client/register',registerClientController.handle);




app.listen(3333,() => {
  console.log('server on port 3333')
})

