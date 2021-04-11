import AppError from '@shared/errors/AppError';

import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentRepository';
import ListProvidersMonthAvailabilityService from './ListProviderMonthAvailability';

let fakeAppointmentRepository: FakeAppointmentRepository;
let listProvidersMonthAvailability: ListProvidersMonthAvailabilityService;

describe('ListProvidersMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    listProvidersMonthAvailability = new ListProvidersMonthAvailabilityService(fakeAppointmentRepository);
  });

  it('should be able to list the available days of the month of a provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: '58192917',
      date: new Date(2021, 3, 1, 10, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: '58192917',
      date: new Date(2021, 2, 1, 10, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: '58192917',
      date: new Date(2021, 3, 1, 14, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: '58192917',
      date: new Date(2021, 3, 2, 9, 0, 0),
    });

    const availability = listProvidersMonthAvailability.execute({
      provider_id: '58192917',
      year: 2021,
      month: 4
    });

    expect(availability).toEqual(expect.arrayContaining([
      { day: 1, available: false },
      { day: 2, available: false },
      { day: 3, available: true },
      { day: 4, available: true },
    ]));
  });
});
