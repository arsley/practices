// import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: () => void) {
//     console.log(req.body);
//     next();
//   }
// }

export function logger(req: Request, res: Response, next: () => void) {
  console.log(req.body);
  next();
}
