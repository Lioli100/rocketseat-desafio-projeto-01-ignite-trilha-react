import { Trash } from "phosphor-react";
import { useState } from "react";

export interface TaskProps {
  id?: number;
  content: string;
  done?: boolean;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, done, id, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  const [isChecked, setIsChecked] = useState(done);

  return (
    <section className="flex-row flex gap-2 w-[736px] justify-between p-4 bg-gray-800 rounded-md mb-3 ">
      <div className=" flex-row justify-between flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="rounded-full w-4 h-4 border-1.5  border-cyan-500 bg-transparent"
        />
        <p className="text-gray-300">{id}</p>
        <p
          className={[
            "items-center",
            "text-gray-300",
            "justify-center flex ",
            isChecked ? "line-through && text-gray-600" : "initial",
          ].join(" ")}
        >
          {content}
        </p>
      </div>
      <button
        className="items-center 
        justify-center flex"
        title="Deletar tarefa"
        onClick={handleDeleteTask}
      >
        <Trash
          weight="thin"
          size={20}
          className="transition-colors text-gray-300 hover:text-red-900"
        />
      </button>
    </section>
  );
}
