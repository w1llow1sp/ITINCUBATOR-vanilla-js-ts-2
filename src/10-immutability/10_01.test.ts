import {
    addNewBooksToUser,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    UpgradeUsersLaptop,
    UserType,
    UserWhitBooksType,
    UserWhitLaptopType, WithCompanyType
} from "./10_01";
function makeHairStyle(u:UserType, power:number) {
    // мы создали поверхностую копию для обьекта
    // но объект внутри copy будет идентичен
    // обьекту user
    const copy ={
        ...u,
        hair: u.hair / power
    }

    return copy
}

test( 'reference type test',()=>{
    let user:UserType ={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk'
        }
    }

    const  awesomeUser = makeHairStyle(user,2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})


test( 'change adress',()=>{
    let user:UserWhitLaptopType ={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')


})


test( 'upgrade laptop to mackbook',()=>{
    let user:UserWhitLaptopType ={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }

    const updatedUser = UpgradeUsersLaptop(user, 'MacBook');

    expect(user).not.toBe(updatedUser)
    expect(user.laptop).not.toBe(updatedUser.laptop)
    expect(updatedUser.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')


})



test( 'remove user to new house',()=>{
    let user:UserWhitLaptopType & UserWhitBooksType ={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const updatedUser = moveUserToOtherHouse(user, 30);

    expect(user).not.toBe(updatedUser)
    expect(user.books).toBe(updatedUser.books)
    expect(user.address).not.toBe(updatedUser.address)
    expect(user.laptop).toBe(updatedUser.laptop)



    expect(updatedUser.address.house).toBe(30)
    expect(user.address.house).toBe(12)


})


test( 'add new books to user',()=>{
    let user:UserWhitLaptopType & UserWhitBooksType ={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const updatedUser = addNewBooksToUser(user, 'ts');

    expect(user).not.toBe(updatedUser)
    expect(user.address).toBe(updatedUser.address)
    expect(user.laptop).toBe(updatedUser.laptop)

    expect(user.books).not.toBe(updatedUser.books)
    expect(updatedUser.books[4]).toBe('ts')

})

test( 'update books',()=>{
    let user:UserWhitLaptopType & UserWhitBooksType ={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const updatedUser = updateBook(user,'ts','js');

    expect(user).not.toBe(updatedUser)
    expect(user.address).toBe(updatedUser.address)
    expect(user.laptop).toBe(updatedUser.laptop)

    expect(user.books).not.toBe(updatedUser.books)
    expect(updatedUser.books[2]).toBe('ts')


})


test( 'remove books',()=>{
    let user:UserWhitLaptopType & UserWhitBooksType ={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const updatedUser = removeBook(user,'js');

    expect(user).not.toBe(updatedUser)
    expect(user.address).toBe(updatedUser.address)
    expect(user.laptop).toBe(updatedUser.laptop)

    expect(user.books).not.toBe(updatedUser.books)
    expect(updatedUser.books[2]).toBe('react')


})


test( 'update company title',()=>{
    let user:UserWhitLaptopType & WithCompanyType={
        name:'Dimych',
        hair:32,
        address : {
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        companies: [{id:1,title:'Epam'},{id:2,title:'IT-INCUBATOR'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM');

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)

    expect(userCopy.companies[0].title).toBe('EPAM')


})


test( 'update company',()=>{

    let companies ={
        'Dimych' :  [{id:1,title:'Epam'},{id:2,title:'IT-INCUBATOR'}],
        'Artem' : [{id:2,title:'IT-INCUBATOR'}]
    }

    const companyCopy= updateCompanyTitle2(companies,'Dimych',1,'EPAM')


    expect(companies['Dimych']).not.toBe(companyCopy['Dimych'])
    expect(companies['Artem']).toBe(companyCopy['Artem'])
    expect(companyCopy['Dimych'][0].title).toBe('EPAM')



})