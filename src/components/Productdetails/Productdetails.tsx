import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import scss from "./productdetail.module.scss";
import Checkout from "../checkoutpage/Checkout";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Productdetails = () => {
  const router = useRouter();
  return (
    <>
      <div className="row ">
        <div
          className="col-sm-1 col-md-3 col-lg-4 p-2 mt-3"
          style={{ width: "330px" }}
        >
          <Card maxW="sm">
            <CardBody>
              <Link href="/subcategory">
                <Image
                  src="/myntracloneimages/pic16.webp"
                  alt="Green double couch with wooden legs"
                  width={"500"}
                  height={"10"}
                  className={scss.imgsss}
                />
              </Link>
              <Stack mt="6" spacing="3">
                <Heading size="sm">T-shirts</Heading>
                <Text>This is perfect for modern tropical spaces, baroque</Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </div>

        <div
          className="col-sm-1 col-md-3 col-lg-4 p-2 mt-3"
          style={{ width: "330px" }}
        >
          {/* <Card maxW="sm">
            <CardBody>
              <Image
                src="/myntracloneimages/pic17.webp"
                alt="Green double couch with wooden legs"
                width={"500"}
                height={"10"}
                className={scss.imgsss}
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Shirts</Heading>
                <Text>This is perfect for modern tropical spaces, baroque</Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </div>
        <div
          className="col-sm-1 col-md-3 col-lg-4 p-2 mt-3"
          style={{ width: "330px" }}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src="/myntracloneimages/pic18.webp"
                alt="Green double couch with wooden legs"
                width={"500"}
                height={"10"}
                className={scss.imgsss}
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Jeans</Heading>
                <Text>This is perfect for modern tropical spaces, baroque</Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </div>
        <div
          className="col-sm-1 col-md-3 col-lg-4 p-2 mt-3"
          style={{ width: "330px" }}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src="/myntracloneimages/pic19.webp"
                alt="Green double couch with wooden legs"
                width={"500"}
                height={"10"}
                className={scss.imgsss}
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Shoes</Heading>
                <Text>This is perfect for modern tropical spaces, baroque</Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default Productdetails;
