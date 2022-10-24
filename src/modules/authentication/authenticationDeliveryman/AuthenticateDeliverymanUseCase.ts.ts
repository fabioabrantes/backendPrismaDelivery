import {PrismaClient} from '@prisma/client';
import {compare} from'bcrypt';
import {sign} from 'jsonwebtoken';

export interface IAuthenticateDeliveryman{
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase{

  async execute({username,password}:IAuthenticateDeliveryman):Promise<String>{
      const prisma = new PrismaClient();
    
   // verificar se existe o deliveryman cadastrado
     const deliveryman = await prisma.deliveryman.findFirst({
      where:{
        username
      },
      select:{
        id:true,
        password:true
      }
     });
     if(!deliveryman){
      throw new Error('username or password invalid');
     }
    // verificar se a senha corresponde ao usernames
      const passwordCorrect = await compare(password,deliveryman.password)
     if(!passwordCorrect){
      throw new Error('username or password invalid');
     }
      // gerar o token https://www.md5hashgenerator.com/
      const token = sign({
        username,
        id: deliveryman.id
      } 
      ,
      process.env.KEY_TOKEN!,
      {
        algorithm:'HS256',
        expiresIn:'1d',
      }
      )
      
      return token;
  }
}