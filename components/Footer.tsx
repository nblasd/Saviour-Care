import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <main id="footer">
      <div className="w-full footerbg flex justify-center items-center mt-60">
        <div className="w-[80%] grid md:grid-cols-5 gap-7 mt-10 md:mt-32 mb-20">
          <div className="col-span-2">
            <Image
              src="/assets/logo/logo.png"
              width={229.05}
              height={40}
              alt="logo"
            />
            <p className="text-white py-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </p>
            <span className="copyright">
              ©AK PVT LTD 2021. All rights reserved
            </span>
          </div>
          <div className="flex flex-col">
            <span className="footerh cursor-pointer w-fit">Company</span>
            <span className="footerp cursor-pointer hover:underline w-fit">About</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Testimonials</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Find a docter</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Apps</span>
          </div>

          <div className="flex flex-col">
            <span className="footerh cursor-pointer w-fit ">Region</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Link</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Link</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Link</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Link</span>
          </div>

          <div className="flex flex-col">
            <span className="footerh cursor-pointer w-fit">Help</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Help center</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Contact support</span>
            <span className="footerp cursor-pointer hover:underline w-fit">Instruction</span>
            <span className="footerp cursor-pointer hover:underline w-fit">How it works</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;
