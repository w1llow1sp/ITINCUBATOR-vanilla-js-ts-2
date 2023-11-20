export type lessonsType ={
    title:string
}
export type addressType ={
    street:streetType
}

export type streetType ={
    title:string
}

export type ManType ={
    name:string
    age:number
    lessons:Array<lessonsType>
    address: addressType
}
