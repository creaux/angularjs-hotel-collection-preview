require.config({
    paths: {
        angular: "../vendor/angular/angular",
        ngResource: "../vendor/angular-resource/angular-resource"
    },
    shim: {
        angular: { exports: "angular" },
        ngResource: { exports: "ngResource" }
    }
});

define([
    'exports',
    './interfaces',
    'rest.hotels/app',
], (
    exports:any,
    interfaces:any
) => {
    console.log("Module hotel is loaded properly.");

    exports.interfaces = interfaces;
});
