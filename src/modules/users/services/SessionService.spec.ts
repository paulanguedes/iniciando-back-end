import AppError from '@shared/errors/AppError';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import SessionService from './SessionService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: SessionService;

describe('SessionService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    authenticateUser = new SessionService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to authenticate user', async () => {
    const user = await createUser.execute({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    const response = await authenticateUser.execute({
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    await expect(authenticateUser.execute({
      email: 'janedoe@gmail.com',
      password: '123456'
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await createUser.execute({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    await expect(authenticateUser.execute({
      email: 'janedoe@gmail.com',
      password: 'wrongPassword'
    })).rejects.toBeInstanceOf(AppError);
  });
});
