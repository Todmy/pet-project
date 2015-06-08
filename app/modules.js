/**
 * Created by Todmy on 06.06.2015.
 */
'use strict';

angular.module('app', ['ngRoute', 'app.config', 'app.users']);
angular.module('app.config', []);
angular.module('app.users', ['app.services']);
angular.module('app.services', ['app.config', 'ngResource']);
