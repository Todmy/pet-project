/**
 * Created by Todmy on 06.06.2015.
 */

angular.module('app.users')
  .controller('listController', ListController);

function ListController (usersRepository, ROUTES, $location) {
  this.usersRepository = usersRepository;
  this.location = $location;
  this.ROUTES = ROUTES;

  this.initModel();
}

ListController.prototype.initModel = function () {
  this.getUsers();
};

ListController.prototype.getUsers = function () {
  var self = this;
  this.usersRepository.users().then(function (response) {
    self.users = response;
  });
};

ListController.prototype.removeUser = function (userId) {
  this.usersRepository.remove(userId)
};

ListController.prototype.editUser = function (userId) {
  this.location.path(this.ROUTES.edit.user.replace(':id', userId))
};

ListController.prototype.viewUser = function (userId) {
  return '#' + this.ROUTES.view.user.replace(':id', userId)
};