import {PrismaClient} from '@prisma/client';

export interface IRegisterDelivery{
  item_name:string;
  id_client:string;
  id_deliveryman?: String | null;
  created_at?: Date;
  end_at?: Date | null;
}

export class RegisterByClientUseCase{

  async execute({item_name,id_client}:IRegisterDelivery){
    const prisma = new PrismaClient();
      /*  create um delivery na tabela deliveries passando o
    item_name e id_client.
    Vai retorna um delivery coontendo o id_deliveryman end_date null
   */
    const  delivery = await prisma.deliveries.create({
      data:{
        item_name,
        id_fk_client:id_client
      }
    })
   
    return delivery;
  }
}