import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categoryinfo = () => {
  return (
    <>
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1
              style={{
                fontFamily: "Roboto",
                fontSize: "48px",
                fontWeight: "200",
              }}
            >
              categories section
            </h1>
            <p>choose th categories from the below section</p>
          </div>
        </div>

        <div className="row " style={{ display: "flex" }}>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link href="#">
              <Image
                src={"/myntracloneimages/pic25.webp"}
                alt="hdd"
                width={300}
                height={200}
              ></Image>
            </Link>
            <h5>MEN</h5>
            <p>
              <Link href="/productdetails" className="btn btn-success">
                GO Shop
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link href="#">
              <Image
                src={"/myntracloneimages/pic25.webp"}
                alt="hdd"
                width={300}
                height={200}
              ></Image>
            </Link>
            <h5>MEN</h5>
            <p>
              <Link href="/productdetails" className="btn btn-success">
                GO Shop
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link href="#">
              <Image
                src={"/myntracloneimages/pic25.webp"}
                alt="hdd"
                width={300}
                height={200}
              ></Image>
            </Link>
            <h5>MEN</h5>
            <p>
              <Link href="/productdetails" className="btn btn-success">
                GO Shop
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categoryinfo;
