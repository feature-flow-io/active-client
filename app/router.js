import EmberRouter from '@ember/routing/router';
import config from 'active-client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('signup');
  this.route('login');

  this.route('accounts', function () {
    this.route('new');
    this.route('account', { path: ':account_id' }, function () {
      this.route('settings', function () {
        this.route('domain');
        this.route('collaborators');
      });
    });
  });
});
