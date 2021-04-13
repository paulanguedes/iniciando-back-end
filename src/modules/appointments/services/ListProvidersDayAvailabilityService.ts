import { inject, injectable } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import { getDate, getDaysInMonth, getHours } from 'date-fns';

interface IRequest {
  provider_id: string,
  day: number,
  month: number;
  year: number;
};

type IResponse = Array<{
  hour: number;
  available: boolean
}>

@injectable()
export default class ListProvidersDayAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) { };

  public async execute({ provider_id, day, month, year }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInDayFromProvider({
      provider_id,
      year,
      month,
      day
    });

    const startHour = 8;

    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + startHour
    );

    const availability = eachHourArray.map(hour => {
      const hasAppointmentInHour = appointments.find(appointment =>
        getHours(appointment.date) === hour,
      )

      return {
        hour,
        available: !hasAppointmentInHour
      }
    });

    return availability;
  }

}
