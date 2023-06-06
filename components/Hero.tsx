import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <main id="home">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex flex-col md:flex-row items-center justify-between mt-52">
          <div className="md:w-[35%]">
            <h1>Virtual healthcare Saviour for you</h1>
            <p className="heroPara py-10 mb-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />{" "}
              Aenean commodo ligula eget dolor. Aenean massa.{" "}
            </p>
            <button className="bg-[#458FF6] rounded-3xl text-white p-4 md:mt-14 hover:scale-110 duration-300">
              Consult today
            </button>
          </div>
          <div>
            <Image
              src="/../public/assets/images/hero.png"
              width={769}
              height={554}
              alt="logo"
            />
          </div>
        </div>
      </div>
      {/* Dot section */}
      <div className="absolute left-0 top-28 hidden xl:block">
      <Image
              src="/../public/assets/images/navDots.png"
              width={70}
              height={100}
              alt="logo"
            />
      </div>
    </main>
  );
}

export default Hero;
