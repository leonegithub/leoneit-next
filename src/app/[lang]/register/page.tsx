//// filepath: /Users/d.carpentiero/Downloads/leoneamerica-next/src/app/register/page.tsx
"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import parse from "html-react-parser";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const paese = formData.get("IN_Paese") as string;
    formData.append("FlgCE", "false");
    formData.append("IN_PAESE_IVA", paese);
    formData.append("IN_IPReg", "111.111.111");
    formData.append("IN_GRUPPO", "3");
    formData.append("IN_ICom", "1");
    formData.append("IN_PRV", "1");

    try {
      // Replace with your registration endpoint
      const response = await fetch(
        "https://php.leone.it/api/ws_leone/AddUser_lang_iva_char.php",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.ExitCode === 0) {
        // Registration successful – redirect to personal area (or login)
        toast.success(
          "You've successfully registered. Check your email inbox to verify your account."
        );
      } else {
        const errorMessage = toast.error(data.ReturnedError.join("<br/> "));
        parse(errorMessage as string);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordType = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    fieldId: string
  ): void => {
    const passwordInput = document.getElementById(fieldId) as HTMLInputElement;
    if (passwordInput) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        event.currentTarget.classList.remove("fa-eye");
        event.currentTarget.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        event.currentTarget.classList.remove("fa-eye-slash");
        event.currentTarget.classList.add("fa-eye");
      }
    }
  };

  return (
    <div className="container">
      <div className="p-4 ">
        <h3 className="pb-5 text-2xl font-semibold ">
          Create your Leone account
        </h3>
        <form id="registrationForm" onSubmit={handleRegister}>
          {/* Grid wrapper: one column on mobile, two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Nome"
                name="IN_Nome"
                placeholder="Name"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Nome"
              ></span>
            </div>
            {/* Surname */}
            <div className="flex flex-col">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Cognome"
                name="IN_Cognome"
                placeholder="Surname"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Cognome"
              ></span>
            </div>
            {/* Email – full width on desktop */}
            <div className="flex flex-col ">
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Email"
                name="IN_Email"
                placeholder="Email"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Email"
              ></span>
            </div>
            {/* Business Name (optional) – full width */}
            <div className="flex flex-col ">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_RS"
                name="IN_RS"
                placeholder="Business Name (optional)"
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_RS"
              ></span>
            </div>
            {/* Password */}
            <div className="relative flex flex-col">
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Pwd"
                name="IN_Pwd"
                placeholder="Password"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Pwd"
              ></span>
              <i
                className="fa-regular fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                id="togglePassword"
                onClick={(e) => togglePasswordType(e, "IN_Pwd")}
              ></i>
            </div>
            {/* Repeat Password */}
            {/*     <div className="relative flex flex-col">
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Pwd_confirm"
                name="IN_Pwd_confirm"
                placeholder="Repeat Password"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Pwd_confirm"
              ></span>
              <i
                className="fa-regular fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                id="togglePassword2"
                onClick={(e) => togglePasswordType(e, "IN_Pwd_confirm")}
              ></i>
            </div> */}
            {/* Country Select */}
            <div className="flex flex-col">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Paese"
                name="IN_Paese"
                required
              >
                <option value="">Select Country</option>
                <option value="USA">U.S.A.</option>
                <option value="PR">Puerto Rico</option>
                <option value="CA">Canada</option>
              </select>
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Paese"
              ></span>
            </div>
            {/* Address – full width */}
            <div className="flex flex-col ">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Indirizzo"
                name="IN_Indirizzo"
                placeholder="Address"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Indirizzo"
              ></span>
            </div>
            {/* ZIP Code */}
            <div className="flex flex-col">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_CAP"
                name="IN_CAP"
                placeholder="ZIP Code"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_CAP"
              ></span>
            </div>
            {/* City */}
            <div className="flex flex-col">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="IN_Citta"
                name="IN_Citta"
                placeholder="City"
                required
              />
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Citta"
              ></span>
            </div>
            {/* Select Type – full width */}
            <div className="flex flex-col">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="IN_Tipo"
                id="IN_Tipo"
                required
              >
                <option value="">Profession</option>
                <option value="9">DENTAL CLINIC</option>
                <option value="8">DENTIST</option>
                <option value="12">LABORATORY</option>
              </select>
              <span
                className="text-red-500 text-sm hidden"
                id="error_IN_Tipo"
              ></span>
            </div>
          </div>
          {/* Hidden Fields */}

          {/* Processing and Newsletter – full width */}
          {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-medium">Processing of personal data</p>
              <small>
                Pursuant to Article 13 of EU Regulation 2016/679 we inform you
                that your data are processed in accordance with the legislation
                for the protection of personal data, for contractual and
                administrative purposes. These data are processed with
                observance of all precautionary measures on security and
                confidentiality.{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://www.leone.it/azienda/policy-privacy.php"
                >
                  Read the full disclosure
                </a>
              </small>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="IN_PRV"
                  className="mr-2"
                  id="IN_PRV"
                  value="1"
                  required
                />
                <label className="cursor-pointer" htmlFor="IN_PRV">
                  I agree
                </label>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-medium">Subscribe to Leone newsletter</p>
              <small>
                In compliance with EU Regulation 2016/679, we ask for your
                consent to process your personal data in order to make you a
                participant in all our cultural, educational (events, courses,
                Orthodontics Bulletin, Exacone news, etc.) and commercial
                (catalogs, offers) initiatives promoted by us.
              </small>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="IN_ICom_acconsento"
                  className="mr-2"
                  name="IN_ICom"
                  value="1"
                  required
                />
                <label
                  htmlFor="IN_ICom_acconsento"
                  className="mr-5 cursor-pointer"
                >
                  I agree
                </label>
                <input
                  type="radio"
                  id="IN_ICom_non_acconsento"
                  className="mr-2"
                  name="IN_ICom"
                  value="0"
                  required
                />
                <label
                  htmlFor="IN_ICom_non_acconsento"
                  className="cursor-pointer"
                >
                  I do not agree
                </label>
              </div>
            </div>
          </div> */}
          <div className="flex mt-6">
            <button
              id="create"
              type="submit"
              className="bg-blue text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
