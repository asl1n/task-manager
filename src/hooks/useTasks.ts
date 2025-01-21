import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  const { tasks, addTask, removeTask, toggleCompletion, updateTask } = context;

  return { tasks, addTask, removeTask, toggleCompletion, updateTask };
}