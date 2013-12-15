/**
 *   Directive: clear-input
 *   Appends remove icon to clear inputs contents
 */
myApp.directive('clearInput', function ($compile) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var model = attrs.ngModel;
      var template = '<i class="fa fa-times-circle" ng-click="' + model + '= \'\'" ng-show=" ' + model + '.length > 0"></i>';

      element.after($compile(template)(scope));
    }
  };
});

