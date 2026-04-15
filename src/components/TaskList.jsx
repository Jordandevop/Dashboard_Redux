import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { filterTasks, sortByPriority, searchTasks } from "../utils/tasks.utils";

export default function TaskList() {
  const tasks = useSelector((state) => state.task.tasks);
  const filter = useSelector((state) => state.task.filter);
  const priorityFilter = useSelector((state) => state.task.priorityFilter);
  const search = useSelector((state) => state.task.search);
  const sort = useSelector((state) => state.task.sort);

  let displayedTasks = filterTasks(tasks, filter);
  displayedTasks = searchTasks(displayedTasks, search);
  if (priorityFilter !== "all") {
    displayedTasks = displayedTasks.filter(
      (t) => t.priority === priorityFilter,
    );
  }
  if (sort) displayedTasks = sortByPriority(displayedTasks);
  return (
    <div>
      <h5 className="mb-3">Tâches ({displayedTasks.length})</h5>
      {displayedTasks.length === 0 && (
        <p className="text-muted">Aucune tâche pour l'instant.</p>
      )}

      {displayedTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}
