import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import RadioInput from "../../../common/radio-input";
import TextField from "../../../common/text-field";
import { completeProfile } from "../../../services/auth-service";
import Loading from "../../../common/loading";

export default function CompleteProfileForm() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const { message, user } = await mutateAsync(formData);
      toast.success(message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full sm:max-w-sm mx-auto pt-10">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
        <div className="flex items-center justify-center gap-x-8">
          <RadioInput
            label="کارفرما"
            name="role"
            id="OWNER"
            value="OWNER"
            onChange={onChange}
            checked={formData.role == "OWNER"}
          />
          <RadioInput
            label="فریلنسر"
            name="role"
            id="FREELANCER"
            value="FREELANCER"
            onChange={onChange}
            checked={formData.role == "FREELANCER"}
          />
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
