
export function routes($state:ng.ui.IStateProvider, $route:any) {


    $state
        .state('index', {
            url: '/',
            views: {
                'header': {
                    template: "<p><center>Hello, please <br />Continue to <a ui-sref=\"index.hotels\">Hotels list page</a></center></p>"
                },
                '': {
                    template: ''
                },
                'footer': {
                    template: ""
                },
                'aside': {
                    template: ""
                }
            }
        });

    $route.otherwise('/');
}

routes.$inject = [
    "$stateProvider",
    "$routeProvider"
];