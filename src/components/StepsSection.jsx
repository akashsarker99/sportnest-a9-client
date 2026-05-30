import React from 'react';
import { FaCalendarCheck, FaFutbol, FaUserPlus } from 'react-icons/fa6';

const StepsSection = () => {
    return (
           <div className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700">
            Start Playing In
            <span className="bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">{" "}
              3 Easy Steps
            </span>
          </h2>

          <p className="text-gray-500 mt-5 leading-8">
            SportNest makes sports facility booking simple, fast, and
            hassle-free for everyone.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 flex flex-col items-center py-14 space-y-4 rounded-3xl relative bg-white px-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#24B1B1]">
            <span className="h-11 w-11 flex items-center justify-center font-bold bg-linear-to-l from-[#24B1B1] to-[#007979] rounded-full text-white absolute right-6 top-6">
              01
            </span>

            <div className="bg-linear-to-l from-[#24B1B1]/10 to-[#007979]/10 h-20 w-20 rounded-full flex justify-center items-center">
              <FaUserPlus className="text-4xl text-[#007979]"></FaUserPlus>
            </div>

            <h2 className="text-2xl font-bold text-slate-700">
              Create Account
            </h2>

            <p className="text-gray-500 text-center leading-7">
              Sign up easily and create your SportNest account to access premium
              sports facilities.
            </p>
          </div>

          <div className="border border-gray-200 flex flex-col items-center py-14 space-y-4 rounded-3xl relative bg-white px-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#24B1B1]">
            <span className="h-11 w-11 flex items-center justify-center font-bold bg-linear-to-l from-[#24B1B1] to-[#007979] rounded-full text-white absolute right-6 top-6">
              02
            </span>

            <div className="bg-linear-to-l from-[#24B1B1]/10 to-[#007979]/10 h-20 w-20 rounded-full flex justify-center items-center">
              <FaCalendarCheck className="text-4xl text-[#007979]"></FaCalendarCheck>
            </div>

            <h2 className="text-2xl font-bold text-slate-700">Book Facility</h2>
            <p className="text-gray-500 text-center leading-7">
              Browse available sports venues and reserve your preferred time
              slot instantly.
            </p>
          </div>

          <div className="border border-gray-200 flex flex-col items-center py-14 space-y-4 rounded-3xl relative bg-white px-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#24B1B1]">
            <span className="h-11 w-11 flex items-center justify-center font-bold bg-linear-to-l from-[#24B1B1] to-[#007979] rounded-full text-white absolute right-6 top-6">
              03
            </span>

            <div className="bg-linear-to-l from-[#24B1B1]/10 to-[#007979]/10 h-20 w-20 rounded-full flex justify-center items-center">
              <FaFutbol className="text-4xl text-[#007979]"></FaFutbol>
            </div>

            <h2 className="text-2xl font-bold text-slate-700">Start Playing</h2>
            <p className="text-gray-500 text-center leading-7">
              Enjoy premium sports experiences with your team, friends, or
              community anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default StepsSection;