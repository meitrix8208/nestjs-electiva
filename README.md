# Proyecto Electiva Disciplinar II - Backend

## integrantes

- Mauricio Rodriguez [@maurrod2001](https://github.com/maurrod2001)

### Historias de usuario:

1. Como usuario, quiero poder registrarme en la aplicación proporcionando mi correo electrónico, contraseña, nombre, apellido, identificación y otros detalles personales.
2. Como usuario, quiero poder iniciar sesión en la aplicación utilizando mi correo electrónico y contraseña.
3. Como usuario, quiero poder ver y actualizar mi perfil, incluyendo mi imagen de perfil, número de teléfono, fecha de nacimiento, país, estado, ciudad y dirección.
4. Como usuario, quiero poder desactivar temporalmente mi cuenta para ocultar mi perfil y suspender mi actividad en la aplicación.
5. Como usuario, quiero poder reactivar mi cuenta desactivada anteriormente para restaurar mi perfil y continuar utilizando la aplicación.
6. Como usuario, quiero poder cambiar mi contraseña actual proporcionando mi contraseña antigua y estableciendo una nueva contraseña.
7. Como usuario, quiero poder cerrar sesión en la aplicación para proteger mi información y finalizar mi sesión actual.

### Historias técnicas:

1. Como desarrollador, quiero configurar el proyecto Nest.js con Prisma como ORM (Object-Relational Mapping) en lugar de TypeORM.
2. Como desarrollador, quiero crear el modelo de datos "User" en Prisma que coincida con el esquema proporcionado, incluyendo las propiedades de id, email, password, name, lastname, identification, picture, phone, birthday, country, state, city, address y active.
3. Como desarrollador, quiero implementar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para el modelo de datos "User" utilizando Prisma para interactuar con la base de datos PostgreSQL.
4. Como desarrollador, quiero configurar las rutas y controladores necesarios en Nest.js para manejar las solicitudes de las historias de usuario mencionadas anteriormente.
5. Como desarrollador, quiero utilizar TypeScript en el proyecto Node.js para aprovechar las ventajas del tipado estático y mejorar la calidad del código.
6. Como desarrollador, quiero implementar la funcionalidad de registro de usuarios, que valide los datos ingresados ​​y cree un nuevo registro de usuario en la base de datos.
7. Como desarrollador, quiero implementar la funcionalidad de inicio de sesión de usuarios, que verifique las credenciales proporcionadas y genere un token de acceso para permitir el acceso autenticado a la aplicación.
8. Como desarrollador, quiero implementar la funcionalidad de actualización de perfil de usuarios, que permita a los usuarios cambiar sus datos personales y actualizarlos en la base de datos.
9. Como desarrollador, quiero implementar la funcionalidad de desactivación de cuenta de usuarios, que establezca el estado "active" del usuario en falso y oculte su perfil.
10. Como desarrollador, quiero implementar la funcionalidad de reactivación de cuenta de usuarios, que establezca el estado "active" del usuario en verdadero y restaure su perfil en la aplicación.
11. Como desarrollador, quiero implementar la funcionalidad de cambio de contraseña de usuarios, que verifique la contraseña actual y actualice la contraseña almacenada en la base de datos.
12. Como desarrollador, quiero implementar la funcionalidad de cierre de sesión de usuarios, que invalide el token de acceso actual y cierre la sesión del usuario.

<br />
<br />

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
# install dependencies
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
