import Image from "next/image";
import React from "react";
import scss from "./bannerimages.module.scss";

const Bannerimages = () => {
  return (
    <>
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

export default Bannerimages;
