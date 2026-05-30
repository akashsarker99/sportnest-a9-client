'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaClock, FaLocationDot, FaUsers } from 'react-icons/fa6';
import { motion } from "motion/react"

const FeatureCard = ({facility}) => {
     const {_id, name, facility_type, image, location, price_per_hour, capacity, available_slots } = facility;
    return (
        <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -7,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#24B1B1]  hover:shadow-xl flex flex-col h-full shadow">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        ></Image>

        <div className="absolute top-4 left-4 bg-linear-to-l from-[#24B1B1] to-[#007979] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
          {facility_type}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 leading-snug">{name}</h2>

            <div className="flex items-center gap-2 text-gray-500 mt-3">
              <FaLocationDot className="text-[#007979]"></FaLocationDot>
              <p>{location}</p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <h3 className="text-xl font-bold bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">
              {price_per_hour} TK
            </h3>
            <p className="text-sm text-gray-400">per hour</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-600 mt-6">
          <div className="flex items-center gap-2">
            <FaUsers className="text-[#007979]"></FaUsers>
            <p>{capacity} Players</p>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-[#007979]"></FaClock>
            <p>{available_slots[0]}</p>
          </div>
        </div>

        <div className="mt-auto pt-6 flex justify-end">
          <Link href={`/all-facilities/${_id}`}>
            <button className="py-5 rounded-2xl bg-linear-to-l from-[#24B1B1] to-[#007979] text-white font-semibold transition duration-300 shadow-md hover:scale-103 flex items-center gap-2 btn">
              Book Now
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
    );
};

export default FeatureCard;