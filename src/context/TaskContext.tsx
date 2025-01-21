import { createContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  toggleCompletion: (id: string) => void;
  updateTask: (id: string, updatedTask: Task) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

// Custom state management and methods
export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateTask = (id: string, updatedTask: Task) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleCompletion, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}