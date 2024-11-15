import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateAuthDto } from '../user/dto/update-auth.dto';

@Injectable()
export class AuthService {
  registerUser(createUserDto: CreateUserDto) {
    return `This action adds a new auth with data: ${JSON.stringify(createUserDto)}`;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth with data: ${JSON.stringify(updateAuthDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
