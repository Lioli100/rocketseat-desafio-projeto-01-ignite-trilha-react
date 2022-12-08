import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Information } from "../components/Information";
import { Input } from "../components/Input";
import { Task, TaskProps } from "../components/Task";

interface Props {
  task: TaskProps[];
}

const LOCA_STORAGE_KEY = "todo:savedTasks";

export default function Home({ task }: Props) {
  const [tasks, setTasks] = useState(["Chekar todos os dias as tarefas"]);

  const [newTask, setNewTask] = useState("");

  const completedTasks = tasks.filter((done) => done).length;

  function setTasksAndSave(newTasks: Props[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCA_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function loadSaveTasks() {
    const saved = localStorage.getItem(LOCA_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSaveTasks();
  }, []);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasksAndSave([...tasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasksAndSave(tasksWithoutDeleteOne);
  }

  return (
    <section className="bg-gray-700 w-screen min-h-[1024px] m-auto ">
      <Header />

      <form
        onSubmit={handleCreateNewTask}
        className="mt-[-30px] gap-2 items-center justify-center flex absolute w-full"
      >
        <Input
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <Button />
      </form>
      <div className="mt-16 items-center gap-6 justify-between flex w-full h-6 flex-col">
        <div className="flex w-[736px] flex-row justify-between  ">
          <div className="gap-2 flex flex-row text-sky-600 items-center justify-center">
            <p className="w-28">Tarefas criadas</p>
            <div className="rounded-3xl w-6 h-6 bg-gray-800 items-center justify-center flex text-gray-300 py-2 px-[2px]">
              {tasks.length}
            </div>
          </div>
          <div className="flex w-36 justify-between items-center flex-row gap-2 text-indigo-500">
            <p>Concluídas</p>
            <div className="rounded-lg w-16 h-6 bg-gray-800 items-center justify-center flex text-gray-300 py-2 px-[2px]">
              <p>
                {completedTasks} de {""}
                {tasks.length}
              </p>
            </div>
          </div>
        </div>

        <div>
          {tasks.map((task) => {
            return <Task key={task} content={task} onDeleteTask={deleteTask} />;
          })}
        </div>
        {tasks.length <= 0 && (
          <Information
            title="Você ainda não tem tarefas cadastradas"
            subtitle="Crie tarefas e organize seus itens a fazer"
          />
        )}
      </div>
    </section>
  );
}
