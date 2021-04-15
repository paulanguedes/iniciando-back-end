import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProvidersDayAvailabilityService from './ListProvidersDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProvidersDayAvailability: ListProvidersDayAvailabilityService;

describe('ListProvidersDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProvidersDayAvailability = new ListProvidersDayAvailabilityService(fakeAppointmentsRepository);
  });

  it('should be able to list the available hours in a day of a provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '41648556',
      date: new Date(2021, 4, 20, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '41648556',
      date: new Date(2021, 4, 20, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2021, 4, 20, 11).getTime();
    });

    const availability = await listProvidersDayAvailability.execute({
      provider_id: 'user',
      year: 2021,
      month: 5,
      day: 20
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 11, available: false },
        { hour: 12, available: true },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
      ]));
  });

});
