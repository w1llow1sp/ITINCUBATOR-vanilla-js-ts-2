const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students from you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5) * 1000)
        })
    },
    get(url, data) {
        return this._fake(url, data)
    }
}

//
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const findUserInDB = (ID) => {
    const users = [{id: 1, name: 'Dimych', friend: 3}, {id: 2, name: 'Sveta', friend: null}, {
        id: 3,
        name: 'Valera',
        friend: 2
    }]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(u => u.id == ID)
            if (user == null) {
                reject('user not found')
            } else {
                resolve(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}


// до урока

//Обещание, что вернет запрос с гугла
const promise1 = axios.get('hh')
const promise2 = findUserInDB(1)

//Promise--- это объект, у которого нет свойств, но есть методы

//1.Метод .then
// Это инструкция. То есть, когда обещание выполнится, то ... *инструкция*

promise1.then((data) => {
    console.log(data)
})

promise2.then((user) => {
    console.log(user)
})

//в реальной жизни
axios.get('hh').then((data) => {
    console.log(data)
})


{/*Что такое promise,then,catch -- основы*/
}
//Promise может находиться в одном из трех состояний:
// Pending -- ожидание
// Resolved -- Выполнен
// Rejected -- Не выполнен

//pending
// В данном случае then -- это кейс, когда код  Resolved
const promise22 = findUserInDB(1)
//...
//....
//resolved
//...
promise22.then((user) => {
    console.log(user)
})

//

// 2.Метод .catch
// Метод, в том случае, если мы ловим состояние Rejected
//В этом кейсе -- reject
const promise3 = findUserInDB(100)
promise3
    .then((user) => {
        console.log(user)
    })
    .catch((err) => {
        debugger
        console.warn(err)
    })
console.log('finish')

// 3.Метод .finally
//Выполняется, когда promise либо reject, либо resolved

const promise4 = findUserInDB(14)
promise3
    .then((user) => {
        console.log(user)
    })
    .catch((err) => {
        debugger
        console.warn(err)
    })
    .finally(() => {
        console.log('finally')
    })
console.log('finish')
{/*Что такое promise,then,catch -- основы*/
}

{/*Схематично про state/status промиса: pending/fullfilled/rejected*/
}


{/*Схематично про state/status промиса: pending/fullfilled/rejected*/
}

{/*Promise.all/ Promise.allSettled*/
}

promise1.then((data) => {
    console.log(data)
})

promise2.then((user) => {
    console.log(user)
})

//статический метод
//Наши методы созданны через класс Promise
// Этот метод позволяет нам создавать промис для других промисов.
// Если хоть один промис не зарезолвился -- otherPromise не выполнится .then()
//
const otherPromise = Promise.all([promise1, promise2])

otherPromise
    .then((res) => {
        const dataFromGoogle = res[0]
        const userFromDB = res[1]
        console.log('finish')
        console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
    }).catch(() => {
    console.log('Initialization failed. Try later')
})

//Ответ будет {12 ; dimych}

// Если мы хотим работать с данными по отдельности -- то можем стандартно подписываться на каждый.
// А если  результат, который прихзодит в эти два промиса -- они сидят в  result. result -- 'это массив с результатами

// метод .allSettled
//этот метод резолвится, когда дочерние промисы в нем узодят из состояния pending

const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise2
    .then((res) => {
        const dataFromGoogle =
            res[0].status === 'fulfilled'
                ? res[0].value
                : {data: {vacancies: null}}
        const userFromDB = res[1].status === 'fulfilled'
            ? res[1].value
            : {name: res[1].value}
        console.log(res)
        console.log('finish')
        console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
    }).catch(() => {
    console.log('Initialization failed. Try later')
})

// res -- это массив с обьектами, но вместо резульатата там сидят данные, в каком состоянии (статусе) находятся промисы.
// В ним сидит обьект value с нашими данными.
// Если ошибка, то вместо Value сидит reason.

/*Promise.resolved Promise.reject*/
// Мы может создавать сразу какой-то промис, который будет либо resolved, либо reject
// Для этого есть статичные методы, это полезно, когда мы делаем какие-то заглушки

const resolvedPromise = Promise.resolve(100)


const rejectedPromise = Promise.reject({message: 'some error'})

/*
rejectedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

*/


const userAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'}, {name: 'N'}])
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Incorrect login and password'})
        } else {
            return Promise.resolve({name: 'D'}, {name: 'N'})
        }
    }
}

userAPI.login('123', '33132')
    .then((data) => {
        // make redirect
    })
    .catch(err)

/* Цепочка .then или chaining */

/*
const promise5 = findUserInDB(3)

const promise5_2 = promise5.then((user) => {return user.name})

promise5_2.then(name => console.log(name))*/

