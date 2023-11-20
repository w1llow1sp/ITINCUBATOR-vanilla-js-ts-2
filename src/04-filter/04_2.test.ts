import {CityType} from '../02-objects/02_02';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './04_2';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                id: 2,
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                id: 3,
                buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            },
        ],
        govermentBuildings: [
            {
                type: 'HOSPITAL',
                address: {street: {title: 'Central Str'}, number: 12},
                budget: 200000, staffCount: 200
            },
            {
                type: 'FIRE-STATION',
                address: {street: {title: 'South Str'}, number: 12},
                budget: 500000, staffCount: 1000
            }
        ],
        citizensNumber:100000
    }
})


// 01.Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. создайте в том же файле еще одну функцию, чтобы тесты прошли
test.skip('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city,"Happy street")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

/*
// 01.Создайте в том же файле еще одну функцию, чтобы тесты прошли
test.skip('list of streets titles of goverments buildings', () => {
    let streets = getStreetTitlesOfGovermentsBuildings(
        city.govermentBuildings
    )

    expect(streets.length).toBe(2)
    expect(city.houses[0]).toBe('Central Str')
    expect(city.houses[1]).toBe('South Str')
})

// 01.Создайте в том же файле еще одну функцию, чтобы тесты прошли
test.skip('list of streets titles of houses', () => {
    let  happyHouses = getHousesOnTheStreets(city.houses,"Happy street")
    let  whiteHouses = getHousesOnTheStreets(city.houses,'White street')

    expect(streets.length).toBe(2)
    expect(city.houses[0]).toBe('Central Str')
    expect(city.houses[1]).toBe('South Str')
})*/
// 01.Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('buildings with correct staff count', () => {
    let  buildings = getBuildingsWithStaffCountGreaterThen(city.govermentBuildings,500)


    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})
