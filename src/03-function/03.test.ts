import {studentType} from "../02-objects/02";
import {addSkill, isStudentCountry, makeStudentActive} from "./03";

let student: studentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Sometext',
        age: 23,
        isActive: false,
        address: {
            streetTitle: 'Mayakovskogo',
            city: {
                title: 'Chelyabinsk',
                countryName: 'Russia'
            }
        },
        steck: [
            {
                id: 1,
                title: "HTML",
                knowlegePersent: 92

            },
            {
                id: 2,
                title: "CSS",
                knowlegePersent: 81

            },
            {
                id: 3,
                title: "JavaScript",
                knowlegePersent: 60

            },
            {
                id: 4,
                title: "React",
                knowlegePersent: 30

            }
        ]
    }

})

test('new skill should be added to student', () => {
    expect(student.steck.length).toBe(4)

    addSkill(student, 'JestMonkTests')

    expect(student.steck[4].title).toBe('JestMonkTests')
    expect(student.steck[4].id).toBeDefined()
})

test('student should be active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})


test('student live in city?', () => {
    let result1=isStudentCountry(student,'Chelyabinsk')
    let result2=isStudentCountry(student,'Moscow')

    expect(result1).toBe(true)
    expect(result2).toBe(false)

})
