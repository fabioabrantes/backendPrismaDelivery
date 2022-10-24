import {Request, Response} from 'express';
import { FindAllUndeliverableUseCase } from './FindAllUndeliverableUseCase';

export class FindAllUndeliverableController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    
    const findAllUndeliverableUseCase = new FindAllUndeliverableUseCase();
    const result = await findAllUndeliverableUseCase.execute();

    return res.status(200).json(result);
  }
}