import { inject, injectable } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string,
  month: number;
  year: number;
};

type IResponse = Array<{
  day: number;
  available: boolean
}>

@injectable()
export default class ListProvidersMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) { };

  public async execute({ provider_id, month, year }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider({
      provider_id: provider_id,
      year,
      month
    });
    console.log(appointments);

    return [{ day: 1, available: false }];
  }

}
