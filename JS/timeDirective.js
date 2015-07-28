app.directive('showTime', function(){
  return{
    restrict: 'E',
    template: '<div>the current time is {{ time }}</div>',
    link : function(scope, element, attribute){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }
});
