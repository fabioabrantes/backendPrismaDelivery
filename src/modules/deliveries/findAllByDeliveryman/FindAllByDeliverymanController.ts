import {Request, Response} from 'express';
import { FindAllByDeliverymanUseCase } from './FindAllByDeliverymanUseCase';

export class FindAllByDeliverymanController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    // pega o id_deliveryman que foi armazenado nas requisição req: Request

    const findAllDeliveriesUseCase = new FindAllByDeliverymanUseCase();
    const result = await findAllDeliveriesUseCase.execute('id_deliveryman');

    return res.status(200).json(result);
  }
}