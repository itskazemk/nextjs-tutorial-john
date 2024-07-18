import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: { content: "wake up" },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });

  return allTasks;
};

const Prisma = async () => {
  const allTasks = await prismaHandlers();

  return (
    <div>
      <h2 className="text-5xl font-bold">Prisma</h2>
      <div>
        <ul className="">
          {allTasks.map((task) => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prisma;
