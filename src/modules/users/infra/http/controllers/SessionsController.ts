import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SessionService from '@modules/users/services/SessionService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const sessionUser = container.resolve(SessionService);

    const { user, token } = await sessionUser.execute({
      email,
      password
    });

    // @ts-ignore
    delete user.password;

    return response.json({ user, token });
  }
}
