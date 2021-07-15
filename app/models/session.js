import Model, { attr } from '@ember-data/model';

export default class SessionModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
  @attr('string') token;
}
