import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";

interface IPayload{
  sub:string;
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
      const {sub,username} = verify(token, process.env.KEY_TOKEN!) as IPayload;
      console.log(sub,username);
      //request.id_deliveryman = sub;
     // request.username = username;
      return next();
    } catch (error) {
      return response.status(401).json({message:"token is not valid"})
    }
    
}