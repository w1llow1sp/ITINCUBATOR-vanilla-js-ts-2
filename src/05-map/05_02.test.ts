import {CityType} from '../02-objects/02_02';
import {createMessages, getHousesOnTheStreets, getStreetTitlesOfGovermentsBuildings} from './05_02';
let city: CityType

beforeEach(()=>{
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

    let streets = getHousesOnTheStreets(city.houses)
    expect(streets.length).toBe(3)
    expect(city.houses[0]).toBe('White street')
    expect(city.houses[1]).toBe('Happy street')
    expect(city.houses[2]).toBe('Happy street')
})

test.skip('create greeting messages for streets', () => {

    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from White street')
})