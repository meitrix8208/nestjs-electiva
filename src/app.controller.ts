import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHelloNest();
  }
  @Get('/about')
  getAbout(): string {
    return this.appService.getAboutNest();
  }
  @Get('/hola/:name')
  getHelloWithParams(@Param('name') name: string): string {
    return this.appService.getHelloWithParams(name);
  }
  @Get('/edad')
  getAgeWithQueryParams(@Query('age') age: string): string {
    return this.appService.getAgeWithQueryParams(age);
  }
}
