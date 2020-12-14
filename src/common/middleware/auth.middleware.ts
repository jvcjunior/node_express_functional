import HttpStatus from 'http-status-codes'
import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from '../constants/auth.constant'
import { errorResponse } from '../utils/response.utils'

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  
  if (!req.headers || !req.headers['authorization']) {
    res.status(403).send(errorResponse(HttpStatus.FORBIDDEN, "Missing JWT token from the 'Authorization' header", true));
    return;
  } 

  //Get the jwt token from the head
  const token = <string>req.headers["authorization"];
  let jwtPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token.replace('Bearer ', ''), process.env.JWT_KEY || JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send(errorResponse(HttpStatus.UNAUTHORIZED, "", true));
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  // const { id, name, email } = jwtPayload;
  // const newToken = jwt.sign({ id, name, email }, process.env.JWT_KEY || JWT_SECRET, {
  //   expiresIn: "1h"
  // });
  // res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
}
