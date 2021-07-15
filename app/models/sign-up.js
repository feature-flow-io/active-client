import Model, { attr } from '@ember-data/model';

export default class SignUpModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
}
