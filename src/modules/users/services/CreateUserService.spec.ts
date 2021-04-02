import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';

describe('CreatUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    expect(createUser.execute({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    })).rejects.toBeInstanceOf(AppError);
  });
});
