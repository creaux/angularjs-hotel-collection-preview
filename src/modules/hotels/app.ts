/// <amd-dependency path="ngUiRouter" />
/// <amd-dependency path="ngInfiniteScroll" />
/// <amd-dependency path="rest.hotels" />
/// <amd-dependency path="ngStrap" />

import angular = require('angular');
import { routes } from './config/routes'
import { HotelCtrl } from './controllers';
import { Hotel } from './services';

angular.module("hotels", [
    'ui.router',
    'infinite-scroll',
    'rest.hotels',
    'mgcrea.ngStrap'
])
.controller('HotelCtrl', HotelCtrl)
.service('Hotel', Hotel)
.config(routes);