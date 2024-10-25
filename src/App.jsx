import AddTask from "./componetes/AddTasks"
import Tasks from "./componetes/Tasks";
function App() {
  const [tasks, setTasks] = useState ([{
    id: 1,
    title: "Estudar programação",
    description: "estudar programação para se torna um desenvolvedor full stack"
    isCompleted : false
  }
  {id: 1,
  title: "Estudar programação",
  description: "estudar programação para se torna um desenvolvedor full stack"
  isCompleted : false}
  {id: 1,
  title: "Estudar programação",
  description: "estudar programação para se torna um desenvolvedor full stack"
  isCompleted : false
},
]);
function onTaskClick(taskId) {
 const newTasks = tasks.map(task => {
  if (task.id = taskId) {
    return {
      ...task, isCompleted: !task.isCompleted
    }
    return task
  }
 })
}
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
      <AddTasks/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  );
}

export default App
