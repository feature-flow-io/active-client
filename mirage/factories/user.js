import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'John Doe',
  email(i) {
    return `johndoe@example${i}.com`;
  },
  password: 'secret_password',
  token(i) {
    return `secret_token${i}`;
  },
});
