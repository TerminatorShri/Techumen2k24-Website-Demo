import React from "react";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import webnaticImage from "../../images/webnaticImage.svg";
import compileItImage from "../../images/compileItImage.svg";
import codeBlastImage from "../../images/codeBlastImage.svg";
import puzzleVaultImage from "../../images/puzzleVaultImage.svg";
import universeLogo from "../../images/universe.png";
import sakalLogo from "../../images/sakal.png";
import earthImage from "../../images/earth.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page-main-div z-50 bg-transparent px-4 py-8">
      {/* Header Section */}
      <p className="text-lg md:text-2xl uppercase font-semibold mb-2 text-center nunito-font">
        Association of Computer Science and Engineering Students
      </p>
      <p className="text-lg text-center nunito-font">Presents</p>
      <h1 className="text-5xl md:text-7xl font-extrabold font-sans tracking-tight text-center bg-gradient-to-tr from-gray-700 via-slate-200 to-white bg-clip-text uppercase rowdy-font text-transparent">
        Techumen 2<span className="lowercase">k</span>24
      </h1>

      {/* Timer Component */}
      <Timer />

      <div className="md:mx-10 px-5 md:px-20 py-10 relative">
        <p className="text-center tajawal-font text-md md:text-lg relative z-10">
          Techumen is an annual student-driven tech fest designed by ACSES to
          inspire every tech enthusiast. It’s a perfect blend of competition,
          creativity, and learning, offering coding contests, puzzles,
          workshops, and more. Techumen is about making memories, building
          skills, and having fun together.
        </p>
      </div>

      {/* Individual Events */}
      <section className="my-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 tajawal-font">
          Individual Events
        </h3>
        <div
          className="event-card-div max-w-6xl mx-auto md:flex-row flex flex-wrap md:gap-10 gap-8"
          id="event-grid"
        >
          {/* Webnatic Event Card */}
          <div className="w-full md:w-[48%] border-2 bg-opacity-50 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row py-5 px-4 md:px-7">
            <img
              src={webnaticImage}
              alt="Webnatic"
              className="w-full md:w-1/3 h-auto object-cover rounded-l-2xl mb-4 md:mb-0 md:m-3"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="event-card-title text-lg md:text-xl font-semibold mb-1 rowdy-font">
                Webnatic
              </h2>
              <p className="event-card-quote text-sm md:text-md mb-3 rowdy-font">
                Tailwind Your Web Development
              </p>
              <p className="event-card-desc text-sm md:text-md mb-4 flex-grow tajawal-font">
                A one-day workshop where you’ll learn to build a responsive
                website front-end using HTML, CSS, and Tailwind. Perfect for
                beginners and pros alike, it’s your chance to master modern web
                design in just a day.
              </p>
              <div className="mt-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-4 md:px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
                  <span className="text-md">RULEBOOK</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                </button>

                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-sm md:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 text-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  onClick={() => navigate("/webnatic")}
                >
                  Explore
                  <svg
                    className="w-6 md:w-8 h-6 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 md:p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* CodeBlast Event Card */}
          <div className="w-full md:w-[48%] border-2 bg-opacity-50 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row py-5 px-4 md:px-7">
            <img
              src={codeBlastImage}
              alt="CodeBlast"
              className="w-full md:w-1/3 h-auto object-cover rounded-l-2xl mb-4 md:mb-0 md:m-3"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="event-card-title text-xl font-semibold mb-1 rowdy-font">
                CodeBlast
              </h2>
              <p className="event-card-quote text-md mb-3 rowdy-font">
                Elite Algorithmic Showdown
              </p>
              <p className="event-card-desc text-md mb-4 flex-grow tajawal-font">
                An intense online coding contest where elite coders battle it
                out to solve algorithmic challenges. Sharpen your logic and
                compete for the top spot in this high-speed coding showdown.
              </p>
              <div className="mt-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-4 md:px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
                  <span className="text-md">RULEBOOK</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                </button>

                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-sm md:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 text-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  onClick={() => navigate("/codeblast")}
                >
                  Explore
                  <svg
                    className="w-6 md:w-8 h-6 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 md:p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Events */}
      <section className="my-8">
        <h3 className="text-3xl font-semibold text-center mb-6 tajawal-font">
          Team Events
        </h3>
        <div className="event-card-div max-w-6xl mx-auto flex flex-wrap gap-10">
          {/* Compile It Event Card */}
          <div className="w-full md:w-[48%] border-2 bg-opacity-50 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row py-5 px-4 md:px-7">
            <img
              src={compileItImage}
              alt="Compile It"
              className="w-full md:w-1/3 h-auto object-cover rounded-l-2xl mb-4 md:mb-0 md:m-3"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="event-card-title text-xl font-semibold mb-1 rowdy-font">
                Compile It
              </h2>
              <p className="event-card-quote text-md mb-3 rowdy-font">
                Two Brains, One Breakthrough
              </p>
              <p className="event-card-desc text-md mb-4 flex-grow tajawal-font">
                In this duo-based event, teams analyze, debug, and solve coding
                challenges together. It’s a test of teamwork and technical
                skills, where speed and synergy lead to success.
              </p>
              <div className="mt-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-4 md:px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
                  <span className="text-md">RULEBOOK</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                </button>

                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-sm md:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 text-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  onClick={() => navigate("/compile-it")}
                >
                  Explore
                  <svg
                    className="w-6 md:w-8 h-6 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 md:p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Puzzle Vault Event Card */}
          <div className="w-full md:w-[48%] border-2 bg-opacity-50 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row py-5 px-4 md:px-7">
            <img
              src={puzzleVaultImage}
              alt="Puzzle Vault"
              className="w-full md:w-1/3 h-auto object-cover rounded-l-2xl mb-4 md:mb-0 md:m-3"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="event-card-title text-xl font-semibold mb-1 rowdy-font">
                Puzzle Vault
              </h2>
              <p className="event-card-quote text-md mb-3 rowdy-font">
                Crack the Puzzle, Uncover the Mystery
              </p>
              <p className="event-card-desc text-md mb-4 flex-grow tajawal-font">
                A thrilling mystery-solving challenge where you’ll face
                intricate puzzles and riddles, racing against time to unlock the
                ultimate prize. Do you have what it takes to crack the vault?
              </p>
              <div className="mt-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-4 md:px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
                  <span className="text-md">RULEBOOK</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                </button>

                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center shadow-xl text-sm md:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 text-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  onClick={() => navigate("/puzzle-vault")}
                >
                  Explore
                  <svg
                    className="w-6 md:w-8 h-6 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 md:p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <div className="sponsor-div mt-10 mb-10">
        <h2 className="text-center text-2xl font-bold mb-4 tajawal-font">
          Our Sponsors
        </h2>

        <div className="flex justify-center space-x-10">
          <div className="text-center">
            <p className="mb-2 text-md font-semibold playwrite-de-grund-font">
              Title Sponsor
            </p>
            <img
              src={universeLogo}
              alt="universe-logo"
              className="w-40 h-auto"
            />
          </div>

          <div className="text-center">
            <p className="mb-2 text-md font-semibold playwrite-de-grund-font">
              Media Partner
            </p>
            <img src={sakalLogo} alt="sakal-logo" className="w-40 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
