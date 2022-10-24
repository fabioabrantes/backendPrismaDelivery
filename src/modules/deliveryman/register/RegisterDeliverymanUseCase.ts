import {PrismaClient} from '@prisma/client';
import {hash} from'bcrypt';

export interface IRegisterDeliveryman{
  username:string;
  password:string;
}

export class RegisterDeliverymanUseCase{

  async execute({username,password}:IRegisterDeliveryman):Promise<IRegisterDeliveryman>{
    const prisma = new PrismaClient();
    //validar se existe o usuário
      const deliverymanExist = await prisma.deliveryman.findFirst({
        where:{
          username,
        }
      });

      if(deliverymanExist){
        throw new Error('deliveryman already exists')
      }
    // criptografar a senha
      const hashPassword = await hash(password,10);

    //salvar o cliente
    const deliveryman = await prisma.deliveryman.create({
      data:{
        username,
        password:hashPassword,
      }
    });
    return deliveryman;
  }
}