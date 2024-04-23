import RHFSelect from "@/common/form/rhf-select";
import Loading from "@/common/loading";
import useChangeUserStatus from "@/hooks/authentication/use-user-change-status";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

export default function ChangeUserStatus({
  userId,
  onClose,
  currentStatus,
}: {
  userId: string;
  onClose: () => void;
  currentStatus: string;
}) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isEditing } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (values: any) => {
    changeUserStatus(
      {
        userId: userId,
        postData: {
          status: +values.status,
        },
      },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          register={register}
          label="تغییر وضعیت"
          options={options}
          name="status"
          required
          defaultValue={currentStatus}
        />

        <div className="!mt-8">
          {isEditing ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
