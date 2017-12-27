(function(){
    angular.module("header")
    .config(function(){
        console.log("I am header config method...");
    })
    .run(function(){
        console.log("I am header module run method...");
    })
})();