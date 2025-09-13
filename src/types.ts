
export type Task = {
  id: number;
  title: string;
  completed: boolean;
  type: string;
};
export type InputTask = {
  title: string;
  type: string;
};


export type StoreTasks = {
 tasks:Task[];
 addTask:(task:InputTask)=>void;
 removeTask:(id:number)=>void;
 editTask:(updateTask:Task)=>void;
toggleCompleted:(toggleTask:Task)=>void;

}; 