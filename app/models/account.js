import Model, { attr, belongsTo } from '@ember-data/model';

export default class AccountModel extends Model {
  @attr('string') name;
  @attr('string') subdomain;
  @attr('string') cname;
  @attr('date') updatedAt;
  @attr('date') createdAt;

  @belongsTo('user', { inverse: null }) creator;
}
