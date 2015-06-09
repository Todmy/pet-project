/**
 * Created by Todmy on 06.06.2015.
 */

angular.module('app.users')
  .controller('listController', ListController);

function ListController ($scope, usersRepository) {
  this.scope = $scope;
  this.usersRepository = usersRepository;

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
  this.usersRepository.remove(10).then(function (response) {
    self.user = response;
  });
//  this.usersRepository.create({
//    "id": 10,
//      "username": "hulk-mahalk",
//      "status": "offline"
//  });
};