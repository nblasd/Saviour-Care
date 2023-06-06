"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Scroll() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-[90%] left-[85%] animate-bounce duration-500 ${showImage ? "opacity-100" : "opacity-0"}`}>
      <a href="/#home">
        <Image
          src="/assets/images/scroll.png"
          width={50}
          height={40}
          alt="logo"
        />
      </a>
    </div>
  );
}

export default Scroll;
