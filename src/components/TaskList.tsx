import { useTasks } from "../hooks/useTasks";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();

  // Sort tasks by priority
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder: { [key: string]: number } = {
      high: 3,
      medium: 2,
      low: 1,
    };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="space-y-4 mt-6">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available. Please add a task.</p>
      ) : (
        sortedTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
}