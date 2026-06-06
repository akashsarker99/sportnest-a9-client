import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const MyBookingPage = async () => {
       const session = await auth.api.getSession({
    headers: await headers(),
});
const {token} = await auth.api.getToken({
    headers: await headers()
  })
const user = session?.user;
     const res = await fetch(`http://localhost:5000/booking/${user?.id}`,{
        headers:{
        authorization: `Bearer ${token}`
  }
     });
    const bookings = await res.json();

  if (bookings.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-700">No Bookings Found</h2>
          <p className="text-gray-500 mt-4">You haven't booked any facilities yet.</p>

           <Link href={"/all-facilities"} className='flex justify-center mt-4'>
                <button className="btn rounded-2xl bg-linear-to-l from-[#24B1B1] to-[#007979] text-white font-semibold flex items-center gap-2 transition duration-300 hover:-translate-y-1">
                  <FaArrowLeft />
                  Explore Facilities
                </button>
              </Link>
        </div>
      </div>
    );
  }
    return (
         <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-700">My
          <span className="bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">{" "}Bookings</span>
        </h1>
        <p className="text-gray-500 mt-4">Manage your facility reservations.</p>
      </div>

     <div className="space-y-6 mt-12">
       {bookings.map((booking) => (
         <BookingCard key={booking._id} booking={booking}></BookingCard>
  ))}

</div>

    </div>
    );
};

export default MyBookingPage;