const ages = [18,19,20,22,1,100,14]

const predicate =(age:number) => {
    return age >90
}

const oldAges =[100]


type coursesType ={
    title:string
    price:number
}
const courses =[
    {title:'css',price:110},
    {title:'js',price:200},
    {title:'react',price:150},
]
const cheapPredicate  = (courses:coursesType) => {
    return courses.price <160

}
const chipCourses =[
    {title:'css',price:110},
    {title:'react',price:150},
]