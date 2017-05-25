'use strict';

const angular = require('angular');

angular.module('ipsumApp', []);

angular.module('ipsumApp')
.controller('IpsumController', ['$log', IpsumController])
function IpsumController($log){
  this.$onInit = () => {
    this.content = 'lulwat hello world';
  };
};
