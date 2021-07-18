import { Factory, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'My company',
  subdomain(i) {
    return `example-subdomain${i}`;
  },
  cname(i) {
    return `example.subdomain${i}.com`;
  },
  status: 'active',
  user: belongsTo('creator', { inverse: null }),
});
