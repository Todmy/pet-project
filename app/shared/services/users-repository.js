/**
 * Created by Todmy on 09.06.2015.
 */

angular.module('app.services')
.factory('usersRepository', function (usersService) {
    return {
      users: function () {
        return usersService.query().$promise;
      },
      user: function (userId) {
        return usersService.get({id: userId}).$promise;
      },
      update: function (user) {
        var userForUpdate = new usersService(user);
        return userForUpdate.$update();
      },
      create: function (user) {
        var userForUpdate = new usersService(user);
        return userForUpdate.$create();
      },
      remove: function (userId) {
        return usersService.remove({id: userId}).$promise;
      }
    }
  });