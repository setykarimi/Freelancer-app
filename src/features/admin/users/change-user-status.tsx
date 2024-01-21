import RHFSelect from "@common/form/rhf-select";
import Loading from "@common/loading";
import useChangeProposalStatus from "@hook/use-change-proposal-status";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

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
}: {
  userId: string;
  onClose: () => void;
}) {
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isEditing } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (values: any) => {
    changeProposalStatus(
      {
        id: userId,
        postData: {
          status: +values.status,
        },
      },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users", userId] });
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
