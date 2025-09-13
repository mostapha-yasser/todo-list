import { Trash } from "lucide-react";
import { useTodoStore } from "../../store/todo.store";
import Empty from "../../../public/Empty.svg"
function TodoList() {
    const {tasks,removeTask,toggleCompleted}=useTodoStore()
    if (tasks.length===0){return <img src={Empty} className=" w-96  h-96 mx-auto"/>}
    return (
           <div className="max-h-[560px] overflow-auto pb-10">



      <div className="px-1 w-full border-2 border-green-600 grid grid-cols-7 items-center h-10 rounded-t-xl font-bold">
        <div className="text-center col-span-4 text-sm md:text-base">Task</div>
        <div className="text-center text-sm md:text-base tex">Type</div>
        <div className="text-center text-sm md:text-base">Done</div>
        <div className="text-center text-sm md:text-base">Delete</div>
      </div>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-full border-x-2 border-b-2 border-green-600 grid grid-cols-7 items-center h-10 text-xs sm:text-sm lg:text-base"
        >
          <div title={task.title} className={`${task.completed?"line-through":""} text-center col-span-4 text-nowrap truncate`}>{task.title}</div>
          <div className="text-center">{task.type}</div>
          <div className="text-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task)
              }
            />
          </div>

          <div className="text-center">
            <button
              className="text-red-600 cursor-pointer hover:scale-110 "
              onClick={() =>{removeTask(task.id)}
              }
            >
              <Trash size={20}/>
            </button>
          </div>
        </div>
      ))}

      </div>
    );
}

export default TodoList;