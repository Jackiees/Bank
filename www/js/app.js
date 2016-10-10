// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

.run(function($ionicPlatform, $cordovaTouchID,$window) {
  $ionicPlatform.ready(function() {

    $cordovaTouchID.checkSupport().then(function() {
            $cordovaTouchID.authenticate("You must authenticate").then(function() {
                // alert("The authentication was successful");
                $window.location.href = '#/app/search';
            }, function(error) {
                console.log(JSON.stringify(error));
            });
        }, function(error) {
          console.log(JSON.stringify(error));
        });

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'GameCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: "Af&BijCtrl"
        }
      }
    })
    .state('app.codescreen', {
      url: '/codescreen',
      views: {
        'menuContent': {
          templateUrl: 'templates/codescreen.html',
          controller: 'CodescreenCtrl'
        }
      }
    })

    .state('app.berichten', {
      url: '/berichten',
      views: {
        'menuContent': {
          templateUrl: 'templates/berichten.html'
        }
      }
    })

    .state('app.service', {
      url: '/service',
      views: {
        'menuContent': {
          templateUrl: 'templates/service.html'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/codescreen');
});
