import { ConfirmDeletePropsType } from "./type";

export default function ConsifrmDelete({
  resourceName,
  onClose,
  disabled,
  onConfirm,
}: ConfirmDeletePropsType) {
  return (
    <div>
      <h2 className="font-bold text-base mb-4">
        آیا از حذف {resourceName} مطمئن هستید؟
      </h2>

      <div className="flex justify-between items-center gap-x-16">
        <button onClick={onClose} className="btn btn--primary flex-1 py-3">
          لغو
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn btn--danger flex-1 py-3"
        >
          تایید
        </button>
      </div>
    </div>
  );
}
