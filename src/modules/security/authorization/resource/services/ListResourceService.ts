import AppError from '../../../../../middleware/AppError';
import knex from '../../../../../database/connection';
import Resource from '../model/Resource';

export default class ListResourceService {
  public async execute(): Promise<Resource[]> {
    const resources: Resource[] = await knex('resources').select('*');

    if (resources.length < 1) throw new AppError('Resources not found.');

    return resources;
  }
}
