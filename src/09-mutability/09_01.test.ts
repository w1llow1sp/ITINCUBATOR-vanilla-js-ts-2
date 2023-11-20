
function increaseAge (u:UserType) {
    u.age++
}

type UserType ={
    name:string
    age:number}

test ('should update corresponding user',() => {

    var user = {
        name: 'Dimych',
        age: 32,
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age =1000

    expect(user.age).toBe(1000)
})


test ('array test', () => {
    var users = [
        {
            name: 'Dimych',
            age: 32
        }, {
            name: 'Dimych',
            age: 32
        }

    ]

    var admins = users

    admins.push({name: 'Bandugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandugan', age: 10})
})

test ('value type test', () => {
    var usersCount = 100

    var adminsCount = usersCount

    adminsCount = 101

})

test ('should update corresponding user',() => {

    type UserRefreshType ={
        name:string
        age:number
        adress : {title:string}
    }

    const adress = {
        title: 'Minsk'
    }

    var user = {
        name: 'Dimych',
        age: 32,
        adress : adress
    }

    //let addr = user.adress

    var user2:UserRefreshType ={
        name: 'Natasha',
        age: 30,
        adress : adress
    }


    adress.title = 'Minsk City'

    expect(user.adress.title).toBe('Minsk City')
    expect(user.adress).toBe(user2.adress)
})


test ('reference type array test',() => {

    type UserRefreshType = {
        name: string
        age: number
        adress: { title: string }
    }

    const adress = {
        title: 'Minsk'
    }

    var user: UserRefreshType = {
        name: 'Dimych',
        age: 32,
        adress: adress
    }
    var user2: UserRefreshType = {
        name: 'Natasha',
        age: 30,
        adress: adress
    }


    const users = [user, user2, {name: 'Misha', age: 4, adress: adress}]

    const admins = [user,user2]
    admins[0].name = 'Dmitry'

    users[2].adress.title = 'Minsk City'


    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test',()=> {
    const letters = ['c','d','a','z','e']

    sortFucn(letters)

    expect(letters).toEqual(['c','d','a','z','e'])
})

function sortFucn(letters:any) {
    const copy = [...letters].sort()

}