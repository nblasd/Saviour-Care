import React from "react";
import Image from "next/image";
function Finder() {
  return (
    <main id="Finder">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] md:w-[100%] lg:w-[90%] xl:w-[80%] flex flex-col md:flex-row justify-between items-center mt-60">
          <Image
            src="/assets/images/finder.png"
            width={665}
            height={474}
            alt="logo"
          />
          <div className="flex flex-col items-center justify-center">
          <h2 className="">Find a Doctor near you</h2>
            <hr className="w-[70px] border-t-2 border-[#462E6A] py-3 mt-5" />
            <p className="para py-14">
            Our  app and web portal allows you to find the doctor to your nearest location. 
            </p>
            {/* Button */}
            <div className="mt-10 rounded-3xl border  border-[#458FF6] hover:scale-110 duration-300">
              <button className="learnBtn px-7">Find now</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Finder;
