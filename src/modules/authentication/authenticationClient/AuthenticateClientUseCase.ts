import {PrismaClient} from '@prisma/client';
import {compare} from'bcrypt';
import {sign} from 'jsonwebtoken';

export interface IAuthenticateClient{
  username: string;
  password: string;
}

export class AuthenticateClientUseCase{

  async execute({username,password}:IAuthenticateClient):Promise<String>{
      const prisma = new PrismaClient();
    
   // verificar se existe o client cadastrado
      const clientExist = await prisma.clients.findFirst({
        where:{
          username
        }
      });
      if(!clientExist){
        throw new Error('username or password invalid');
      }
    // verificar se a senha corresponde ao usernames
      const isPassword = await compare(password,clientExist.password);
      if(!isPassword){
        throw new Error('username or password invalid');
      }
    // gerar o token https://www.md5hashgenerator.com/
      const token = sign(
        {
          username,
        },
        process.env.KEY_TOKEN!,
        {
          expiresIn:'1d',
          algorithm:'HS256',
          subject:clientExist.id
        }
      );
      return token;
  }
}