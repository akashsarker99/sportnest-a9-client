'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"
import BookingCancelAlert from './BookingCancelAlert';
const BookingCard = ({booking}) => {
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
      }} className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl">
  <div className="flex flex-col md:flex-row">
    <Image
      src={booking.facilityImage}
      height={200}
      width={300}
      alt={booking.facilityName}
      className="w-full md:w-60 lg:w-70 h-45 md:h-auto object-cover"></Image>

    <div className="flex-1 p-3 md:p-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-700">{booking.facilityName}</h2>
          <p className="text-gray-500 text-sm mt-1">{booking.timeSlot}</p>
        </div>

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold w-fit">{booking.status}</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div>
          <p className="text-gray-400 text-xs">Booking Date</p>
          <h3 className="font-semibold text-slate-700 text-sm md:text-base mt-1">{booking.bookingDate}</h3>
        </div>

        <div>
          <p className="text-gray-400 text-xs">Time Slot</p>
          <h3 className="font-semibold text-slate-700 text-sm md:text-base mt-1">{booking.timeSlot}</h3>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-gray-400 text-xs">Total Price </p>
          <h3 className="font-bold text-lg md:text-xl bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent mt-1">{booking.totalPrice} Tk</h3>
        </div>

      </div>

      <div className="mt-5 flex justify-end">
        <BookingCancelAlert booking={booking}></BookingCancelAlert>

      </div>

    </div>

  </div>
</motion.div>
    );
};

export default BookingCard;