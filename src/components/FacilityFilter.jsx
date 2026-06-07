'use client';
import { useState } from "react";
const FacilityFilter =({fetchFacilities}) => {
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");

  const handleSearch = () => {
     fetchFacilities(search, sport);
  }
   const handleSportChange = (e) => {
    const value = e.target.value;
    setSport(value);
    fetchFacilities(search, value);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 my-10 justify-center">
      <label className="select mb-4 w-49">
  <select value={sport} onChange={handleSportChange}> 
    <option value="" className='text-[#64748B]'>All Sports</option>
    <option value="Football">Football</option>
        <option value="Cricket">Cricket</option>
        <option value="Badminton">Badminton</option>
        <option value="Basketball">Basketball</option>
        <option value="Swimming">Swimming</option>
        <option value="Bowling">Bowling</option>
        <option value="Gym">Gym</option>
        <option value="Athletics">Athletics</option>
        <option value="Tennis">Tennis</option>
  </select>
</label>

<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="text" required placeholder="Search facility..." value={search}
    onChange={(e) => setSearch(e.target.value)} />
</label>

      <button onClick={handleSearch} className="btn bg-linear-to-l from-[#24B1B1] to-[#007979] text-white border-none">Search</button>
    </div>
  );
};

export default FacilityFilter;