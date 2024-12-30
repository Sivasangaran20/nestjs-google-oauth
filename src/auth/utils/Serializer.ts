import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }
  async serializeUser(user: User, done: Function) {
    console.log('Serialize', user);
    return await done(null, user);
  }
  async deserializeUser(payload: User, done: Function) {
    const user = await this.authService.findUser(payload.id);
    console.log('deSerialize1111', user);
    return user ? done(null, user) : done(null, null);
  }
}
