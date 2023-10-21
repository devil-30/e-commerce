import { Button, FormLabel, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import scss from "./registerform.module.scss";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const schema = yup
  .object({
    name: yup.string().required("username is required"),
    email: yup.string().required("email is required"),
    password: yup.string().required("Password is required"),

    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

const RegisterForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <div className="container">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15%",
          }}
        >
          <strong>Sign Up form</strong>
        </h1>
        <div className={scss.register_form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>
              Name
              <Input
                variant="outline"
                {...register("name")}
                size="lg"
                placeholder="Name"
              />
            </FormLabel>
            <p>{errors.name?.message}</p>
            <FormLabel>
              Emailid:
              <Input
                variant="outline"
                {...register("email")}
                size="lg"
                placeholder="email"
                type="email"
              />
            </FormLabel>
            <p>{errors.email?.message}</p>
            <div className={scss.input_wrapper}>
              <FormLabel>
                Password
                <Input
                  variant="outline"
                  {...register("password")}
                  size="lg"
                  placeholder="password"
                  type={show ? "text" : "password"}
                />
                <div className={scss.icon_wrapper}>
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
              </FormLabel>
              <p>{errors.password?.message}</p>
            </div>
            <FormLabel>
              Re-enter Password
              <Input
                variant="outline"
                {...register("passwordConfirmation")}
                size="lg"
                placeholder="password"
                type="password"
              />
            </FormLabel>
            <p>{errors.passwordConfirmation?.message}</p>
            <Input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
