import {PrismaClient} from '@prisma/client';


export class FindAllByDeliverymanUseCase{
  async execute(id_deliveryman:string){
    const prisma = new PrismaClient();

    const deliveries = await prisma.deliveryman.findUnique({
      where:{
        id:id_deliveryman
      },
      select:{
        id:true,
        username:true,
        deliveries:true
      }
    });

    return deliveries;
  }
}