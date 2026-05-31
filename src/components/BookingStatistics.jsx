import React from 'react';
import { FaCalendarCheck, FaLocationDot, FaUsers } from 'react-icons/fa6';
import { MdSportsSoccer } from 'react-icons/md';

const BookingStatistics = () => {
    return (
        <div>
             <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
     <h2 className="text-4xl md:text-5xl font-bold text-slate-700">Booking
          <span className="bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">{" "}Statistics</span>
        </h2>
        <p className="text-gray-500 mt-5 leading-8">
          Trusted by sports enthusiasts across Bangladesh. Thousands of
          successful bookings and growing every day.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
          <div className="w-16 h-16 mx-auto rounded-full bg-linear-to-l from-[#24B1B1] to-[#007979] flex items-center justify-center text-white text-3xl">
           <MdSportsSoccer />
          </div>
          <h3 className="text-4xl font-bold text-slate-700 mt-5">120+</h3>
          <p className="text-gray-500 mt-2">Sports Facilities</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-linear-to-l from-[#24B1B1] to-[#007979] flex items-center justify-center text-white text-2xl">
            <FaCalendarCheck></FaCalendarCheck>
          </div>
          <h3 className="text-4xl font-bold text-slate-700 mt-5">2,700+</h3>
          <p className="text-gray-500 mt-2">Successful Bookings</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
          <div className="w-16 h-16 mx-auto rounded-full bg-linear-to-l from-[#24B1B1] to-[#007979] flex items-center justify-center text-white text-2xl">
            <FaUsers></FaUsers>
          </div>

          <h3 className="text-4xl font-bold text-slate-700 mt-5">850+</h3>
          <p className="text-gray-500 mt-2">Active Players</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
          <div className="w-16 h-16 mx-auto rounded-full bg-linear-to-l from-[#24B1B1] to-[#007979] flex items-center justify-center text-white text-2xl">
            <FaLocationDot></FaLocationDot>
          </div>

          <h3 className="text-4xl font-bold text-slate-700 mt-5">15+</h3>
          <p className="text-gray-500 mt-2">Cities Covered</p>
        </div>
      </div>
    </div>
</div>
    );
};

export default BookingStatistics;