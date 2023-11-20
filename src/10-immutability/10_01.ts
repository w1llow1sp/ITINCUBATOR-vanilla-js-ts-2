export type UserType ={
    name:string
    hair:number
    address:{city:string,house?:number}
}

export type LaptopType = {
    title:string
}

export type UserWhitLaptopType = UserType & {
    laptop:LaptopType
}

export type UserWhitBooksType = UserType & {
    books:Array<string>
}
export type CompanyType = {id:number, title:string}

export type WithCompanyType ={
    companies: Array<CompanyType>
}


export function moveUser(u:UserWhitLaptopType, city:string) {
    // мы создали поверхностую копию для обьекта
    // но объект внутри copy будет идентичен
    // обьекту user

    return {
        ...u,
        address : {
            ...u.address,
            city:city},
        laptop: {...u.laptop}
    }
/*    const copy ={
        ...u,
        address : {
            ...u.address,
            city:city}
    }*/
/*    copy.address = {...copy.address, city:city}*/

}

export function UpgradeUsersLaptop(u:UserWhitLaptopType, laptop:string) {
    return {
        ...u,
        laptop: {...u.laptop,title:laptop}
    }

}

export function moveUserToOtherHouse(u:UserWhitLaptopType & UserWhitBooksType , house:number) {
    return {
        ...u,
        address: {
            ...u.address,
            house:house
        }
    }

}

export function addNewBooksToUser(u:UserWhitLaptopType & UserWhitBooksType , books:string) {
    return {
        ...u,
        books: [
            ...u.books,books
        ]
    }

}

export const updateBook = (u:UserWhitLaptopType & UserWhitBooksType ,
                           newBook:string,
                           oldBook:string) =>({
    ...u,
    books: [
        ...u.books.map(b=>(b=== oldBook)? newBook :b)
    ]})

export const removeBook = (u:UserWhitLaptopType & UserWhitBooksType ,
                           bookToDelete:string) =>({
    ...u,
    books: [
        ...u.books.filter(b=>b !== bookToDelete)
    ]})

export const updateCompanyTitle=(
    u:UserWhitLaptopType & WithCompanyType,
    ID:number,
    TITLE:string) => ({
    ...u,
    companies: [
        ...u.companies.map(
            comp => comp.id===ID
                ? {...comp,title:TITLE}
                : comp)
    ]
})


export const updateCompanyTitle2=(
    companise:{[key:string]:Array<CompanyType>},
    userName:string,
    IDCompany:number,
    newTitle:string) => {

    let companyCopy={...companise}

    companyCopy[userName] = companyCopy[userName].map(c=>c.id ===IDCompany
        ? {...c,title: newTitle}
        :c
    )

    return companyCopy
}