// components/Navbar.js
import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="teal.500"
      color="white"
    >
      <Heading size="md">
        <Image
          src={"/myntracloneimages/logo.png"}
          alt="dgfkh"
          width={50}
          height={50}
          mx={10}
        ></Image>
      </Heading>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
          aria-label={""}
        />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        width="100%"
        alignItems="center"
        flexGrow={1}
      >
        <Link href="#" style={{ marginRight: "18px" }}>
          Men
        </Link>
        <Link href="#" style={{ marginRight: "18px" }}>
          Women
        </Link>
        <Link href="#" style={{ marginRight: "18px" }}>
          kids
        </Link>
        <Link href="#" style={{ marginRight: "18px" }}>
          Contact
        </Link>
        <Link href="/login" style={{ marginRight: "18px" }}>
          Login
        </Link>
        <Link href="/register" style={{ marginRight: "18px" }}>
          Register
        </Link>
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <ul>
              <li>
                <Link href="#" style={{ marginTop: "18px" }} onClick={onClose}>
                  Men
                </Link>
              </li>
              <li>
                <Link href="#" style={{ marginTop: "18px" }} onClick={onClose}>
                  Women
                </Link>
              </li>
              <li>
                <Link href="#" style={{ marginTop: "18px" }} onClick={onClose}>
                  kids
                </Link>
              </li>
              <li>
                <Link href="#" style={{ marginTop: "18px" }} onClick={onClose}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  style={{ marginTop: "18px" }}
                  onClick={onClose}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  style={{ marginTop: "18px" }}
                  onClick={onClose}
                >
                  Register
                </Link>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
