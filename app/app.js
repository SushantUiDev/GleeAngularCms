(function(){
    angular.module("myApp",["header"]);
    
    angular.module("myApp")
    .config(function(){
        console.log("I am myApp module config method...");
    })
    .run(function(){
        console.log("I am myApp module run method...");
    })
})();