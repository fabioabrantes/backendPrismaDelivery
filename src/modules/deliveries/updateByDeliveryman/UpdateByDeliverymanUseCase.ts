import {PrismaClient} from '@prisma/client';

interface IUpdateByDeliveryman{
  id_delivery:string;
  id_deliveryman:string;
}

export class UpdateByDeliverymanUseCase{

  async execute({id_delivery,id_deliveryman}:IUpdateByDeliveryman){
    const prisma = new PrismaClient();
    const result = await prisma.deliveries.update({
      where:{
        id:id_delivery
      },
      data:{
        id_fk_deliveryman:id_deliveryman
      }
    });
    return result;
  }
}