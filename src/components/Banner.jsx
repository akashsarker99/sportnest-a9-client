import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('/Banner.jpeg')"}}>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center sm:text-left">
            <div className="py-2 inline-flex items-center gap-2 px-4 rounded-full bg-transparent text-[#24B1B1] font-medium mb-5 border border-gray-500">
              <FaRegDotCircle className="text-sm" />
              <span>Book Premium Sports Facilities</span>
            </div>

            <h1 className="text-4xl text-center sm:text-left md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Play Better With
              <span className="block mt-2">
                <span className="text-white">Sport</span>
                <span className="text-[#24B1B1]">Nest</span>
              </span>
            </h1>

            <p className="text-gray-300 text-center sm:text-left text-base md:text-lg leading-8 mt-6 max-w-2xl">
              Discover and reserve football turfs, badminton courts, swimming
              pools, and more anytime, anywhere.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 justify-center sm:justify-start">
              <Link href={"/all-facilities"}>
                <button className="px-6 py-3 rounded-xl bg-linear-to-l from-[#24B1B1] to-[#007979] hover:opacity-90 text-white font-semibold flex items-center gap-2 transition duration-300 shadow-lg hover:shadow-[#005353] hover:translate-x-1">
                  Explore Facilities
                  <FaArrowRight />
                </button>
              </Link>

              <button className="px-6 py-3 rounded-xl border border-[#24B1B1] text-white hover:bg-[#24B1B1] hover:text-white font-semibold transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-[500px] h-[420px]">
              <Image
                src={"/football.jpg"}
                className="absolute top-0 left-0 w-64 h-44 object-cover rounded-3xl border-3 border-white shadow-2xl rotate-[-8deg] hover:scale-105 transition duration-500"
                height={300}
                width={300}
                alt="football image"
              />

              <Image
                src={"/basketball.jpg"}
                className="absolute top-12 right-0 w-64 h-44 object-cover rounded-3xl border-3 border-white shadow-2xl rotate-[8deg] hover:scale-105 transition duration-500"
                height={300}
                width={300}
                alt="basketball image"
              />

              <Image
                src={"/swimming.jpg"}
                className="absolute bottom-0 left-24 w-72 h-48 object-cover rounded-3xl border-3 border-white shadow-2xl hover:scale-103 transition duration-500"
                height={300}
                width={300}
                alt="swimming image"
              />

              <div className="absolute -bottom-6 -right-6 bg-linear-to-l from-[#24B1B1] to-[#007979] text-white px-6 py-4 rounded-2xl">
                <h2 className="text-3xl font-extrabold">120+</h2>
                <p className="text-white">Facilities Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
