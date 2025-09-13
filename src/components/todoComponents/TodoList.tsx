import { Trash } from "lucide-react";
import { useTodoStore } from "../../store/todo.store";

function TodoList() {
    const {tasks,removeTask,toggleCompleted}=useTodoStore()
    if (tasks.length===0){return}
    return (
           <div className="max-h-[560px] overflow-auto pb-10">



      <div className="w-full border-2 border-green-600 grid grid-cols-7 items-center h-10 rounded-t-xl font-bold">
        <div className="text-center col-span-4">Task</div>
        <div className="text-center">Type</div>
        <div className="text-center">Complete</div>
        <div className="text-center">Delete</div>
      </div>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-full border-x-2 border-b-2 border-green-600 grid grid-cols-7 items-center h-10"
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