import { Controller, Get, Query, Post, Put, Delete, HttpCode, Param, Body } from '@nestjs/common';
// import { Request } from 'express';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log('CREATE', createCatDto);
    return 'This action adds a new cat';
  }

  @Get()
  index(@Query() query: ListAllEntities) {
    console.log('INDEX', query);
    return 'This action returns all cats';
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

  @Get(':id')
  show(@Param('id') id: string): string {
    console.log('SHOW', id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    console.log('UPDATE', id, updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    console.log('DELETE', id);
    return `This action removes a #${id} cat`;
  }
}
