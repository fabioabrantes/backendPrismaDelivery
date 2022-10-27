import express from 'express';
import * as dotenv from 'dotenv';

//middlewares
import { verifyTokenAuthenticationClient } from './middlewares/verifyTokenAuthenticationClient';
import { verifyTokenAuthenticationDeliveryman } from './middlewares/verifyTokenAuthenticationDeliveryman';

//controllers
import { RegisterClientController } from './modules/clients/registerClient/RegisterClientController';
import { AuthenticateClientController } from './modules/authentication/authenticationClient/AuthenticateClientController';
import { RegisterDeliverymanController } from './modules/deliveryman/register/RegisterDeliverymanController';
import { FindAllByClientController } from './modules/deliveries/findAllByClient/FindAllByClientController';
import { FindAllByDeliverymanController } from './modules/deliveries/findAllByDeliveryman/FindAllByDeliverymanController';
import { FindAllUndeliverableController } from './modules/deliveries/findAllUndeliverable/FindAllUndeliverableController';
import { RegisterByClientController } from './modules/deliveries/registerByClient/RegisterByClientController';
import { UpdateByDeliverymanController } from './modules/deliveries/updateByDeliveryman/UpdateByDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/authentication/authenticationDeliveryman/AuthenticateDeliverymanController';



dotenv.config();

const app = express();
//middleware
app.use(express.json());

//client
const registerClientController = new RegisterClientController();
app.post('/client/register',registerClientController.handle);

//autenticação
const authenticateClientController = new AuthenticateClientController();
app.post('/client/login',authenticateClientController.handle);
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
app.post('/deliveryman/login',authenticateDeliverymanController.handle);

// deliveryman
const registerDeliverymanController = new RegisterDeliverymanController();
app.post('/deliveryman/register', registerDeliverymanController.handle);

// deliveries
const registerByClientController = new RegisterByClientController();
app.post('/deliveries/register', verifyTokenAuthenticationClient, registerByClientController.handle);

const findAllByClientController =  new FindAllByClientController();
app.get('/deliveries/allByClient',verifyTokenAuthenticationClient, findAllByClientController.handle);

const findAllByDeliverymanController =  new FindAllByDeliverymanController();
app.get('/deliveries/allByDeliveryman',verifyTokenAuthenticationClient, findAllByDeliverymanController.handle);

const findAllUndeliverableController =  new FindAllUndeliverableController();
app.get('/deliveries/allUndeliverable',verifyTokenAuthenticationDeliveryman, findAllUndeliverableController.handle);

const updateByDeliverymanController = new UpdateByDeliverymanController();
app.put('/deliveries/updateByDeliveryman/:id',verifyTokenAuthenticationDeliveryman, updateByDeliverymanController.handle);


app.listen(3333,() => {
  console.log('server on port 3333')
})

