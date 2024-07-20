import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h3 className="font-medium text-lg">no any task</h3>;
  }
  return (
    <ul className="mt-4 ">
      {tasks.map((task) => (
        <li key={task.id} className="card bg-base-200 w-full shadow-xl mt-3">
          <div className="card-body">
            <h2
              className={`card-title capitalize ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.content}
            </h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <h3>{task.createdAt.toLocaleString()}</h3>
            <div className="card-actions justify-end">
              <Link href={"/task/id"} className="btn btn-primary">
                Edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
