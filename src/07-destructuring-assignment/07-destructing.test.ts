import {ManType} from "./07-types";

let man:ManType;
beforeEach(()=> {
    man ={
        name:'Dimych',
        age:32,
        lessons:[{title:'1'},{title: '2'},{title: '3'}],
        address: {
            street: {
                title:'Nezavisimosti street'
            }
        }
    }
})

test('test for 7',()=>{
/*
    const age = man.age
    const lessons =man.lessons*/

    const {age,lessons} = man
    const {title} = man.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Nezavisimosti street')
})

test ('', ()=>{})

test ('some test', ()=>{


/*    const l1=man.lessons[0]
    const l2=man.lessons[1]*/

    const l1 =man.lessons[0]
    const l2 =man.lessons[1]
    const [ls1,...restLessons] = man.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    expect(ls1.title).toBe('1')

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')
})