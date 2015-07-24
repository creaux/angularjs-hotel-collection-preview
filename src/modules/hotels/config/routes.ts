
export function routes($state:ng.ui.IStateProvider) {
    $state.state("index.hotels", {
        url: "hotels",
        views: {
            "@": {
                templateUrl: "../views/collection.html",
                controller: 'HotelCtrl',
                controllerAs: 'hotel'
            }
        }
    });
}

routes.$inject = [ "$stateProvider" ];