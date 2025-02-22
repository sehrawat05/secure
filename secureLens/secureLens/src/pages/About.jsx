import React from 'react';

const About = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-purple-200 p-6'>
      <h3 className='text-center font-extrabold text-4xl text-purple-800 drop-shadow-md mb-4'>
        About Us – Empowering Smarter Surveillance with AI
      </h3>
      <p className='text-center italic text-xl text-gray-700 mb-6'>
        Join us on our mission to create a safer, smarter world through the power of AI-driven insights.
      </p>

      <div className='flex justify-center items-center'>
        <div className='w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row transition-transform duration-500 hover:scale-105'>

          <div className='md:w-1/2 p-6 bg-gradient-to-br from-purple-300 to-purple-500 text-white'>
            <h2 className='font-bold text-3xl text-center mb-4'>WELCOME</h2>
            <p className='leading-relaxed text-justify'>
              Welcome to <span className='font-bold'>secureLens</span>, your trusted partner in advanced CCTV footage analysis powered by AI. Our platform is designed to make security effortless, efficient, and intelligent. Gone are the days of manually sifting through hours of footage—our cutting-edge AI technology does the hard work for you, identifying critical events, suspicious activities, and key moments with precision and speed.
              <br /><br />
              Whether you're a business owner, security professional, or an individual looking to enhance safety, our user-friendly platform offers seamless solutions tailored to your needs. With real-time alerts, smart tracking, and in-depth analytics, you can stay one step ahead, making informed decisions with confidence.
            </p>
          </div>

          <div className='md:w-1/2 p-6 bg-purple-50'>
            <h3 className='font-bold text-3xl text-center text-purple-700 mb-4'>OUR TEAM</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Kashika Malhotra", "Khushi Sehrawat", "Preeti Singh", "Annapurna"].map((member, index) => (
                <div
                  key={index}
                  className="w-[150px] h-[150px] bg-gradient-to-r from-purple-300 to-purple-500 rounded-xl shadow-lg flex items-center justify-center relative group overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                  <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
                    {member}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
