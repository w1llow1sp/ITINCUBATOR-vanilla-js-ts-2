export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const dimychTransofrator = (man: ManType) => (
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
)

const devs = [
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    }
]


const devs2 = [
    dimychTransofrator(people[0]),
    dimychTransofrator(people[1]),
    dimychTransofrator(people[2])
]

const devs3= people.map(el =>dimychTransofrator )
const  devs4 = people.map(man => (
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
))

const greetingMessage = people.map(man => `Hello${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)
export const createGreetingMessage =(people:Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)
}