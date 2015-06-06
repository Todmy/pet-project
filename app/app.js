/**
 * Created by Todmy on 06.06.2015.
 */

angular.module('app')
.config(function ($routeProvider, ROUTES) {
    $routeProvider
      .when(ROUTES.default, {
        templateUrl: '/app/components/users/html/list.html',
        controller: 'listController',
        controllerAs: 'list'
      })
      .when(ROUTES.edit.user, {
        templateUrl: '/app/components/users/html/user-edit.html',
        controller: 'userEditController',
        controllerAs: 'user-edit'
      })
      .when(ROUTES.newUser, {
        templateUrl: '/app/components/users/html/user-create.html',
        controller: 'userCreateController',
        controllerAs: 'user-create'
      })
      .when(ROUTES.view.user, {
        templateUrl: '/app/components/users/html/user-view.html',
        controller: 'userViewController',
        controllerAs: 'user-view'
      })
      .otherwise({
        redirectTo: '/'
      })
  });