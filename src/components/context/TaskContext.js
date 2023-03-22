// import { useState, createContext } from "react";
// import TaskData from "../Task/TaskData";
// import { v4 as uuidv4 } from "uuid";

// const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
//   const [taskList, setTaskList] = useState(TaskData);
//   const [taskEdit, setTaskEdit] = useState({
//     task: {},
//     edit: false,
//   });

//   //Add the task
//   const addTask = (newTask) => {
//     newTask.id = uuidv4();
//     newTask.checked = false;
//     setTaskList([newTask, ...taskList]);
//   };

//   //To edit the task
//   const editTask = (task) => {
//     setTaskEdit({ task, edit: true });
//   };

//   //Update task
//   const updateTask = (id, updTask) => {
//     setTaskList(
//       taskList.map((task) => (task.id === id ? { ...task, ...updTask } : task))
//     );
//   };

//   //Delete the task
//   const deleteTask = (id) => {
//     // console.log(id);
//     setTaskList(taskList.filter((task) => task.id !== id));
//   };

//   const checkTask = (id) => {
//     setTaskList(
//       taskList.map((task) =>
//         task.id === id ? { ...task, checked: !task.checked } : task
//       )
//     );
//   };

//   return (
//     <TaskContext.Provider
//       value={{
//         taskList,
//         deleteTask,
//         checkTask,
//         addTask,
//         editTask,
//         updateTask,
//         taskEdit,
//       }}
//     >
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export default TaskContext;