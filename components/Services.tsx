import React from "react";
import Image from "next/image";

function Services() {
  return (
    <main>
      <div className="w-full flex justify-center items-center">
        <div className="w-[80%] mt-60 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h2>Services we Offer</h2>
            <hr className="w-[70px] border-t-2 border-[#462E6A] py-3 mt-5" />
            <p className="shp">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </p>
          </div>
          {/* cols section */}
          <div className="grid md:grid-cols-3 gap-10 xl:w-[90%] 2xl:w-[65%] mt-16">
            {/* first row */}
            <div className="flex bg-white flex-col items-center w-[90%] rounded-2xl shadow-lg">
              <Image
                className="pt-10"
                src="/../public/assets/services/search.png"
                width={90}
                height={90}
                alt="logo"
              />
              <h3>Search doctor</h3>
              <p className="colsPara p-5">
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
            <div className="flex bg-white flex-col items-center w-[90%] rounded-2xl  shadow-lg">
              <Image
                className="pt-10"
                src="/../public/assets/services/med.png"
                width={61.86}
                height={85}
                alt="logo"
              />
              <h3>Online pharmacy</h3>
              <p className="colsPara p-5">
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
            <div className="flex bg-white flex-col items-center w-[90%] rounded-2xl  shadow-lg">
              <Image
                className="pt-10"
                src="/../public/assets/services/contact.png"
                width={67.29}
                height={95}
                alt="logo"
              />
              <h3>Consultation</h3>
              <p className="colsPara p-5">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            {/* second row */}
            <div className="flex bg-white flex-col items-center w-[90%] rounded-2xl  shadow-lg">
              <Image
                className="pt-10"
                src="/../public/assets/services/ac.png"
                width={67.08}
                height={95}
                alt="logo"
              />
              <h3>Details info</h3>
              <p className="colsPara p-5">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="flex bg-white flex-col items-center w-[90%] rounded-2xl  shadow-lg">
              <Image
                className="pt-10"
                src="/../public/assets/services/firstaid.png"
                width={80}
                height={71}
                alt="logo"
              />
              <h3>Emergency care</h3>
              <p className="colsPara p-5">
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
            <div className="flex bg-white flex-col items-center w-[90%] rounded-2xl  shadow-lg">
              <Image
                className="pt-10"
                src="/../public/assets/services/report.png"
                width={74}
                height={95}
                alt="logo"
              />
              <h3>Tracking</h3>
              <p className="colsPara p-5">
                Track and save your medical history and health data
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="mt-10 rounded-3xl border  border-[#458FF6] hover:scale-110 duration-300">
            <button className="learnBtn px-7">Learn more</button>
          </div>
        </div>
      </div>
      {/* blue-bg */}
      <div className="hidden lg:block absolute left-0 top-[720px] z-[-10]">
        <Image
          src="/../public/assets/images/blue-bg.png"
          width={937.96}
          height={671.38}
          alt="logo"
        />
      </div>
    </main>
  );
}

export default Services;
