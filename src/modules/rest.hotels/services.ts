import { IHotelResource } from './interfaces';

/**
 * This factory returns Resource object that represents Notices
 * You can run on this resource methods get, save, query, remove and delete
 * @returns {IHotelResource}
 */
export function HotelRESTFactory($resource: ng.resource.IResourceService) {

    return <IHotelResource> $resource('/hotels');

}

HotelRESTFactory.$inject = [ "$resource" ];
