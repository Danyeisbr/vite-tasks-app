import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //En el objeto valor nos estamos trayendo el arreglo de tareas y las funciones para crear y eliminar tareas
  //const valor = useContext(TaskContext);
  //Pero solo necesitamos la funcion createTask
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4">
          <h1 className="text-2xl font-bold text-white mb-3">Crear Nueva Tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-indigo-500 px-3 py-5 rounded-md text-white w-full">
            Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
