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
          

   /*  create um delivery na tabela deliveries passando o
    item_name e id_client.
    Vai retorna um delivery coontendo o id_deliveryman end_date null
   */

    const deliveries = {};
    return deliveries;
  }
}