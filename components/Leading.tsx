import React from "react";
import Image from "next/image";
function Leading() {
  return (
    <main id="test">
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] mt-60 flex flex-col md:flex-row justify-between items-center">
          <Image
            src="/assets/images/leading.png"
            width={665}
            height={491}
            alt="logo"
          />
          <div className="2xl:w-[35%] flex flex-col items-center">
            <h2>Leading healthcare providers</h2>
            <hr className="w-[70px] border-t-2 border-[#462E6A] py-3 mt-5" />
            <p className="para">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <div className="mt-10 rounded-3xl border  border-[#458FF6] hover:scale-110 duration-300">
              <button className="learnBtn px-7">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Leading;
