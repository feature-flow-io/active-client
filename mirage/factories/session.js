import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  email(i) {
    return `john@example${i}.com`;
  },
  password: 'secret_password',
});