//или

findUserInDB(3)
    .then(user => user.name)
    .then(name => console.log(name))


axios.get('https://www.google.ru/?hl=ru')
    .then(response => response.data)
    .then(data => console.log(data))


const makeGoogleRequest = () => {
    /*    const googlePromise = axios.get('https://www.google.ru/?hl=ru')
        const googlePromise2 = googlePromise.then(res => res.data)
        return googlePromise2*/

    axios.get('https://www.google.ru/?hl=ru')
        .then(res => res.data)
        .then(data => data.vacancies)
}

makeGoogleRequest().then(data => console.log(vacancies))


const getVacanciesCountFromGoogle = () => {
    /*    const googlePromise = axios.get('https://www.google.ru/?hl=ru')
        const googlePromise2 = googlePromise.then(res => res.data)
        return googlePromise2*/

    axios.get('https://www.google.ru/?hl=ru')
        .then(res => res.data)
        .then(data => data.vacancies)
}

getVacanciesCountFromGoogle().then(count => console.log(count))

// Callback hell

const lastPromise = findUserInDB(1)
    .then(user => {
        console.log(user)
        findUserInDB(user.friend)
            .then(user => {
                console.log(user)
                findUserInDB(user.friend)
                    .then(user => {
                        console.log(user)
                    })
            })
    })
//

const lastPromisePrettier = findUserInDB(1)
    .then(user => {
        console.log(user)
        return user
    })
    .then(user => findUserInDB(user.friend))
    .then(friend1 => {
        console.log(friend1)
        return friend1
    })
    .then(friend1 => {
        const pr = findUserInDB(friend1.friend)
        return pr
    })
    .then(friend2 => console.log(friend2.name))

/* Async Await*/
async function run() {
    let user_1 = await findUserInDB(1)
    console.log(user)
    let friend_1 = await findUserInDB(user_1.friend)
    console.log(friend_1.name)
    let friend_2 = await findUserInDB(friend_1.friend)
    console.log(friend_2.name)
}

run()

/*Зачем создаватьб свои проимсы. Промисификация, new Promise()*/

/*findUserInDB(1)
.then(user => console.log(user.name))*/

function getNumber() {
    // const promise= Promise.resolve(Math.random())
    const promise = new Promise((resolve, reject) => {
        //reject('Some error')
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)

    })
    return promise
}

// Если промис reject -- он навсегда reject

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))


const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (e) {
            return false
        }
        return true
    },
    saveAsyns(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (e) {
                reject(e)
            }
        })
        return promise
    },
    read() {
        return new Promise((resolve, reject) => {
            const data = localStorage.getItem('some-key')
            if (!data) {
                resolve(null)
            } else {
                resolve(JSON.parse(data))
            }
        })
    }
}

//синхронная версия
repo.save({name: 'IT-KAMASUTRA'})
if (result) {
    console.log('SAVED')
} else {
    console.warn('NOT SAVED')
}


//асинхронная версия
const resultAcync = repo.saveAsyns({name: 'IT-KAMASUTRA'})
resultAcync
    .then(() => console.log('SAVED'))
    .catch(err => console.warn('NOT SAVED: ' + err))

const run = async () => {
    await repo.saveAsyns({name: 'IT-KAMASUTRA'})
    console.log('SAVED')

    const data = await repo.read()
    console.log(data)
}
run()

//
function wait(ms) {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, ms)
    })

}


async function runTimer() {
    await wait(1)
    console.log(1)
    await wait(2)
    console.log(2)
    await wait(3)
    console.log(3)
}

//Подробное про catch, try-catch версия для async-await
//

findUserInDB(1)
    .then(user => {
        console.log(user)
        return user.friend
    })
    .then(friendId => findUserInDB(friendId))
    .catch(error => {
        console.log('err')
        return {name:'BotFriend',friend: 3}
    })
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friend1 => findUserInDB(friend1.friend))
    .then(friend2 => console.log(friend2.name))
    .catch(error => alert(error))


/* Async Await*/
async function runNew() {
    try{
        let user_1 = await findUserInDB(1)
        console.log(user)
        let friend_1
        try {
             friend_1 = await findUserInDB(user_1.friend)
            console.log(friend_1.name)
        } catch (err) {
             friend_1={name:'BotFriend',friend: 3}
        } let friend_2 = await findUserInDB(friend_1.friend)
        console.log(friend_2.name)
    }
    catch  (err) {
        alert(err)
    }

}

runNew()

// бонус

const API = {
   async save() {},
   async read() {
        return{name:'it-kamasutra'}
    }
}


function XXX () {

}

async function run12() {
/*    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read', data)*/
    let a = XXX()
    console.log(a)
}

run12()
// любая функция асинхронная возвращает ПРОМИС!