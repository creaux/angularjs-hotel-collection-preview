///<amd-dependency path="ngResource"/>

import angular = require('angular');
import { HotelRESTFactory as HotelREST } from './services';

angular.module('rest.hotels', [
    "ngResource"
])
.factory("HotelREST", HotelREST);