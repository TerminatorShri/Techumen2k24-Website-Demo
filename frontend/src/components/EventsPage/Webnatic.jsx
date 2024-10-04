import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import qrimage from "../../images/webnaticqr.jpg";
import webnaticImage from "../../images/webnaticImage.svg";
import calenderLogo from "../../images/calenderLogo.svg";
import clockLogo from "../../images/clockLogo.svg";
import contactLogo from "../../images/contactLogo.svg";
import moneyLogo from "../../images/moneyLogo.svg";
import gobackBtn from "../../images/goBackBtn.svg";
import rulebookLogo from "../../images/rulebook.svg";

function Webnatic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const getYearOfStudy = (year) => {
    if (year === "1st") return 1;
    if (year === "2nd") return 2;
    if (year === "3rd") return 3;
  };
  const onSubmit = async (data) => {
    try {
      // Create a FormData object
      let yearOfStudy = getYearOfStudy(data.yearOfStudy);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("collegeName", data.collegeName);
      formData.append("idCardPhoto", data.idCardPhoto[0]);
      formData.append("yearOfStudy", yearOfStudy);
      formData.append("email", data.email);
      formData.append("contactNum", data.contactNum);
      formData.append("laptopAvailable", data.laptopAvailable);
      formData.append("transactionId", data.transactionId);
      formData.append("transactionPhoto", data.transactionPhoto[0]);

      const response = await fetch(
        "http://localhost:8000/api/v1/techumen/webnatic",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      console.log("Registration successful:", responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="event-page-main-div w-full max-w-3xl mx-auto my-10 p-6 bg-gray-50 rounded-lg shadow-lg relative">
      {/* Go Back Button */}
      <button
        className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group mb-6"
        type="button"
        onClick={() => navigate("/")}
      >
        <div className="bg-blue-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
          <img src={gobackBtn} alt="goBack" />
        </div>
        <p className="translate-x-2 tajawal-font">Go Back</p>
      </button>

      {/* Title */}
      <h1 className="rowdy-font text-3xl font-bold text-center mb-2 text-black">
        Webnatic
      </h1>
      <p className="rowdy-font text-center text-lg mb-6 text-gray-700">
        Tailwind Your Web Development
      </p>

      {/* Event Info */}
      <div className="event-page-intro grid grid-rows-2 mb-2 sm:grid-cols-2 sm:grid-rows-1">
        <div className="event-page-intro-left flex justify-center items-center">
          <img
            src={webnaticImage}
            alt="webnatic-logo"
            className="w-[250px] h-[250px] rounded-full object-cover"
          />
        </div>
        <div className="event-page-intro-right flex flex-col justify-center text-gray-700">
          <p className="text-lg tajawal-font">
            A one-day workshop where you’ll learn to build a responsive website
            front-end using HTML, CSS, and Tailwind. Perfect for beginners and
            pros alike, it’s your chance to master modern web design in just a
            day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 acme-font sm:grid-cols-2 sm:grid-rows-1">
        {/* Card for Date of Event */}
        <div className="relative rounded-lg bg-slate-900 p-4">
          <div className="flex items-center mb-2">
            <img src={calenderLogo} alt="Calendar" className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold text-white">Date of Event</h3>
          </div>
          <p className="text-gray-300">12th October, 2024</p>
        </div>

        {/* Card for Timing of Event */}
        <div className="relative rounded-lg bg-slate-900 p-4">
          <div className="flex items-center mb-2">
            <img src={clockLogo} alt="Clock" className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold text-white">Timing of Event</h3>
          </div>
          <p className="text-gray-300">10AM - 5PM</p>
        </div>

        {/* Card for Entry Fee */}
        <div className="relative rounded-lg bg-slate-900 p-4">
          <div className="flex items-center mb-2">
            <img src={moneyLogo} alt="Money" className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold text-white">Entry Fee</h3>
          </div>
          <p className="text-gray-300">₹159 (With Refreshment)</p>
        </div>

        {/* Card for Contact Information */}
        <div className="relative rounded-lg bg-slate-900 p-4">
          <div className="flex items-center mb-2">
            <img src={contactLogo} alt="Contact" className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold text-white">
              Contact for any Query
            </h3>
          </div>
          <p className="text-gray-300">Aditya Baldawa : +918983985787</p>
          <p className="text-gray-300">Yash Kinikar : +918446160647</p>
        </div>
      </div>

      <div className="mb-6 mt-4 flex flex-col items-center gap-4 md:flex-row">
        {" "}
        {/* Change to flex-col for mobile and flex-row for md */}
        <h2 className="text-l font-semibold text-black playwrite-de-grund-font text-center">
          Discover all the essential information for the event right here
        </h2>
        <button
          className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-r from-[#6a11cb] to-[#2575fc] active:scale-95"
          type="button"
        >
          <span className="w-full h-full flex items-center gap-2 px-8 py-3 text-white rounded-[14px] bg-gradient-to-r from-[#6a11cb] to-[#2575fc]">
            <img src={rulebookLogo} alt="rulebookLogo" />
            RULEBOOK
          </span>
        </button>
      </div>

      {/* Form */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4 text-black acme-font">
          Register for Webnatic
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 fredoka-font"
        >
          {/* Participant Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-md font-bold mb-2"
            >
              Participant Name:
            </label>
            <input
              id="participantName"
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* College Name and ID Card Photo */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* College Name */}
            <div className="flex-1">
              <label
                htmlFor="collegeName"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                College Name:
              </label>
              <input
                id="collegeName"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                type="text"
                placeholder="Enter your college name"
                {...register("collegeName", {
                  required: "College Name is required",
                })}
              />
              {errors.collegeName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.collegeName.message}
                </p>
              )}
            </div>

            {/* ID Card Photo */}
            <div className="flex-1 mt-4 md:mt-0">
              {" "}
              {/* Add mt-4 for mobile spacing */}
              <label
                htmlFor="idCardPhoto"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                Upload ID Card Photo:
              </label>
              <input
                id="idCardPhoto"
                type="file"
                {...register("idCardPhoto", {
                  required: "ID Card Photo is required",
                })}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {errors.idCardPhoto && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.idCardPhoto.message}
                </p>
              )}
            </div>
          </div>

          {/* Year of Study and Laptop Available */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Year of Study */}
            <div className="flex-1">
              <label
                htmlFor="yearOfStudy"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                Year of Study:
              </label>
              <div className="flex space-x-4 mb-4">
                {" "}
                {/* Add margin-bottom for spacing */}
                {["1st", "2nd", "3rd"].map((year) => (
                  <label key={year} className="flex items-center space-x-2">
                    <input
                      id={`year-${year}`}
                      type="radio"
                      value={year}
                      {...register("yearOfStudy", {
                        required: "Year of study is required",
                      })}
                      className="form-radio h-4 w-4 text-blue-500"
                    />
                    <span className="text-black">{`${year}`}</span>
                  </label>
                ))}
              </div>
              {errors.yearOfStudy && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.yearOfStudy.message}
                </p>
              )}
            </div>

            {/* Laptop Available */}
            <div className="flex-1 flex items-center">
              <input
                id="laptopAvailable"
                type="checkbox"
                {...register("laptopAvailable", {
                  required: "Please check if you have a laptop available",
                })}
                className="hidden" // Hide the default checkbox
              />
              <label
                className="flex items-center cursor-pointer"
                htmlFor="laptopAvailable"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 200 200"
                  className="checkbox-svg w-6 h-6 mr-2" // Adjust size using Tailwind classes
                >
                  <mask fill="white" id="path-1-inside-1">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect
                    mask="url(#path-1-inside-1)"
                    strokeWidth="10"
                    className="checkbox-box fill-gray-200 stroke-[#3700ff]"
                    height="200"
                    width="200"
                  ></rect>
                  <path
                    strokeWidth="10"
                    d="M52 111.018L76.9867 136L149 64"
                    className="checkbox-tick stroke-[#3902ff]"
                  ></path>
                </svg>
                <span className="text-gray-700 text-md font-bold">
                  Laptop Available
                </span>
              </label>
            </div>

            {errors.laptopAvailable && (
              <p className="text-red-500 text-xs mt-1">
                {errors.laptopAvailable.message}
              </p>
            )}

            <style jsx>{`
              .checkbox-box {
                fill: rgba(207, 205, 205, 0.425);
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                transition: stroke-dashoffset 0.6s ease-in;
              }

              .checkbox-tick {
                stroke: #8c00ff;
                stroke-dasharray: 172;
                stroke-dashoffset: 172;
                transition: stroke-dashoffset 0.6s ease-in;
              }

              input[type="checkbox"]:checked + label .checkbox-box,
              input[type="checkbox"]:checked + label .checkbox-tick {
                stroke-dashoffset: 0; /* Show tick and fill */
              }
            `}</style>
          </div>
          {errors.laptopAvailable && (
            <p className="text-red-500 text-xs mt-1">
              {errors.laptopAvailable.message}
            </p>
          )}

          {/* Email and Contact Number */}
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
            {/* Email */}
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                Email:
              </label>
              <input
                id="email"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Contact Number */}
            <div className="flex-1 mt-4 md:mt-0">
              <label
                htmlFor="contactNum"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                Contact Number:
              </label>
              <input
                id="contactNum"
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                type="text"
                placeholder="Enter your contact number"
                {...register("contactNum", {
                  required: "Contact number is required",
                })}
              />
              {errors.contactNum && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.contactNum.message}
                </p>
              )}
            </div>
          </div>

          {/* Transaction ID and Transaction Photo with QR */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* QR Image */}
            <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
              <img src={qrimage} alt="QR Code" className="max-w-full h-80" />
            </div>

            {/* Transaction Details */}
            <div className="md:w-1/2 flex flex-col justify-center align-middle space-y-4 p-5">
              {/* Transaction ID */}
              <div>
                <label
                  htmlFor="transactionId"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Transaction ID:
                </label>
                <input
                  id="transactionId"
                  className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  type="text"
                  placeholder="Enter your transaction ID"
                  {...register("transactionId", {
                    required: "Transaction ID is required",
                  })}
                />
                {errors.transactionId && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.transactionId.message}
                  </p>
                )}
              </div>

              {/* Transaction Photo Input */}
              <div>
                <label
                  htmlFor="transactionPhoto"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Transaction Photo:
                </label>
                <input
                  id="transactionPhoto"
                  type="file"
                  {...register("transactionPhoto", {
                    required: "Transaction photo is required",
                  })}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {errors.transactionPhoto && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.transactionPhoto.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6 acme-font">
            <button
              type="submit"
              className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Webnatic;
