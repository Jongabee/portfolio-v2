"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const JonSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv-Jonatan-Mosqueda.pdf";
    link.download = "cv-Jonatan-Mosqueda.pdf";
    link.click();
  };
  return (
    <section className="lg:py-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Imagen */}
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 sm:order-2 col-span-4 sm:col-span-5 mt-4 lg:mt-0"
        >
          {/* Contenedor con estilos responsivos */}
          <div className="flex sm:block justify-center">
            <div className="w-48 h-48 sm:w-72 sm:h-72 overflow-hidden rounded-full">
              <Image
                src="/images/1.jpg"
                alt="Jonatan imagen"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 sm:order-1 col-span-8 sm:col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r lg:text-7xl from-primary-400 to-secondary-600">
              Soy Jona{""}
            </span>
            <br />
            <TypeAnimation
              sequence={["Developer ", 1500, "UI/UX Designer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Gusto en saludarte...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              href="/#contact"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 sm:mt-0"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Contáctame
              </span>
            </Link>

            {/* <button
              onClick={handleDownload}
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 sm:mt-0"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Descargá mi CV
              </span>
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JonSection;
