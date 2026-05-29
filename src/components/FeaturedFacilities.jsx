import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import FeatureCard from './shared/FeatureCard';

const FeaturedFacilities = async () => {
      const res = await fetch("http://localhost:5000/facility");
  const facilities = await res.json();

    return (
       <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-700">
          Featured
          <span className="bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">
            {" "}
            Facilities
          </span>
        </h2>

        <p className="text-gray-500 mt-5 leading-8">
          Explore our most popular sports facilities and reserve your favorite
          venue anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {facilities.slice(0, 6).map((facility) => (
          <FeatureCard key={facility._id} facility={facility}></FeatureCard>
        ))}
      </div>

      <Link href={"/all-facilities"}>
        <div className="flex gap-2 items-center justify-center my-8 cursor-pointer text-[#007979] hover:text-[#24B1B1] transition duration-300">
          <p className="text-lg font-semibold underline underline-offset-4">
            View All Facilities
          </p>
          <FaArrowRightLong />
        </div>
      </Link>
    </div>
    );
};

export default FeaturedFacilities;