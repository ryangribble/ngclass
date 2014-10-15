﻿(function(module) {


    var movieService = function($http, $log) {

        var rootUrl = "/api/movies/";

        var unwrapResponse = function(response) {
            return response.data;
        };

        var getAllMovies = function () {
            
            return $http.get(rootUrl)
                        .then(unwrapResponse);

        };

        var getMovieById = function(id) {
            return $http.get(rootUrl + id)
                        .then(unwrapResponse);
        };

   
        var saveMovie = function(movie) {
            return $http.put(rootUrl, movie)
                        .then(unwrapResponse);

        };

        return {
            getAllMovies: getAllMovies,
            getMovieById: getMovieById,
            saveMovie: saveMovie
        };
    };

    module.factory("movieService", movieService);

}(angular.module("common")));
