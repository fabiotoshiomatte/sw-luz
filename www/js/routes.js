angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.sWLuz', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sWLuz.html',
        controller: 'sWLuzCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.loginSWLuz', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/loginSWLuz.html',
        controller: 'loginSWLuzCtrl'
      }
    }
  })

  .state('menu.solicitaODeServiOSWLuz', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitaODeServiOSWLuz.html',
        controller: 'solicitaODeServiOSWLuzCtrl'
      }
    }
  })

  .state('menu.pedido', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedido.html',
        controller: 'pedidoCtrl'
      }
    }
  })

  .state('menu.ordemDeServiOSWLuz', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ordemDeServiOSWLuz.html',
        controller: 'ordemDeServiOSWLuzCtrl'
      }
    }
  })

  .state('menu.serviO', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviO.html',
        controller: 'serviOCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.sobre', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

  .state('menu.configuraO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraO.html',
        controller: 'configuraOCtrl'
      }
    }
  })

  .state('menu.pedidosAbertos', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidosAbertos.html',
        controller: 'pedidosAbertosCtrl'
      }
    }
  })

  .state('menu.pedidosConcluidos', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidosConcluidos.html',
        controller: 'pedidosConcluidosCtrl'
      }
    }
  })

  .state('menu.editarEquipes', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editarEquipes.html',
        controller: 'editarEquipesCtrl'
      }
    }
  })

  .state('menu.editarMateriais', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editarMateriais.html',
        controller: 'editarMateriaisCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});