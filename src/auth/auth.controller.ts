import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';
import { Request, Response } from 'express';

@Controller({ path: 'auth' })
export class AuthController {
  @Get('/register')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Auth' };
  }

  @Get('/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect(@Res() res: Response) {
    // return { msg: 'Ok' };
    return res.redirect('/api/auth/user');
  }

  @Get('/user')
  handleHello(@Req() req: Request) {
    if (req.user) return { msg: 'authenticated' };
    return { msg: 'Not Authenticated' };
  }

  @Get('/profile')
  handleProfile(@Req() req: Request) {
    if (req.user) return req.user;
    return { msg: 'Not Authenticated' };
  }
}
