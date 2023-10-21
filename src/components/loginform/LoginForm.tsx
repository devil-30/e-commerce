import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, Container, FormLabel, Input } from "@chakra-ui/react";
import scss from "./loginform.module.scss";

const schema = yup
  .object({
    userName: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
  })
  .required();
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //   const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <div className="container">
        <div className={scss.h2_design}>
          <h1>Login In</h1>
        </div>
        <div className={scss.login_form}>
          <form onSubmit={handleSubmit(console.log)}>
            <FormLabel>
              UserName:
              <Input
                variant="outline"
                {...register("userName")}
                size="lg"
                placeholder="User Name"
              />
            </FormLabel>

            <p>{errors.userName?.message}</p>

            <FormLabel>
              password:
              <Input
                {...register("password")}
                size="lg"
                type="password"
                placeholder="password"
              />
            </FormLabel>
            <p>{errors.password?.message}</p>
            {/* <Button colorScheme="blue">Button</Button> */}
            <Input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
