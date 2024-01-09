import Modal from "@common/modal";
import CreateProjectForm from "@features/projects/form/create-project";
import PorjectTable from "@features/projects/table";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-secondary-700 font-bold text-xl">پروژه‌های شما</h1>
        <button
          className="btn btn--primary flex items-center gap-2"
          onClick={() => setOpenModal(true)}
        >
          <HiPlus />
          افزودن پروژه جدید
        </button>
        <Modal
          open={openModal}
          title="اضافه کردن پروژه جدید"
          onClose={() => setOpenModal(false)}
        >
          <CreateProjectForm onclose={()=>setOpenModal(false)}/>
        </Modal>
      </div>
      <PorjectTable />
    </div>
  );
}
