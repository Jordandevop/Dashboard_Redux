import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    tasks: [],
    filter: "all",
    priorityFilter:"all",
    search: "",      
    sort: false,
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
        },

        setPriorityFilter:(state, action)=>{
            state.priorityFilter = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        toggleSort: (state) => {
            state.sort = !state.sort
        },
    },
})

export const { addTask, deleteTask, toggleItemTask, setFilter, setPriorityFilter, setSearch,toggleSort} = taskSlice.actions

export default taskSlice.reducer