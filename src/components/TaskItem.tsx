import { useTasks } from "../hooks/useTasks";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
  };
}

export default function TaskItem({ task }: TaskItemProps) {
  const { removeTask, toggleCompletion } = useTasks();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm">
      {/* Task listed */}
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p>{task.description}</p>
        <span className={`text-xs font-bold ${task.priority === "high" ? "text-red-500" : task.priority === "medium" ? "text-yellow-500" : "text-green-500"}`}>
          {task.priority.toUpperCase()} Priority
        </span>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => toggleCompletion(task.id)}
          className={`px-3 py-1 rounded ${task.completed ? "bg-green-500 text-white" : "bg-gray-500 text-white"}`}
        >
          {task.completed ? "Completed" : "Mark as Complete"}
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}