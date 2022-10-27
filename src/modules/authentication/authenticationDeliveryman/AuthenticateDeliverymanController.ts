import {Request, Response} from 'express';
import { AuthenticateDeliverymanUseCase,IAuthenticateDeliveryman } from './AuthenticateDeliverymanUseCase.ts';


export class AuthenticateDeliverymanController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    const { username,password } = <IAuthenticateDeliveryman>req.body;
    
    // instantica e chama o método do caso de uso
    const autenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
    const token = await autenticateDeliverymanUseCase.execute({ username,password })
    return res.status(200).json(token);
  }
}