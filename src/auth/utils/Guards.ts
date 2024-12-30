import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { Observable } from 'rxjs';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext) {
    console.log(context, 'context');
    const activate = (await super.canActivate(context)) as boolean;
    console.log(activate, 'activate');

    const request = context.switchToHttp().getRequest();
    console.log(request, 'req');

    await super.logIn(request);
    return activate;
  }
}
