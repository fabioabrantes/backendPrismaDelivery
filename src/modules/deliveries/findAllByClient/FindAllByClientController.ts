import {Request, Response} from 'express';
import { FindAllByClientUseCase } from './FindAllByClientUseCase';

export class FindAllByClientController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    // pega o id_client que foi armazenado nas requisição req: Request
    

    const findAllDeliveriesUseCase = new FindAllByClientUseCase();
    const result = await findAllDeliveriesUseCase.execute("id_client");

    return res.status(200).json(result);
  }
}