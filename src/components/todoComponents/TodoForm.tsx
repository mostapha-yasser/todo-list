import { useState, type FormEvent } from "react";
import type { InputTask } from "../../types";
import { useTodoStore } from "../../store/todo.store";

function TodoForm() {
  const [inputTask, setInputTask] = useState<InputTask>({title:"",type:"General"});
    const [inputError, setInputError] = useState("");

  const{addTask}=useTodoStore()
  const handleAddTask=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(inputTask.title!==""){
setInputError("")
addTask(inputTask)
        setInputTask({title:"",type:"General"})

    }else{
        setInputError("New Task Can not Be Empty")
    }
  }

    return (<div className="py-4">

        <form className="flex py-2 gap-2" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="new task"
          value={inputTask.title}
          onChange={(e) => setInputTask({...inputTask,title:e.target.value})}
          className="placeholder:text-center outline-0 border-4 flex-1 border-green-600 rounded-lg h-10 md:h-11 lg:h-12 px-4"
        />

        <select
          value={inputTask.type}
          onChange={(e) => setInputTask({...inputTask,type:e.target.value})}
          className="border-4 border-green-600 rounded-lg h-10 md:h-11 lg:h-12 px-2 text-sm md:text-base"
        >
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-nowrap cursor-pointer font-bold tracking-wider text-white h-10 border-4 border-green-600 text-sm md:text-base rounded-lg md:h-11 lg:h-12 px-2 lg:px-4"
        >
          Add Task
        </button>
      </form>
      <p className="min-h-5 text-sm text-red-400 w-fit mx-auto"> {inputError}</p>


    </div>
    );
}

export default TodoForm;