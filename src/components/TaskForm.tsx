import React, { useState } from "react";
import { useTasks } from "../hooks/useTasks";

export default function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

  // When user press add
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      priority,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl mb-4">Add a Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-2 w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-2 w-full"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        required
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Task
      </button>
    </form>
  );
}