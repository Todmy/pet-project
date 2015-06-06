/**
 * Created by Todmy on 07.06.2015.
 */

angular.module('app.config')
  .constant('ROUTES', {
    'default': '/',
    'edit': {
      'user': '/edit/:id'
    },
    'newUser': '/new',
    'view': {
      'user': '/view/:id'
    }
  });