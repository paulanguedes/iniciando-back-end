import AppError from '@shared/errors/AppError';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  it('should be able to update name and email', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Jane F Doe',
      email: 'janefdoe@gmail.com',
    });

    expect(updatedUser.name).toBe('Jane F Doe');
    expect(updatedUser.email).toBe('janefdoe@gmail.com');
  });

  it('should not be able to update profile of non-existing user', async () => {
    await expect(updateProfile.execute({
      user_id: 'non-existing-id',
      name: 'Jane Woods',
      email: 'janewoods@gmail.com'
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update email to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    const user = await fakeUsersRepository.create({
      name: 'Jane Guerrera',
      email: 'janeguerrera@gmail.com',
      password: '12345678'
    });

    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'Jane Guerrera',
      email: 'janedoe@gmail.com',
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      old_password: '123456',
      password: '123123'
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to update password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123123'
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: '123456'
    });

    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      old_password: '12345678',
      password: '123123'
    })).rejects.toBeInstanceOf(AppError);
  });
});
