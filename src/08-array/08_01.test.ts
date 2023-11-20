export type UsersType={
    [key:string] : {id:number, name:string}
}

let users : UsersType=


beforeEach(()=>{
     users = {
        '101': {id: 101, name: 'Dimych'},
        '1123': {id: 1123, name: 'Natasha'},
        '1011': {id: 1011, name: 'Valera'},
        '3': {id: 3, name: 'Katya'}
    }
})

test('should update correcr users', () => {
    users['3'].name ='Ekaterina'
    expect(users['3'].name).toBe('Ekaterina')
    expect(users['3']).toEqual({id: 3, name: 'Ekaterina'})

})