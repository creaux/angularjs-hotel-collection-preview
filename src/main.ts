/// <reference path="../typings/tsd.d.ts" />

require.config({
    baseUrl: '/modules',
    packages: ['bootstrap']
});

require(["bootstrap"]);
