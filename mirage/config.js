export default function () {
  this.namespace = 'v1';

  // sessions
  this.post('/sessions', function (schema) {
    const attrs = this.normalizedRequestAttrs();

    return schema.sessions.create(attrs);
  });

  // accounts
  this.post('/accounts', function (schema) {
    const attrs = this.normalizedRequestAttrs();

    return schema.accounts.create(attrs);
  });

  this.get('/accounts/:id', function (schema, request) {
    const id = request.params.id;

    return schema.accounts.find(id);
  });

  this.patch('/accounts/:id', function (schema, request) {
    const id = request.params.id;
    const attrs = this.normalizedRequestAttrs();

    return schema.accounts.find(id).update(attrs);
  });
}
