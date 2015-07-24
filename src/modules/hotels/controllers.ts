import rest = require("rest.hotels");

export class HotelCtrl {

    public static $inject = [
        "HotelREST",
        "Hotel",
        '$filter',
    ];

    public searchForm = {
        searchType: ''
    };

    public set limit(value) {
        this.container.limit = value;
    }

    public get limit() {
        return this.container.limit;
    }

    constructor(
        private REST: rest.interfaces.IHotelResource,
        private container:any,
        private $filter:any
    ) {
        this.REST.get((data:any) => {
            this.container.query = this.container.collection = data['Establishments'];
        });
    }

    /**
     * Order collection
     * @param value
     */
    public set order(value:string) {
        this.container.orderBy(value);
    }

    /**
     * Filter collection
     * @param filter
     */
    public set filter(filter:string[]) {

        switch(filter[0]) {
            case 'MinCost' || 'Stars' || 'UserRating':
                this.container.greaterThan(filter);
                break;
            default:
                this.container.filter(filter);
        }
    }

    /**
     * Get query result
     * @returns {}
     */
    public get query() {
        return this.container.query;
    }

    public get searchOptions() {
        return this.container.searchOptions;
    }

    public get ratingTitles() {
        return this.container.ratingTitles;
    }

    public currOrder(entity) {
        return this.container.orders[entity];
    }

    public makeRange(total) {
        var range = [];
        for(var i=0; i<total; i++) range.push(i);
        return range;
    }

    /**
     * Reset query to collection
     */
    public reset() {
        this.container.reset();
    }
}