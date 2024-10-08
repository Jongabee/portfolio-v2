"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send-message";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Mensaje enviado.");
        setEmailSubmitted(true);

        Swal.fire({
          title: "¡Éxito!",
          text: "Mensaje enviado exitosamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
          background: "#f9f9f9",
          color: "#333",
          iconColor: "#28a745",
          confirmButtonColor: "#4CAF50",
          backdrop: `
            rgba(0, 0, 0, 0.5)
            url('https://cdn.pixabay.com/photo/2018/01/01/15/24/flower-3057783_960_720.jpg') 
            left top 
            no-repeat
          `,
          customClass: {
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
          willOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.borderRadius = "20px";
            confirmButton.style.border = "none";
            confirmButton.style.padding = "10px 20px";
            confirmButton.style.fontSize = "16px";
            confirmButton.style.transition = "background-color 0.3s";
          },
        });
      } else {
        Swal.fire({
          title: "Error",
          text: resData.error || "Hubo un problema al enviar el mensaje.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Conectemos</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada
          está siempre abierta. Si tienes alguna pregunta o simplemente quieres
          saludar, <br /> ¡Haré todo lo posible para responderte!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Jongabee">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/jongabee">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            ¡Correo electrónico enviado exitosamente!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Tu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jongabee@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Sólo pasaba a saludar..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Vamos a hablar acerca de..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
