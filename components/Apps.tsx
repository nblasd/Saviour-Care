import React from "react";
import Image from "next/image";
function Apps() {
  return (
    <main id="Apps">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] flex flex-col md:flex-row justify-between items-center mt-60">
          <div className="md:w-[40%] flex flex-col items-center">
            <h2 className="">Download our Saviour Care mobile app</h2>
            <hr className="w-[70px] border-t-2 border-[#462E6A] py-3 mt-5" />
            <p className="para py-14">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            {/* Button */}
            <div className="mt-10 rounded-3xl border  border-[#458FF6] hover:scale-110 duration-300">
              <button className="learnBtn px-7">Download ↓</button>
            </div>
          </div>

          <Image
            src="/../public/assets/images/apps.png"
            width={626}
            height={463}
            alt="logo"
          />
        </div>
      </div>
    </main>
  );
}

export default Apps;
