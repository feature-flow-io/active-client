import Model, { attr } from '@ember-data/model';

export default class SignupModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
}
