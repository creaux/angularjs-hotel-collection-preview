require.config({
    paths: {
        angular: "../../vendor/angular/angular",
        ngMocks: '../../vendor/angular-mocks/angular-mocks',
        text: '../vendor/requirejs-plugins/lib/text',
        json: '../vendor/requirejs-plugins/src/json'
    },
    shim: {
        angular: { exports: "angular" },
        ngMocks: { exports: "ngMocks", deps: [ "angular" ] }
    }
});

define(['mock.hotels/mock'], () => {
    console.log("Module mock.hotel is loaded properly.")
});
