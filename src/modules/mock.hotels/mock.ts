/// <amd-dependency path="ngMocks" />

import angular = require('angular');
import hotelsResponse = require('json!mock.hotels/hotels.json');

angular.module("mock.hotels", [ "ngMockE2E" ])
.run(($httpBackend: ng.IHttpBackendService) => {

        $httpBackend.whenGET(/hotels$/).respond(
            (method:any, url:any, data:any) => {
                console.log('/hotels returns data.');
                return [
                    200,
                    hotelsResponse
                ];
            }
        );

});