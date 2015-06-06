/**
 * Created by Todmy on 06.06.2015.
 */

angular.module('app')
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/components/users/html/list.html',
        controller: 'listController',
        controllerAs: 'list'
      })
      .when('/user', {
        templateUrl: '/app/components/users/html/user.html',
        controller: 'userController',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      })
  });