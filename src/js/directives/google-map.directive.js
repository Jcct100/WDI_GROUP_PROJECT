angular
  .module('outApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {  center: '=' },
    link(scope, element) {
      new $window.google.maps.Map(element[0], {
        zoom: 7,
        center: scope.center
      });
    }
  };
}
