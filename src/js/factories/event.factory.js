angular
  .module('outApp')
  .factory('Event', Event);

Event.$inject = [
  'API',
  '$resource'
];

function Event(
  API,
  $resource
){
  return $resource(`${API}/events/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}