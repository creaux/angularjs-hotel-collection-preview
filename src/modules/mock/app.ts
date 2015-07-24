// <amd-dependency path="ngMocks" />

/// <amd-dependency path="mock.hotels" />

import angular = require('angular');

angular.module("mock", [
    "mock.hotels",
    "ngMockE2E"
])
.run(($httpBackend:any)=>{
    $httpBackend.whenGET(/views\/.*/).passThrough();
});