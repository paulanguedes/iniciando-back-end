import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import SessionService from './SessionService';
import CreateUserService from './CreateUserService';

describe('SessionService', () => {
  it('should be able to authenticate user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const createUser = new CreateUserService(fakeUsersRepository);
    const authenticateUser = new SessionService(fakeUsersRepository);

    await createUser.execute({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    const response = await authenticateUser.execute({
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    expect(response).toHaveProperty('token');
  });
});
