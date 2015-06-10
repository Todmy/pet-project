/**
 * Created by Todmy on 06.06.2015.
 */

angular.module('app.users')
  .controller('userEditController', UserEditController);

function UserEditController (usersRepository, ROUTES, $location, $routeParams) {
  this.usersRepository = usersRepository;
  this.location = $location;
  this.ROUTES = ROUTES;
  this.routeParams = $routeParams;
  this.user = {};

  this.initModel();
}

UserEditController.prototype.initModel = function () {
  this.getUser();
};

UserEditController.prototype.getUser = function () {
  var self = this;
  this.usersRepository.user(this.routeParams.id).then(function (response) {
    self.user = response;
  });
};

UserEditController.prototype.update = function () {
  var self = this;
  this.usersRepository.update(this.user).then(function () {
    self.location.path(self.ROUTES.default)
  })
};