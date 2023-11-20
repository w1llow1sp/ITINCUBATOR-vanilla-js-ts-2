test('should takes old mens older than 90', () => {
    const ages=[18,19,20,22,1,100,14]

    const predicate =(age:number) => {
        return age >90
    }
    const oldAges =ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('should takes cheap courses (less 160)', () => {
    const courses =[
        {title:'css',price:110},
        {title:'js',price:200},
        {title:'react',price:150},
    ]

    const Chipcourses  = courses.filter( course => course.price <160)



    expect(Chipcourses.length).toBe(2)
    expect(Chipcourses[0].title).toBe('css')
    expect(Chipcourses[1].title).toBe('react')
})

test('get only comlited tasks', () => {
    const tasks =[
        {id:1,title:'Bread',isDone: false},
        {id:2,title:'Milk',isDone: true},
        {id:3,title:'Salt',isDone: false},
        {id:4,title:'Sugar',isDone: true}
    ]

    const complitedTask = tasks.filter(task => task.isDone)

    expect(complitedTask.length).toBe(2)
    expect(complitedTask[0].id).toBe(2)
    expect(complitedTask[0].title).toBe('Milk')
    expect(complitedTask[1].id).toBe(4)
    expect(complitedTask[1].title).toBe('Sugar')
})

test('get only uncomlited tasks', () => {
    const tasks =[
        {id:1,title:'Bread',isDone: false},
        {id:2,title:'Milk',isDone: true},
        {id:3,title:'Salt',isDone: false},
        {id:4,title:'Sugar',isDone: true}
    ]

    const uncomplitedTask = tasks.filter(task => !task.isDone)

    expect(uncomplitedTask.length).toBe(2)
    expect(uncomplitedTask[0].id).toBe(1)
    expect(uncomplitedTask[0].title).toBe('Bread')
    expect(uncomplitedTask[1].id).toBe(3)
    expect(uncomplitedTask[1].title).toBe('Salt')
})
