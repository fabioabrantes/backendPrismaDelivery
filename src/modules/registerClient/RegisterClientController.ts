import {Request,Response} from 'express';

import {RegisterClientUseCase,IRegisterClient} from './RegisterClientUseCase';

export class RegisterClientController{

  async handle(req:Request, res:Response){ 
    try {
      
      const {username, password} = <IRegisterClient>req.body;
      // enviar para o caso de uso
  
      const registerClientUseCase = new RegisterClientUseCase();
      const result = registerClientUseCase.execute({username, password});
  
      return res.status(200).json(result);
    } catch (error:any) {
      return res.status(400).json({
        message: error.message
      });
    }

  }
}