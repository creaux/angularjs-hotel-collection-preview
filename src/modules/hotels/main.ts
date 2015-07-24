require.config({
    paths: {
        angular: "../vendor/angular/angular",
        ngUiRouter: "../vendor/ui-router/release/angular-ui-router",
        ngInfiniteScroll: "../vendor/ngInfiniteScroll/build/ng-infinite-scroll",
        ngStrap: "../vendor/angular-strap/dist/angular-strap"
    },
    shim: {
        angular: { exports: "angular" },
        ngUiRouter: { exports: "ngUiRouter", deps: [ "angular" ] },
        ngInfiniteScroll: { exports: "ngInfiniteScroll", deps: [ "angular" ] },
        ngStrap: { exports: "ngStrap", deps: [ "angular" ] }
    },
    packages: [
        "rest.hotels"
    ]
});

define(['hotels/app'], () => {
    console.log("Module hotel is loaded properly.")
});
