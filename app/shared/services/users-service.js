/**
 * Created by Todmy on 07.06.2015.
 */

angular.module('app.services')
  .factory('usersService', function (SERVER_CONFIG, $resource) {
    return $resource(SERVER_CONFIG.url + '/users/:id', {id: '@id'}, {
      'create': {method: 'POST', params: {id: undefined}},
      'update': {method: 'PUT'}
    })
  });