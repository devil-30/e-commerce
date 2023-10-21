import {
  Button,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import scss from "./checkoutpage.module.scss";
import { TbTruckDelivery } from "react-icons/tb";

const Checkout = () => {
  return (
    <>
      <div className="row ">
        <div className="col-4 ">
          <img src="/myntracloneimages/pic20.webp" alt="kfjsd" />
        </div>
        <div className="col-8">
          <p>sale</p>
          <h2>T-shirt Europe</h2>
          <p className="my-2">
            Reimagine the feeling of a classic T-shirt. With our cotton
            T-shirts, everyday essentials no longer have to be ordinary.
          </p>
          <h5 className="bold">Select size</h5>
          <Button className="mx-2">S</Button>
          <Button className="mx-2">M</Button>
          <Button className="mx-2">L</Button>
          <Button className="mx-2">XL</Button>
          <h5 className="bold my-3">Select color</h5>
          <Button className={scss.button2_div}>White</Button>
          <Button>Black</Button>
          <h5 className="my-3">$45</h5>
          <Button className={scss.button_div}> ADD TO CART</Button>
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>product Information</Tab>
              <Tab>Exchange details</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <p>Material</p>
                <p>100%cotton</p>
              </TabPanel>
              <TabPanel>
                <TbTruckDelivery />
                <p style={{ fontWeight: "bold" }}>Fast delivery</p>
                <p>
                  Your package will arrive in 3-5 business days at your pick up
                  location or in the comfort of your home.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Checkout;
