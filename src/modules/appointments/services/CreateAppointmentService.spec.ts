import FakeAppointmentRepository from '@modules/appointments/repositories/fakes/FakeAppointmentRepository';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentRepository);
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '21548554'
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('21548554');
  })

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2021, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '21548554'
    });

    await expect(createAppointment.execute({
      date: appointmentDate,
      provider_id: '21548554'
    })).rejects.toBeInstanceOf(AppError);
  })
});
