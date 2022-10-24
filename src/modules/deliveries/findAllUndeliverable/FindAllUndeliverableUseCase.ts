import {PrismaClient} from '@prisma/client';


export class FindAllUndeliverableUseCase{

  async execute(){
    const prisma = new PrismaClient();

    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at:null,
        id_fk_deliveryman:null,
      }
    })
    return deliveries;
  }
}