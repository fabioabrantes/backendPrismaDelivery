import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";

interface IPayload{
  id:string;
  iat:number;
  exp: number;
  username:string;
}

export function verifyTokenAuthenticationDeliveryman(
  request: Request,
  response:Response, 
  next:NextFunction
  ){
    const authHeader = request.headers.authorization;
    // validarconsole.log(token);

    if(!authHeader){
      return response.status(401).json({message:"token missing!"})
    }
    // Bearer dfgdfgfhsivvbkvkjb
    // [0] Bearer
    // [1] dfgdfgfhsivvbkvkjb 
    const [,token] = authHeader.split(" "); 
    // validar se é o token gerado
    try {
      const {id,username} = verify(token, process.env.KEY_TOKEN!) as IPayload;
      console.log(id,username);
      request.id_deliveryman = id;
      request.username = username;
      return next();
    } catch (error) {
      return response.status(401).json({message:"token is not valid"})
    }
    
}