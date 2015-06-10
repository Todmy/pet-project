/**
 * Created by Todmy on 07.06.2015.
 */

angular.module('app.users')
  .controller('userCreateController', UserCreateController);

function UserCreateController (usersRepository, ROUTES, $location) {
  this.usersRepository = usersRepository;
  this.location = $location;
  this.ROUTES = ROUTES;
  this.user = {};
}

UserCreateController.prototype.create = function () {
  var self = this;
  this.usersRepository.create(this.user).then(function () {
    self.location.path(self.ROUTES.default)
  })
};