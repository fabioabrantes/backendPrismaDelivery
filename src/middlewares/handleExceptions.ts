import { Request,Response, NextFunction } from 'express';

export function exceptionsHandle(
  err:Error, 
  req:Request, 
  res:Response, 
  next:NextFunction){

    // verificar se o err é do tipo Error e lançar res.status(400).json({message:err.message})
    
    return res.status(500).json({
      status:"Error",
      message: "Error server internal"});
  }