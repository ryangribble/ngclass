﻿(function () {
    var module = angular.module("atTheMovies");

    var ListController = function (movieData, $log) {
        var model = this;

        $log.info("ListCOntroller starting!");

        function onMovies(movies) {
            model.movies = movies;
        }

        function onError(response) {
            model.errorMessage = response.data.message;
        }

        movieData.getAll()
            .then(onMovies, onError);

        model.rateMovie = function (movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 2
            }
        }

        model.decreaseRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            } else {
                movie.rating = 5;
            }
        }
        model.increaseRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            } else {
                movie.rating = 1;
            }
        };

    };

    module.controller("ListController",  ["movieData", "$log", ListController]);


}());