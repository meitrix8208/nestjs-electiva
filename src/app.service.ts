import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloNest(): string {
    return 'Hola desde Nest js!';
  }
  getAboutNest(): string {
    return 'NestJS es un framework para construir aplicaciones web en Node.js. Fue creado para ofrecer una solución robusta para el desarrollo de servidores, aprovechando la escalabilidad y la eficiencia de Node.js.';
  }
  getHelloWithParams(name: string): string {
    return `Hola ${name}!`;
  }
  getAgeWithQueryParams(age: string): string {
    return `Tu edad es ${age}`;
  }
}
