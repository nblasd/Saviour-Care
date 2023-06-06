"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <main>
      <div className="fixed flex justify-between items-center bg-white w-full h-[100px] px-5 lg:px-32">
        <Image
          src="/../public/assets/logo/logo.png"
          width={201}
          height={41}
          alt="logo"
        />

        <div className="hidden md:flex items-center justify-between">
          <a href="/#home">
            <p className="px-5 navLinks hover:underline underline-offset-8 ">
              Home
            </p>
          </a>
          <a href="/#Finder">
            <p className="px-5 navLinks hover:underline underline-offset-8">
              Find a doctor
            </p>
          </a>
          <a href="/#Apps">
            <p className="px-5 navLinks hover:underline underline-offset-8">
              Apps
            </p>
          </a>
          
            <a href="/#test" className="px-5 navLinks hover:underline underline-offset-8 ">
              Testimonials
            </a>
          
       
            <a href="/#footer" className="px-5 navLinks hover:underline underline-offset-8 scroll-smooth">
              About us
            </a>
         
        </div>
        <div onClick={navHandler} className="md:hidden">
          <GiHamburgerMenu size={25} color="#93C1F9" />
        </div>
      </div>
      {/* Overlay */}
      <div
        className={
          nav
            ? "fixed md:hidden top-[0] left-[0] h-full w-full bg-black/50 "
            : "hidden"
        }
      />

      {/* Moblie menu */}
      <div
        className={
          nav
            ? "fixed md:hidden top-[0] left-[0]  h-screen w-[75%] bg-slate-200 ease-in duration-500"
            : "fixed md:hidden top-[0] left-[-100%]  h-screen w-[60%] bg-slate-200 ease-in duration-500"
        }
      >
        <div className="flex flex-col items-center">
          <div className="flex justify-between items-center mt-10 w-[80%]">
            <Image
              src="/../public/assets/logo/mobile-logo.png"
              width={40}
              height={40}
              alt="logo"
            />
            <div onClick={navHandler}>
              <GiCancel size={25} color="#93C1F9" />
            </div>
          </div>
          <div className="flex flex-col mt-10 ">
            <a href="/#home">
              <p
                onClick={navHandler}
                className="py-5 navLinks hover:underline underline-offs"
              >
                Home
              </p>
            </a>
            <a href="/#Finder">
              <p
                onClick={navHandler}
                className="py-5 navLinks hover:underline underline-offs"
              >
                Find a doctor
              </p>
            </a>
            <a href="/#Apps">
              <p
                onClick={navHandler}
                className="py-5 navLinks hover:underline underline-offs"
              >
                Apps
              </p>
            </a>
            <a href="/#test">
              <p
                onClick={navHandler}
                className="py-5 navLinks hover:underline underline-offs"
              >
                Testimonials
              </p>
            </a>
            <a href="/#footer">
              <p
                onClick={navHandler}
                className="py-5 navLinks hover:underline underline-offs"
              >
                About us
              </p>
            </a>
          </div>
          {/* border */}
          <div className="border border-gray-300 w-[80%] mt-10"></div>
          {/* Social icons */}

          <div className="flex justify-between items-center mt-16">
            <div className="px-2">
              <FaInstagram size={25} color="#d62976 " />
            </div>
            <div className="px-2">
              <FaFacebook size={25} color="#4267B2" />
            </div>
            <div className="px-2">
              {" "}
              <FaTwitter size={25} color=" #00acee" />
            </div>
            <div className="px-2">
              {" "}
              <FaLinkedin size={25} color="#0072b1" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
