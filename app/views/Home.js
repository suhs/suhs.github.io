'use strict';

angular.module('BookLibrary')
    .controller('HomeCtrl', ['$scope','LibraryDataService','$http', function ($scope, LibraryDataService,$http) {
        $scope.states = {
            "ST_ERROR": 0,
            "ST_LOAD": 1,
            "ST_DISPLAY": 2,
        };

        $scope.state = $scope.states["ST_LOAD"];
        $scope.libraryData = [];
        $scope.categories = [];
        $scope.bookClass = "book";

        var today = new Date();

        var _SetState = function (newState) {
            $scope.state = $scope.states[newState];
        };

        $scope.IsState = function (state) {
            if ($scope.state == $scope.states[state]) {
                return true;
            }
            return false;
        };

        $scope.loadLibraryData = function() {
            
            LibraryDataService.getLibraryData().then(function(response) {
                $scope.libraryData = response.data;
                $scope.categories = LibraryDataService.getLibraryCategories($scope.libraryData);

                _SetState("ST_DISPLAY");
            })
            .catch(function(response) {
                _SetState("ST_ERROR");
            });
        };

        $scope.countBooks = function(category){
            var count = 0;
            for (var j = 0; j < $scope.libraryData.length; j++) {
                var currCat = $scope.libraryData[j]['category'];
                if(currCat === category){
                    count ++;
                }
            }
            return count;
        }

        $scope.getBooksByCat = function(category){
            var result = [];
            for (var j = 0; j < $scope.libraryData.length; j++) {
                var currCat = $scope.libraryData[j]['category'];
                if(currCat === category){
                    result.push($scope.libraryData[j]);
                }
            }
            return result;
        }

        $scope.getBookClass = function(dueDate){
            today.setHours(0,0,0,0);
            var due = new Date(dueDate);
            due.setHours(0,0,0,0);
            if(dueDate === null){
                $scope.bookClass = "book";
            } else if(today.getTime()===due.getTime()){
                $scope.bookClass = "book due";
            } else if(today.getTime()<due.getTime()){
                $scope.bookClass = "book safe";
            } else if(today.getTime()>due.getTime()){
                $scope.bookClass = "book overdue";
            } 

            return $scope.bookClass;
        }

        var _Init = function () {
            $scope.loadLibraryData();
        };
        _Init();
    }]);