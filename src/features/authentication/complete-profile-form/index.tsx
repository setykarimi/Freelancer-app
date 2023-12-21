import React, { useState } from "react";
import RadioInput from "../../../common/radio-input";
import TextField from "../../../common/text-field";

export default function CompleteProfileForm() {
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

  const handleSubmit = () => {};

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
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}
