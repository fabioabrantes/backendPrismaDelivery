import {Request, Response} from 'express';
import { RegisterByClientUseCase,IRegisterDelivery } from './RegisterByClientUseCase';

export class RegisterByClientController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    // pega o item_name informado pelo usuário e pegar o id_client da requisição quando logado
    const {item_name}  = req.body;
    const id_client = req.id_client;
    const registerByClientUseCase = new RegisterByClientUseCase();
    const result = await registerByClientUseCase.execute({item_name,id_client});

    return res.status(200).json(result);
  }
}