// import Tasks from "../components/Task/Tasks";
// import AddTask from "../components/Task/AddTask";

// export default function HomePage() {
//   return (
//     <div className="container">
//       <AddTask />
//       <Tasks />
//     </div>
//   );
// }



import { useState } from "react";
import Tasks from "../components/Task/Tasks";
import TaskData from "../components/Task/TaskData";
import AddTask from "../components/Task/AddTask";
import { v4 as uuidv4 } from "uuid";

export default function HomePage() {
  const [taskList, setTaskList] = useState(TaskData);

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    newTask.checked = false;
    setTaskList([newTask, ...taskList]);
  };

  const deleteTask = (id) => {
    // console.log(id);
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const checkTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="container">
      <AddTask handelAdd={addTask} />
      <Tasks
        taskList={taskList}
        handelDelete={deleteTask}
        handelChecked={checkTask}
      />
    </div>
  );
}