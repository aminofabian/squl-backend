import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerUser(createUserDto: CreateUserDto) {
    const user = this.userService.finByEmail(createUserDto.email);
    if (user) {
      throw new Error('User already exists');
    }
    return this.userService.create(createUserDto);
  }
}
