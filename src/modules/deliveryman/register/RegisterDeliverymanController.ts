import {Request, Response} from 'express';
import { IRegisterDeliveryman, RegisterDeliverymanUseCase} from './RegisterDeliverymanUseCase';

export class RegisterDeliverymanController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    const { username,password } = <IRegisterDeliveryman>req.body;
    
    const createDeliverymanUserCase = new RegisterDeliverymanUseCase();
    const result = await createDeliverymanUserCase.execute({username,password});

    return res.status(200).json(result);
  }
}