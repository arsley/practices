import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
// import { LoggerMiddleware } from './logger.middleware';
// import { logger } from './logger.middleware';
import { CatsModule } from './cats/cats.module';
// import { CatsController } from './cats/cats.controller';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [CatsModule],
  // providers: [
  //   { provide: APP_FILTER, useClass: HttpExceptionFilter },
  // ],
})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(logger)
//       .forRoutes(CatsController);
//       // .apply(LoggerMiddleware)
//       // .exclude(
//       //   { path: 'cats', method: RequestMethod.GET },
//       //   { path: 'cats', method: RequestMethod.POST },
//       // )
//       // .forRoutes('cats');
//       // .forRoutes({ path: 'cats', method: RequestMethod.GET });
//   }
// }
