//rfce y enter para crear un componente funcional de manera rapida
//imp y enter para el atajo de crear importacion nueva, luego tab para modificar el nombre del archivo que estamos importando

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
