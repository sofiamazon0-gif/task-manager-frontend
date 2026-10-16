import { TaskItem } from "./TaskItem";

export function TaskList() {
  return (
    <ul>
      <TaskItem text="Tarea completada" completed={true} />
      <TaskItem text="Tarea pendiente 1" completed={false} />
      <TaskItem text="Tarea pendiente 2" completed={false} />
    </ul>
  );
}
