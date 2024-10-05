// DEFINING THE SCHEMAS AND OBJECTS HERE 


const zod = require("zod")
const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.number()
})


// export
module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}


// TEST CASES 

// const response = createTodo.safeParse({
//     title: "nmewo",
//     description: 1
// })

// console.log(response)