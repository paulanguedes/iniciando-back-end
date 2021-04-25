import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { inject, injectable } from 'tsyringe';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string,
  day: number;
  month: number;
  year: number;
};

@injectable()
export default class ListProvidersAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) { };

  public async execute({
    provider_id,
    day,
    month,
    year
  }: IRequest): Promise<Appointment[]> {
    const cacheData = await this.cacheProvider.recover('teste de cache');

    console.log(cacheData);

    const appointments = await this.appointmentsRepository.findAllInDayFromProvider({
      provider_id,
      day,
      month,
      year
    });

    // await this.cacheProvider.save('teste de cache', '1')

    return appointments;
  }

}
