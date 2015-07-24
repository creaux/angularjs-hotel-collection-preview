export interface IHotel extends ng.resource.IResource<IHotel> {
    // This is general interface
    // Notice can represent whatever json object
    // but usually is designed for news and others
}

export interface IHotelResource extends ng.resource.IResourceClass<IHotel> {

}
