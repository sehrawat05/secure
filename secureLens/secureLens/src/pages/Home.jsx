import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="bg-gradient-to-r from-purple-300 to-slate-300 w-full min-h-screen p-6">
      <div className="pt-10 flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-3xl text-gray-800">
          Welcome to{" "}
          <span className="ml-2 text-4xl text-purple-700 hover:text-purple-900 transition-transform duration-300 transform hover:scale-110">
            secureLens
          </span>
          <lord-icon
            src="https://cdn.lordicon.com/wyupmbaf.json"
            trigger="hover"
            className="w-8 h-8 ml-2 hover:w-10 hover:h-10 transition-transform duration-300"
          ></lord-icon>
        </h1>
        <p className="text-xl italic text-gray-700">
          Your website, your most trusted partner in safety.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row m-6 lg:m-14 p-4 gap-8">
        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-xl p-6 flex flex-col justify-center items-center gap-5 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-purple-800">
            "Unlock the Power of AI for Smarter CCTV Analysis!"
          </h3>
          <p className="leading-loose text-gray-700 text-justify">
            Tired of manually reviewing hours of CCTV footage? Our advanced
            AI-powered platform is designed to make your surveillance smarter,
            faster, and more efficient. Whether it's detecting suspicious
            activities, tracking movements, or identifying critical events, our
            intelligent system analyzes footage with pinpoint accuracy—saving
            you valuable time and effort.
          </p>
          <p className="leading-loose text-gray-700 text-justify">
            No more missing important details. Our AI highlights key moments,
            provides real-time alerts, and helps you make data-driven security
            decisions with ease. Whether you're securing your home, office, or
            business, we've got you covered.
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-xl p-6 flex flex-col justify-center items-center gap-5 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-purple-800">
            Ready to transform the way you monitor?
          </h3>
          <p className="leading-loose text-gray-700 text-center">
            <button
              className="border-2 border-purple-500 rounded-md bg-purple-400 hover:bg-purple-600 text-white p-2 px-4 font-bold transition-colors duration-300"
              onClick={() => navigate("/login")} // Navigate to Login
            >
              Login
            </button>{" "}
            if you’re already a member, or{" "}
            <button
              className="border-2 border-purple-500 rounded-md bg-purple-400 hover:bg-purple-600 text-white p-2 px-4 font-bold transition-colors duration-300"
              onClick={() => navigate("/register")} // Navigate to Register
            >
              Register Here
            </button>{" "}
            to join us and experience the future of surveillance with AI!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
