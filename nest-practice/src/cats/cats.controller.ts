import { Controller, Get, Query, Post, Put, Delete, HttpCode, Param, Body } from '@nestjs/common';
// import { Request } from 'express';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async index(): Promise<Cat[]> {
    return this.catsService.findAll();
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
