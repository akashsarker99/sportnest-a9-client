'use client'
import FacilityFilter from '@/components/FacilityFilter';
import FeatureCard from '@/components/shared/FeatureCard';
import React, { useEffect, useState } from 'react';

const AllFacilitiesPage = () => {
   const [facilities, setFacilities] = useState([]);
  const fetchFacilities = async (search = "",sport = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility?search=${search}&sport=${sport}`)
    const data = await res.json();
    setFacilities(data);
  }
    useEffect(() => {
       fetchFacilities();
      }, []);
 
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

      <div>
        <FacilityFilter fetchFacilities={fetchFacilities}></FacilityFilter>
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