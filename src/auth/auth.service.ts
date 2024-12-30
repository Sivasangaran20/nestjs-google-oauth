import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserDTO } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async validateUser(user: UserDTO) {
    console.log(user);

    const data = await this.userRepo.findOneBy({ email: user.email });
    if (data) return data;
    console.log('user not found');
    const newUser = await this.userRepo.save(user);
    return newUser;
  }

  async findUser(id: string) {
    const user = await this.userRepo.findOne({ where: { id: id } });
    return user;
  }
}
