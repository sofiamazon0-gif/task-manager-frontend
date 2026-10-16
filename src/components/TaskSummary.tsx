type TaskSummaryProps = {
  total: number;
  completed: number;
};

export function TaskSummary({ total, completed }: TaskSummaryProps) {
  return <p>{completed} de {total} tareas completadas</p>;
}
