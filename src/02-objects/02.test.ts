import {CityType} from "./02_02";

let city : CityType;


beforeEach(()=> {
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

//01.создайте тип CityType
//02.заполните обьект city,чтобы тексты ниже прошли
test('test city should contains 3 houses', () => {
    //actions
    const result1=city.houses.length
    //expected result
    expect(result1).toBe(3)

})

//01.дополните тип GovermentBuldingType2
//02.заполните обьект city,чтобы тексты ниже прошли
 test('test city should contains hospital and fire station', () => {
     //action

     //если метод 04-filter не найдет в массиве обьект с именем -- вернет undefind.
     //если найдет -- вернет {...}
     const result1 = city.govermentBuildings.filter(item => {
        return item.type === 'FIRE-STATION'
     })

     const result2 = city.govermentBuildings.filter(item => {
         return item.type === 'HOSPITAL'
     })


     //expected result
     expect(typeof result1).toBe('object')
     expect(typeof result2).toBe('object')
     //expect(result2).toBe(true)
 })