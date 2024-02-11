import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos :
    [{
        id : 1,
        text : "Hello Redux",
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {//properties and function
        addTodo : (state,action) =>{
            const todo = {
                id : nanoid(),
                text : action.payload,
            }
            state.todos.push(todo)
        }, //always state and action is present in reducer function
        removeTodo : (state,action) =>{
            state.todos =  state.todos.filter((todo) => todo.id !== action.payload)

        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions
// export all reducer  either indivual or component
export default todoSlice.reducer