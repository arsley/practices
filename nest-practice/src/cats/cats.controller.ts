import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
// import { Request } from 'express';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { CatsService } from './cats.service';
// import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from '../forbidden.exception';
// import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('cats')
// @UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // this.catsService.create(createCatDto);
    // return { message: 'created!' };
    throw new ForbiddenException();
  }

  // @Get()
  // async index(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }

  @Get()
  async index() {
    // throw new ForbiddenException();
    throw new HttpException('Request timeout', HttpStatus.REQUEST_TIMEOUT);
  }

  // CAUTION : routing order

  // @Get('nothing')
  // @HttpCode(204)
  // nothing() {
  //   return 'This route returns no content';
  // }
  //
  // @Get('ab*cd')
  // findWild() {
  //   return 'This route uses a wildcard';
  // }
  //
  // @Get(':id')
  // show(@Param('id') id: string): string {
  //   console.log('SHOW', id);
  //   return `This action returns a #${id} cat`;
  // }
  //
  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
  //   console.log('UPDATE', id, updateCatDto);
  //   return `This action updates a #${id} cat`;
  // }
  //
  // @Delete(':id')
  // destroy(@Param('id') id: string) {
  //   console.log('DELETE', id);
  //   return `This action removes a #${id} cat`;
  // }
}
