import React from "react";
import scss from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@chakra-ui/react";

const NavbarSection = () => {
  return (
    <>
      <nav>
        <div className={scss.left}>
          <ul>
            <li>
              <Image
                src={"/myntracloneimages/logo.png"}
                alt=""
                width={1000}
                height={1000}
              ></Image>
            </li>
            <li>
              <Link href="#">Men</Link>
            </li>
            <li>
              <Link href="#">women</Link>
            </li>
            <li>
              {" "}
              <Link href="#">kids</Link>
            </li>
            <li>
              {" "}
              <Link href="#">Home</Link>
            </li>
            <li>
              {" "}
              <Link href="#">Beauty</Link>
            </li>
            <li>
              {" "}
              <Link href="#">Studio</Link>
            </li>

            <li>
              <Input
                placeholder="Search for products, brands and more"
                className="desktop-searchBar"
                value=""
                width={"30%"}
              />
              df
            </li>
            <li>
              <div className={scss.icons}>
                <div className="profile">Profile</div>
                <div className="wish">Wishlist</div>
                <div className="bag">Bag</div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Image
          src={"/myntracloneimages/myntraclone.png"}
          alt="gsdgs"
          width={1500}
          height={600}
        ></Image>
      </div>
      <div className={scss.image_div}>
        <Image
          src={"/myntracloneimages/pic1.webp"}
          alt="gsdgs"
          width={660}
          height={1000}
        ></Image>
        <Image
          src={"/myntracloneimages/pic2.webp"}
          alt="gsdgs"
          width={660}
          height={1000}
        ></Image>
      </div>
    </>
  );
};

export default NavbarSection;
