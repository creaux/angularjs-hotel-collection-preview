/// <amd-dependency path="ngUiRouter" />
/// <amd-dependency path="ngRoute" />
/// <amd-dependency path="mock" />
/// <amd-dependency path="hotels" />

import angular = require('angular');
import { routes } from './config/routes';
import { location } from './config/location';

angular.module("bootstrap", [
    "ui.router",
    "ngRoute",
    "mock",
    "hotels"
])
.config(routes)
.config(location);

angular.bootstrap(document, ['bootstrap']);
