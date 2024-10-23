import AddTask from "./componetes/AddTasks"
import Tasks from "./componetes/Tasks";
function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <h1 className="text-red-500 text-3xl">Gerenciador de tarefas</h1>
      <AddTasks/>
      <Tasks/>
    </div>
  );
}

export default App
