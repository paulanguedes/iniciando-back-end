import FakeAppointmentRepository from '@modules/appointments/repositories/fakes/FakeAppointmentRepository';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentRepository);

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '21548554'
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('21548554');
  })

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentRepository);

    const appointmentDate = new Date(2021, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '21548554'
    });

    expect(createAppointment.execute({
      date: appointmentDate,
      provider_id: '21548554'
    })).rejects.toBeInstanceOf(AppError);
  })
});
