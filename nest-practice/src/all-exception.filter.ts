import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}

// import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

// @Catch()
// export class AllExceptionFilter implements ExceptionFilter {
//   catch(exception: unknown, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const res = ctx.getResponse();
//     const req = ctx.getRequest();
//     const status = exception instanceof HttpException
//       ? exception.getStatus()
//       : HttpStatus.INTERNAL_SERVER_ERROR;
//
//     res
//       .status(status)
//       .json({
//         statusCode: status,
//         timestamp: new Date().toISOString(),
//         path: `${req.method} ${req.url}`,
//       });
//   }
// }
