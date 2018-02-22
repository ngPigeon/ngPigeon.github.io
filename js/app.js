var app = angular.module("ngPigeon", []);

app.controller("pigeon-table", function ($scope) {
   $scope.docs = [
       {version: "Latest (v1.1)", url: "/pigeon-table"},
       {version: "v1.0.1", url: "/docs/pigeon-table/v1.0.1"},
       {version: "v1.0", url: "/docs/pigeon-table/v1.0"},
   ];
});
