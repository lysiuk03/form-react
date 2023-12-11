import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2>Registration Form</h2>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>
            <span>Nick:</span>
            <input {...register("nick", { required: "This field is required" })} type="text" />
            {errors.nick && <p>{errors.nick.message}</p>}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Email:</span>
            <input {...register("email", { required: "This field is required", pattern: /^\S+@\S+$/i })} type="email" />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Sex:</span>
            <select {...register("sex", { required: "This field is required" })}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.sex && <p>{errors.sex.message}</p>}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Age:</span>
            <input {...register("age", { required: "This field is required", min: 1 })} type="number" />
            {errors.age && <p>{errors.age.message}</p>}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Password:</span>
            <input {...register("password", { required: "This field is required", minLength: 6 })} type="password" />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Photo:</span>
            <input {...register("photo")} type="file" accept="image/*" />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Description:</span>
            <textarea {...register("description")} />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Tags:</span>
            <input {...register("tags")} type="text" />
          </label>
        </div>
        <div className="form-group">
          <button type="submit">Sign up</button>
        </div>
      </form>
    </>
  );
}