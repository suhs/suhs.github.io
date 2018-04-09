angular.module('BookLibrary')
    .service('LibraryDataService', function ($http) {
        var DATA_URL = "http://www.json-generator.com/api/json/get/cpjecAwqhu?indent=2";
        
        this.getLibraryData = function () {
            return $http({
                method : "GET",
                url : DATA_URL
            });
        };

        this.getLibraryCategories = function (libraryData) {
            var dupCategories = [];
            for (var i = 0; i < libraryData.length; i++) {
                if (libraryData[i].hasOwnProperty('category')) {
                    dupCategories.push(libraryData[i]['category']);
                }
            }

            return dupCategories.filter(function(x, i) {
                return dupCategories.indexOf(x) === i
              });
        };
        
    });