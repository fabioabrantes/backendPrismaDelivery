import {Request, Response} from 'express';
import { UpdateByDeliverymanUseCase } from './UpdateByDeliverymanUseCase';

export class UpdateByDeliverymanController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    // pega o id_deliveryman  dentro da requisição e e id informado pelo params da reuiqisão
    const {id_deliveryman}= req;
    const {id} = req.params;

    const updateByDeliverymanUseCase = new UpdateByDeliverymanUseCase();
    const deliveryUpdated = await updateByDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery:id
    });

    return res.status(200).json(deliveryUpdated);
  }
}