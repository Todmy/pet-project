/**
 * Created by Todmy on 07.06.2015.
 */

angular.module('app.services')
  .factory('userService', function (SERVER_CONFIG, $resource) {
    return $resource(SERVER_CONFIG.url, {id: '@id'}, {
      'create': {method: 'POST'},
      'update': {method: 'PUT'}
    })
  });