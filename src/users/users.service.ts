import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { MD5 } from 'crypto-js';
const prisma = new PrismaClient();
// i am using prisma
// i am ising crypto-js to hash the password
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;

    const updatedUserDto = { ...rest, password: MD5(password).toString() };
    const newUser = prisma.user.create({
      data: {
        ...updatedUserDto,
      },
    });
    return newUser;
  }

  findAll() {
    return prisma.user.findMany({
      where: {
        active: true,
      },
    });
  }

  findOne(id: string) {
    const user = prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...rest } = updateUserDto;

    const updatemergeuser = { ...rest, password: MD5(password).toString() };
    const updatedUser = prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...updatemergeuser,
      },
    });
    return updatedUser;
  }

  remove(id: string) {
    const deletedUser = prisma.user.update({
      where: {
        id: id,
      },
      data: {
        active: false,
      },
    });
    return deletedUser;
  }
}
