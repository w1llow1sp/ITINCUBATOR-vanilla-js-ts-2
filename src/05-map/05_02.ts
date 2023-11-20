import {AddressType, GovermentBuildingType, HouseType} from '../02-objects/02_02';

export const getStreetTitlesOfGovermentsBuildings = (buildings:Array<GovermentBuildingType>) =>{
   return  buildings.map(bul => bul.address.street.title)
}

export const  getHousesOnTheStreets = (street:Array<HouseType>) => {
    return street.map( st => st.address.street.title)
}

export const createMessages= (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}