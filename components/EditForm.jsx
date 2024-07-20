import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, content, completed, createdAt } = task;
  return (
    <form
      action={editTask}
      className="p-12 border border-base-300 rounded-lg max-w-md"
    >
      <input type="hidden" value={id} name="id" />
      <input
        type="text"
        defaultValue={content}
        name="content"
        required
        className="input input-bordered"
      />
      <div className="form-control">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            id="completed"
            name="completed"
            type="checkbox"
            defaultChecked={completed}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
