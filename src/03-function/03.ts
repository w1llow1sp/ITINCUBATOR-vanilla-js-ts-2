import {student, studentType} from "../02-objects/02";
import {CityType,} from "../02-objects/02_02";



export const sum = (a:number,b:number) => {
    return a+b
}
export const addSkill =(student : studentType, skill:string,) => {
    student.steck.push(
        {
            id: student.steck.length+1,
            title: skill,
            knowlegePersent:Math.floor(Math.random() * (100-0))+0
        })
}
export  const makeStudentActive =( student:studentType) => {
    student.isActive=true;
}

export const isStudentCountry =( student:studentType, city:string) => {
    return student.address.city.title === city
}

export const isContainsSomeHouses =(city:CityType,num:number) => {
    let result = city.houses.length;
    return result === num ? true : false
}

export const isContainGovermentBuildingName = (city:CityType, buildingName:string ) => {
    let result = city.govermentBuildings.filter(building => {
         building.type === buildingName
    })
  return  typeof result === 'object'
        ? true
        : false
}

// export  const BudgetChanger = (city:CityType,newBudget:number, buldingName:string) => {
//    return city.govermentBuildings.values(findByTitle(buldingName).)
// }


//export const HouseRepairing = (city:CityType,houseId:number)=>{
// let legasyObj = city.houses[houseId -1].repaired.
//  let legasyObj = city.defineProperty(city,city.houses[houseId-1].repaired,true)

//    let newObj = city.houses[houseId -1].repaired[d]
//    return legasyObj
//}