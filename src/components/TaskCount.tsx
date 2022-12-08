type TaskCountProps = {
  description: string;
  taskCount: number;
};

export function TaskCount({ description, taskCount }: TaskCountProps) {
  return (
    <div className="gap-2 flex flex-row text-sky-600">
      <p className="w-28">{description}</p>
      <strong>{taskCount}</strong>
    </div>
  );
}
