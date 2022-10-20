import {PrismaClient} from '@prisma/client';
import {hash} from 'bcrypt';

export interface IRegisterClient{
  username:string;
  password:string;
}
export class RegisterClientUseCase{
  
  async execute({username,password}:IRegisterClient){
    const prisma = new PrismaClient();
    // validar os campos

    //verificar se ja existe um cliente 
    const existClient = await prisma.clients.findFirst({
      where:{
        username
      }
    })
    if(existClient){
      throw new Error('Client already exists')
    }
    // vou pegar po password e criptografar
    const passwordHash = await hash(password,10);

    // salvar client
    const client = await prisma.clients.create({
      data:{
        username, password:passwordHash
      }
    });

    return client;
  }
}
