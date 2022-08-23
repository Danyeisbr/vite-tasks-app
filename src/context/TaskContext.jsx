import { createContext, useState, useEffect } from "react";
import { data } from "../data/data";

//Esta variable es una funcion que me retorna un objeto y TaskContext será el nombre del contexto global. Elejimos un nombre y este es el que usarán los componentes hijos pues podemos crear varios contextos.
export const TaskContext = createContext();

//Este componente sera el contenedor de todos los demas componentes que harán uso del estado global y react me da un componente ya para esto. Es el <TaskContext.Provider>
export function TaskContextProvider(props) {
  //Colocamos aca los estados para que cualquier componente pueda hacer uso de ellos
  const [tasks, setTasks] = useState([]);
  //Eso es lo mismo que decir:
  //const tasks = [] y setTasks = function () => devuelve algo que me actualiza el valor inicial de la variable tasks y por ende el estado del componente.

  //const a = [1, 2, 3]
  // [...a, 4, 5, 6]  output = [1, 2, 3, 4, 5, 6]

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //Esto se va a ejecutar cuando cargue el componente. Le pasamos a la funcion setTasks el arreglo data para que al cargar el componente, la variable tasks tenga los datos del array que estamos importando.
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          deleteTask,
          createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
