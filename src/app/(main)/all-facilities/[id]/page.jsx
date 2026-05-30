import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import React from 'react';

const FacilityDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5000/facility/${id}`);
    const facility = await res.json()
    console.log(id)
    return (
        <div>
             <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Image
            src={facility.image}
            alt={facility.name}
            height={450}
            width={500}
            className="w-full object-cover rounded-3xl"
          ></Image>
        </div>

        <div>
          <div className="md:inline-block text-center text-base px-4 py-2 rounded-full bg-linear-to-l from-[#24B1B1] to-[#007979] text-white font-medium">
            {facility.facility_type}
          </div>

          <h1 className="text-4xl font-bold text-slate-700 mt-4">
            {facility.name}
          </h1>

          <p className="text-gray-500 mt-4">
            {facility.description}
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">
                Location
              </span>

              <span>
                {facility.location}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">
                Capacity
              </span>

              <span>
                {facility.capacity} Players
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">
                Price
              </span>

              <span className="font-semibold text-[#007979]">
                {facility.price_per_hour} Tk/hour
              </span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Available Slots
              </h3>

              <div className="flex flex-wrap gap-2">
                {facility.available_slots.map((slot) => (
                  <span
                    key={slot}
                    className="px-4 py-2 bg-cyan-50 rounded-xl text-[#007979]">
                    {slot}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

       <BookingForm facility={facility}></BookingForm>
    </div>
        </div>
    );
};

export default FacilityDetailsPage;