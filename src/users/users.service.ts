import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MD5 } from 'crypto-js';
import { prisma } from '../database/database.service';
@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;

    const mergedUserDto = { ...rest, password: MD5(password).toString() };
    const newUser = await prisma.user.create({
      data: {
        ...mergedUserDto,
      },
    });
    return newUser;
  }

  async findAll() {
    const users = await prisma.user.findMany({
      where: {
        active: true,
      },
    });
    return users;
  }
  // find one user by id and if active is true
  async findOne(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user && user.active === true) {
      return user;
    }

    return {};
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...rest } = updateUserDto;
    const mergedUserDto = { ...rest, password: MD5(password).toString() };
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...mergedUserDto,
      },
    });
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await prisma.user.update({
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
