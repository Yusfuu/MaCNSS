import { Request } from 'express';
import { dataloader } from '@middlewares/loader';
import { verifyJWT } from '@lib/jwt';

export interface Context {
  req: Request;
  dataloader: typeof dataloader;
  user: any;
}

export const context = async ({ req }: { req: Request }): Promise<Context> => {
  // get the user token from the headers
  const bearer = req.headers.authorization || '';
  const token = bearer.split(' ')[1] || '';

  // // try to retrieve a user with the token
  const user = verifyJWT(token);
  return {
    req,
    dataloader,
    //@ts-ignore
    user,
  };
};
