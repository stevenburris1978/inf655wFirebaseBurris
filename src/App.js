// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
// import NotFound from "./pages/NotFound";
// import TaskRoutes from "./routes/TaskRoutes";
// import { TaskProvider } from "./components/context/TaskContext";



// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import TaskRoutes from "./routes/TaskRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/task/*" element={<TaskRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

// export default function App() {
//   return (
//     <TaskProvider>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/task/*" element={<TaskRoutes />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </TaskProvider>
//   );
// }



// import { useState } from "react";
// import Tasks from "./components/Task/Tasks";
// import TaskData from "./components/Task/TaskData";
// import AddTask from "./components/Task/AddTask";
// import { v4 as uuidv4 } from "uuid";

// function App() {
//   const [taskList, setTaskList] = useState(TaskData);

//   const addTask = (newTask) => {
//     newTask.id = uuidv4();
//     newTask.checked = false;
//     setTaskList([newTask, ...taskList]);
//   };

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
//     <div className="container">
//       <h1>Welcome to Task Manager</h1>
//       <AddTask handelAdd={addTask} />
//       <Tasks
//         taskList={taskList}
//         handelDelete={deleteTask}
//         handelChecked={checkTask}
//       />
//     </div>
//   );
// }

// export default App;