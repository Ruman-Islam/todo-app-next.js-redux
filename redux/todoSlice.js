import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [
            // { id: 1, title: 'Programming', description: 'Redux', completed: false },
            // { id: 2, title: 'Coding', description: 'C++', completed: false },
        ],
    },
    reducers: {
        showTodos: (state) => state,
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false
            }
            state.todos.push(newTodo);
        },
        updateTodo: (state, action) => {
            const { id, title, description } = action.payload;
            const index = state.todos.findIndex(todo => todo.id === +id);
            state.todos[index] = { ...state.todos[index], title: title, description: description };
        },
        completeTodo: (state, action) => {
            const id = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            state.todos[index] = { ...state.todos[index], completed: true };
            // let index;
            // for (const todo of state.todos) {
            //     if (todo.id === id) {
            //         index = state.todos.indexOf(todo);
            //     }
            // }
        },
        unCompleteTodo: (state, action) => {
            const id = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            state.todos[index] = { ...state.todos[index], completed: false };
            // let index;
            // for (const todo of state.todos) {
            //     if (todo.id === id) {
            //         index = state.todos.indexOf(todo);
            //     }
            // }
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            const restTodos = state.todos.filter(todo => todo.id !== id);
            state.todos = restTodos;
        }
    }
})

export const { showTodos, addTodo, completeTodo, deleteTodo, unCompleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;