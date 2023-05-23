import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// try prisma connection

async function main() {
  try {
    await prisma.$connect();
    console.log('Connected to database');
  } catch (err) {
    console.log('Error connecting to database: ', err);
  }
}

main();
export { prisma };

@Injectable()
export class DatabaseService {}
