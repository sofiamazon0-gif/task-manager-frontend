type TaskItemProps = {
  text: string;
  completed: boolean;
};

export function TaskItem({ text, completed }: TaskItemProps) {
  return (
    <li>
      <input type="checkbox" checked={completed} disabled />
      <span>{text}</span>
    </li>
  );
}
