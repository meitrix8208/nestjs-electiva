import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MD5 } from 'crypto-js';
import { prisma } from '../database/database.service';

const { user } = prisma;
@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;

    const mergedUserDto = { ...rest, password: MD5(password).toString() };
    const newUser = await user.create({
      data: {
        ...mergedUserDto,
      },
    });
    return newUser;
  }

  async findAll() {
    const users = await user.findMany({
      where: {
        active: true,
      },
    });
    return users;
  }
  // find one user by id and if active is true
  async findOne(id: string) {
    const UniqueUser = await user.findUnique({
      where: {
        id: id,
      },
    });

    if (UniqueUser && UniqueUser.active === true) {
      return user;
    }

    return {};
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...rest } = updateUserDto;
    const mergedUserDto = { ...rest, password: MD5(password).toString() };
    const updatedUser = await user.update({
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
    const deletedUser = await user.update({
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
