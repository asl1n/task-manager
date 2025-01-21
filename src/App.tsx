import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => (
  <TaskProvider>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  </TaskProvider>
);

export default App;