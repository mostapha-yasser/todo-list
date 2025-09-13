import { create } from "zustand";
import type { InputTask, StoreTasks,Task } from "../types";
export const useTodoStore=create<StoreTasks>()((set)=>({
tasks:[],
addTask:(task:InputTask)=> set((state)=>{
const newTasks:Task[]=[...state.tasks,{id:Date.now(),title:task.title,type:task.type,completed:false}]
return {tasks:newTasks}
}),
editTask:(updateTask:Task)=>set((state)=> {
    const tasksAfterUpdate=state.tasks.map((task)=>
        task.id === updateTask.id ? updateTask : task
    )
    return {tasks:tasksAfterUpdate}
}),
removeTask:(id)=>set((state)=>{
    const tasksWithOutDeletedTask=state.tasks.filter((task)=> task.id!==id)
    return {tasks:tasksWithOutDeletedTask}
}),
toggleCompleted:(toggleTask:Task)=>set((state)=> {
    const tasksAfterToggle=state.tasks.map((task)=>
        task.id === toggleTask.id ? {...task,completed:!task.completed} : task
    )
    return {tasks:tasksAfterToggle}
}),
    

})

)