/**
 * Created by Todmy on 06.06.2015.
 */

angular.module('app.users')
  .controller('listController', function ($scope, userService) {
    console.log(userService.get());
  });