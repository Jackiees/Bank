angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CodescreenCtrl', function($scope,$state,$window,$timeout) {

  $scope.input_code = [];
  $scope.input_field = false;

  $scope.open_input_field = function () {
    $scope.input_field = !$scope.input_field;
  }

  $scope.input = function(number) {
    if ($scope.input_code.length < 6) {
      $scope.input_code.push(number);
    }
  };

  $scope.$watchCollection('input_code', function() {
    if ($scope.input_code.length === 6) {
      // $state.go('app.search');
      // href="#/app/search"

      setTimeout(function () {
        $window.location.href = '#/app/search';
        $scope.input_code = [];
        setTimeout(function () {
          $scope.input_field = false;
        }, 500);
      }, 400);

    }
  });

  $scope.delete = function() {
    $scope.input_code.splice(($scope.input_code.length-1),1);
  }

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.data = {
    "accounts": [
      {
        "name": "Hr C.H. Lam",
        "number": "NL29 INGB 0384 2067 98",
        "amount": "4.358",
        "cents": "76",
        "open": false
      }
    ]
  };
})

.controller('Af&BijCtrl', function($scope,$timeout) {

  $scope.open = function (index) {
    $scope.data.boekingen[index].open = !$scope.data.boekingen[index].open;
  }

  $scope.loadMore = function() {

      setTimeout(function () {
        $scope.data.boekingen.push(
          {"name": "1 Testpush","amount": "-70","cents": "34","date": "26 oktober","open": false,"tegenrekening": "NL 42 INGB 0123 4567 80",
          "mutatiesoort": "Incasso"},
          {"name": "2 Testpush","amount": "-70","cents": "34","date": "26 oktober","open": false,"tegenrekening": "NL 42 INGB 0123 4567 80",
          "mutatiesoort": "Incasso"}
        );

        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, 3000);
   };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });

  $scope.data = {
    "accounts": [
      {"name": "Hr C.H. Lam","number": "NL29 INGB 0384 2067 98","amount": "4.358","cents": "76","open": false}
    ],
    "boekingen": [
      {"name": "4 Energiebedrijf","amount": "-70","cents": "34","date": "26 oktober","open": false,"tegenrekening": "NL 42 INGB 0123 4567 80",
      "mutatiesoort": "Incasso"},
      {"name": "5 Energiebedrijf","amount": "-70","cents": "34","date": "26 oktober","open": false,"tegenrekening": "NL 42 INGB 0123 4567 80",
      "mutatiesoort": "Incasso"},
      {"name": "6 Energiebedrijf","amount": "-70","cents": "34","date": "26 oktober","open": false,"tegenrekening": "NL 42 INGB 0123 4567 80",
      "mutatiesoort": "Incasso"},
      {"name": "7 Energiebedrijf","amount": "-70","cents": "34","date": "26 oktober","open": false,"tegenrekening": "NL 42 INGB 0123 4567 80",
      "mutatiesoort": "Incasso"},
      {"name": "8 Energiebedrijf","amount": "-70","cents": "34","date": "26 oktober","open": false,"tegenrekening": "NL 42 INGB 0123 4567 80",
      "mutatiesoort": "Incasso"},
      {
        "name": "9 T-Mobile",
        "amount": "-49",
        "cents": "50",
        "date": "22 oktober",
        "open": false,
        "tegenrekening": "NL 42 INGB 0123 4567 80",
        "mutatiesoort": "Incasso"
      },
      {
        "name": "10 Waterschapsbelastingen",
        "amount": "-112",
        "cents": "11",
        "date": "21 oktober",
        "open": false,
        "tegenrekening": "NL 42 INGB 0123 4567 80",
        "mutatiesoort": "Incasso"
      }
    ]
  };
})

.controller('GameCtrl', function($scope, $stateParams, $state) {

  $scope.data = {
    "accounts": [
      {
        "name": "Hr C.H. Lam",
        "number": "NL29 INGB 0384 2067 98",
        "amount": "4.358",
        "cents": "76",
        "open": false
      },
      {
        "name": "Hr C.H Lam en/of Hr C.Y. Lam",
        "number": "NL29 INGB 0798 3740 11",
        "amount": "8.198",
        "cents": "43",
        "open": false
      }
    ],
    "savings": [
      {
        "name": "Vakantiesparen",
        "number": "NL29 INGB 0287 1823 65",
        "amount": "51.276",
        "cents": "22",
        "open": false
      }
    ],
    "creditcards": [
      {
        "card": "Creditcard",
        "number": "3987 **** **** 8764",
        "name": "HR C.H. LAM"
      }
    ]
  };

  $scope.open = function (index,kind) {

    if (kind === 1) {
      $scope.data.accounts[index].open = !$scope.data.accounts[index].open;
    } else if (kind === 2) {
      $scope.data.savings[index].open = !$scope.data.savings[index].open;
    }

    // for (var i = 0; i < $scope.data.accounts.length; i++) {
    //   $scope.data.accounts[i].open = false;
    // }
  }

  $scope.afenbij = function () {
    $state.go('app.browse');
  }

  $scope.overschrijven = function () {
    $state.go('app.single');
  }

  // console.log($scope.data);
  // $scope.openOpties = function(index) {
  //   if (index === 1) {
  //     $scope.open1 = !$scope.open1;
  //   } else if (index === 2) {
  //     $scope.open2 = !$scope.open2;
  //   }
  // };
});
