import {
  Button,
  FormLabel,
  Input,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import scss from "./checkoutpreview.module.scss";
import { BiLogoMastercard } from "react-icons/bi";
import { RiVisaFill } from "react-icons/ri";
import { clsx } from "@/common/string";

const schema = yup
  .object({
    name: yup.string().required("username is required"),
    mobile: yup.string().required("mobile is required"),
    address: yup.string().required("address is required"),
  })
  .required();

const Checkoutpreview = () => {
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
      <div className="row">
        <div
          // className={clsx(scss.mainblock, "col-8")}
          className={`${scss.mainblock} col-8`}
        >
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>shipping address</Tab>
              <Tab>Payments</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <div className="container">
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
                        Mobile no:
                        <Input
                          variant="outline"
                          {...register("mobile")}
                          size="lg"
                          placeholder="mobile number"
                          type="number"
                        />
                      </FormLabel>
                      <p>{errors.mobile?.message}</p>
                      <FormLabel>
                        Address:
                        <Input
                          variant="outline"
                          {...register("address")}
                          size="lg"
                          placeholder="address "
                          type="string"
                        />
                      </FormLabel>
                      <p>{errors.address?.message}</p>
                      <Input type="submit" />
                    </form>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="container">
                  <div className={scss.paymentpage_header}>
                    <h3>Payment</h3>

                    <div style={{ display: "flex" }}>
                      <BiLogoMastercard size={40} />

                      <RiVisaFill size={40} />
                    </div>
                  </div>
                  <div>
                    <FormLabel>
                      card holder name
                      <Input variant="flushed" placeholder="" />
                    </FormLabel>
                    <FormLabel>
                      card details
                      <Input variant="flushed" placeholder="" />
                    </FormLabel>
                    <div className="row">
                      <div className="col-6">
                        <FormLabel>
                          expiry
                          <Input variant="flushed" placeholder="" />
                        </FormLabel>
                      </div>
                      <div className="col-6">
                        <FormLabel>
                          cvv
                          <Input variant="flushed" placeholder="" />
                        </FormLabel>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className="col-4">
          <div className="container">
            <h2>order summary</h2>
            <p>2 items </p>
            <div className="row">
              <div className={`${scss.mainblock} col-4`}>
                <img src="/myntracloneimages/pic18.webp" alt="dfd"></img>
              </div>
              <div className={`${scss.mainblock} col-8`}>
                <p>$26.80</p>
                <p> solid red polo tshirt</p>
                <p>Qty 1</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className={`${scss.mainblock} col-4`}>
                <img src="/myntracloneimages/pic18.webp" alt="dfd"></img>
              </div>
              <div className={`${scss.mainblock} col-8`}>
                <p>$26.80</p>
                <p> solid red polo tshirt</p>
                <p>Qty 1</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex ">
            <p className="mx-20">subtotal</p>
            <p>$34</p>
          </div>
          <div className="d-flex ">
            <p className="mx-20">subtotal</p>
            <p>$34</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkoutpreview;
