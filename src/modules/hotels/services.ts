
export class Hotel {

    public static $inject = [ "$filter" ];

    collection: [any];

    query: [any];

    _limit = 20;

    public set limit(value) {
        this._limit += value;
    }

    public get limit() {
        return this._limit;
    }

    _orders = {
        Name: true
    };

    public get orders() {
        return this._orders;
    }

    method = 'orderBy';

    ratingTitles = [
        'Magnificient',
        'Excellent',
        'Great',
        'Very Good',
        'Good',
        'Above Average',
        'Spectacular',
        'Exceptional',
        'Unrated'
    ];

    searchOptions = [
        {
            title: 'By Name',
            id: 'Name'
        },
        {
            title: 'By Stars',
            id: 'Stars'
        },
        {
            title: 'By Cost',
            id: 'MinCost'
        },
        {
            title: 'By Top Rating',
            id: 'UserRatingTitle'
        },
        {
            title: 'By User Rating',
            id: 'UserRating'
        }
    ];

    searchInput:any = null;

    constructor(
        private $filter:ng.IFilterService
    ) {

    }

    private reverse(ordener:string):boolean {
        return this._orders[ordener] = this._orders[ordener] === false;
    }

    public reset() {
        this.query = this.collection;
    }

    public orderBy(filter:string) {
        var method = 'orderBy',
            reverse = this.reverse(filter),
            collection = this.query;

        this.query = this.$filter(method)(collection, filter, reverse);
    }

    public filter(value:string[]) {

        var filter = {};
        filter[value[0]] = value[1];

        var method = 'filter',
            collection = this.collection;

        this.query = this.$filter(method)(collection, filter);
    }

    public greaterThan(value:string) {

        var filter = function(prop, val){
            return function(item){
                return item[prop] > val;
            }
        };

        var method = 'filter',
            collection = this.collection;

        this.query = this.$filter(method)(collection, filter(value[0], value[1]));
    }
}