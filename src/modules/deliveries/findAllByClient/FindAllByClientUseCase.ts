import {PrismaClient} from '@prisma/client';

export class FindAllByClientUseCase{

  async execute(id_client:string){
    const prisma = new PrismaClient();

    const deliveries = await prisma.clients.findUnique({
      where:{
        id:id_client
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