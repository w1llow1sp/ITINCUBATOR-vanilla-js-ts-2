import {CityType, GovermentBuildingType} from '../02-objects/02_02';

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}
export  function getBuildingsWithStaffCountGreaterThen(buldings:Array<GovermentBuildingType>,count:number) {
    return buldings.filter(b =>  b.staffCount > count)
}