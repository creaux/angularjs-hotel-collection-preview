require.config({
    paths: {
        angular: "../vendor/angular/angular",
        ngMocks: '../../vendor/angular-mocks/angular-mocks',
    },
    shim: {
        angular: { exports: "angular" },
        ngMocks: { exports: "ngMocks", deps: [ "angular" ] }
    },
    packages: [
        'mock.hotels'
    ]
});

define(['mock/app'], () => {
    console.log("Module mock is loaded properly.")
});
