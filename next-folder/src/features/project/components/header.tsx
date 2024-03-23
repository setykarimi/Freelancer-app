import useMoveBack from "@/hooks/other/use-move-back";
import { HiArrowRight } from "react-icons/hi";

export default function ProjectHeader({ project }: { project: any }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4">
      <button onClick={moveBack}>
        <HiArrowRight className="w-5 h-5 text-secondary-500" />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">
        لیست درخواست‌های {project.title}
      </h1>
    </div>
  );
}
