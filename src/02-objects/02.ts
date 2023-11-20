type steckType = {
    id:number
    title: string
    knowlegePersent: number

}

type cityType ={
    title: string
    countryName:string
}

type adressType ={
    streetTitle:string
    city:cityType
}

 export type studentType ={
    id:number
    name: string
    age: number
    isActive: boolean
    address: adressType
    steck : Array<steckType>
}



export const student:studentType = {
    id:1,
    name:'Sometext',
    age:23,
    isActive:true,
    address: {
        streetTitle: 'Mayakovskogo',
        city : {
            title: 'Chelyabinsk',
            countryName:'Russia'
        }
    },
    steck : [
        {
            id:1,
            title: "HTML",
            knowlegePersent:92

        },
        {
            id:2,
            title: "CSS",
            knowlegePersent:81

        },
        {
            id:3,
            title: "JavaScript",
            knowlegePersent:60

        },
        {
            id:4,
            title: "React",
            knowlegePersent:30

        }
    ]
}