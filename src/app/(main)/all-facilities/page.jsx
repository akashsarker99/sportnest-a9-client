import FeatureCard from '@/components/shared/FeatureCard';
import React from 'react';

const AllFacilitiesPage = async () => {
     const res = await fetch("http://localhost:5000/facility");
  const facilities = await res.json();
    return (
        <div>
             <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-[#0F172A]">
          All Facilities
        </h2>
        <p className="text-gray-500 mt-4 leading-7">
          From football turfs to swimming pools, find the perfect place to play,
          compete, and enjoy your favorite sports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {facilities.map((facility) => (
           <FeatureCard key={facility._id} facility={facility}></FeatureCard>
        ))}
      </div>
    </div>
        </div>
    );
};

export default AllFacilitiesPage;