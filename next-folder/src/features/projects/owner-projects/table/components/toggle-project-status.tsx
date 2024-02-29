import Toggle from "@/common/form/toggle";
import Loading from "@/common/loading";
import useToggleProjectStatus from "@/hooks/projects/use-toggle-project-status";


export default function ToggleProjectStatus({ project }: { project: any }) {
  const { isUpdating, toggleProject } = useToggleProjectStatus();
  const enabled = project.status === "OPEN" ? true : false;
  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";

    toggleProject({
      id: project._id,
      postData: { status },
    });
  };

  return (
    <div className="w-5rem">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
          enabled={enabled}
        />
      )}
    </div>
  );
}
