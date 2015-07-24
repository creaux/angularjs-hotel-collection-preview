require.config({
    paths: {
        angular: "../vendor/angular/angular",
        ngUiRouter: "../vendor/ui-router/release/angular-ui-router",
        ngRoute: "../vendor/angular-route/angular-route",
        css: "../vendor/require-css/css"
    },
    shim: {
        angular: { exports: "angular" },
        ngUiRouter: { exports: "ngUiRouter", deps: [ 'angular' ] },
        ngRoute: { exports: "ngRoute", deps: [ 'angular' ] }
    },
    packages: [
        'mock',
        'hotels',
        'twitterbs'
    ],
    deps: [
        'twitterbs'
    ]
});

define(['bootstrap/app'], () => {
    console.log("Module main is loaded properly.")
});

