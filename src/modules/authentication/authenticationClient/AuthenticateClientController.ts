import {Request, Response} from 'express';
import { AuthenticateClientUseCase,IAuthenticateClient } from './AuthenticateClientUseCase';


export class AuthenticateClientController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    const { username,password } = <IAuthenticateClient>req.body;
    
    // instantica e chama o método do caso de uso
    const authenticateClientUseCase = new AuthenticateClientUseCase()
    const token = await authenticateClientUseCase.execute({username,password})
    
    return res.status(200).json(token);
  }
}