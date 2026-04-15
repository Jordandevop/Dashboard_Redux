import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    tasks: [],
    filter: "all",
}

const taskSlice = createSlice({
    name: "task",

    initialState,

    reducers: {
        addTask: (state, action) =>{

            state.tasks.unshift(action.payload)
        },

        deleteTask: (state, action) =>{
            state.tasks = state.tasks.filter(
                (task)=> task.id !== action.payload
            )
        },

        toggleItemTask: (state, action) =>{
            const task = state.tasks.find(
                (task) => task.id === action.payload
            )
            if(task){
              
                task.done = !task.done
            }   
        },

        setFilter: (state, action)=>{
            state.filter = action.payload
        }
    },
})

export const { addTask, deleteTask, toggleItemTask, setFilter} = taskSlice.actions

export default taskSlice.reducer