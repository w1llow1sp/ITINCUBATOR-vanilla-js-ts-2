import {CityType} from "../02-objects/02_02";
import { isContainGovermentBuildingName, isContainsSomeHouses} from "./03";


let city:CityType


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

//01.создайте в отдельном файле функцию, чтобы тесты прошли
test('test city should contains 3 houses', () => {
    //actions
    let result1 = isContainsSomeHouses(city,3)
    //expected result
    expect(result1).toBe(true)

})

//02.Напишите функцию, чтобы тесты прошли
 test('test city should contains hospital and fire station', () => {
     //action

     //если метод 04-filter не найдет в массиве обьект с именем -- вернет undefind.
     //если найдет -- вернет {...}
     let result1 = isContainGovermentBuildingName(city,'hospital')

     let result2 = isContainGovermentBuildingName(city,'fire station')


     //expected result
     expect(result1).toBe(true)
     expect(result2).toBe(true)
     //expect(result2).toBe(true)
 })

//4.Напишите функцию, которая будет удоволетворять тесту
//test('Budget should be changed', ()=> {
//    let result1= BudgetChanger(city,5000,'schoool')

//   expect( result1).toBe('array')
//} )

//5.Написать функцию, которая будет удалять stuff

//test('Some test',()=> {
//    let result1 = HouseRepairing(city,1)
//    expect(result1).toBe('hello')
//})