import React, { useState } from "react";
import TextField from "../../../common/text-field";

export default function CompleteProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full sm:max-w-sm mx-auto pt-10">
      <form className="space-y-8">
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
          <div className="flex items-center gap-x-2 text-secondary-600">
            <input
              className="cursor-pointer w-4 h-4 form-radio focus:ring-primary-900 text-primary-900"
              type="radio"
              name="role"
              id="OWNER"
              value="OWNER"
            />
            <label htmlFor="OWNER">کارفرما</label>
          </div>
          <div className="flex items-center gap-x-2 text-secondary-600 form-radio">
            <input
              className="cursor-pointer w-4 h-4 form-radio focus:ring-primary-900 text-primary-900"
              type="radio"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
            />
            <label htmlFor="FREELANCER">فریلنسر</label>
          </div>
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}
