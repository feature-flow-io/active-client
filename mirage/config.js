export default function () {
  this.namespace = 'v1';

  this.get('/accounts/:id', function (schema, request) {
    const id = request.params.id;

    return schema.accounts.find(id);
  });
}
