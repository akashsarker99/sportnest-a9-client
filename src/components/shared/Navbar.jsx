'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { toast } from "react-toastify";
const Navbar = () => {
  const router = useRouter();
  const {data: session} = authClient.useSession()
  const user = session?.user;
  const handleLogout = async () =>{
    await authClient.signOut();
    toast.success('Logout successful')
    router.push('/login')
  }
  return (
    <div>
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="navbar max-w-7xl mx-auto px-4">
          <div className="navbar-start">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/logoo.png"}
                height={45}
                width={45}
                alt="SportNest Logo"
              />

              <h1 className="text-2xl font-bold">
                <span className="text-[#0F172A]">Sport</span>

                <span className="bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">
                  Nest
                </span>
              </h1>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4 text-[16px] font-medium">
              <li>
                <Link
                  href={"/"}
                  className="bg-transparent hover:text-[#24B1B1]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href={"/all-facilities"}
                  className="bg-transparent hover:text-[#24B1B1]"
                >
                  All Facilities
                </Link>
              </li>

              <li>
                <Link
                  href={"/mybookings"}
                  className="bg-transparent hover:text-[#24B1B1]"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  href={"/add-facility"}
                  className="bg-transparent hover:text-[#24B1B1]"
                >
                  Add Facility
                </Link>
              </li>

              <li>
                <Link
                  href={"/manage-facilities"}
                  className="bg-transparent hover:text-[#24B1B1]"
                >
                  Manage My Facilities
                </Link>
              </li>
            </ul>
          </div>

         <div className="navbar-end gap-3">
             {
              user? <div className="flex items-center gap-2.5">
                   <h2 className="font-semibold">Hi, <span className="bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent font-bold ">{user?.name}</span></h2>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-[#24B1B1] overflow-hidden">
                  <Image src={user?.image || "/user.png"} alt={user?.name || "User"} width={40} height={40}></Image>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow bg-white rounded-box w-56 text-[#0F172A] space-y-2 font-semibold"
              >
                <li>
                  <Link href={"/mybookings"}>My Bookings</Link>
                </li>

                <li>
                  <Link href={"/add-facility"}>Add Facility</Link>
                </li>

                <li>
                  <Link href={"/manage-facilities"}>Manage My Facilities</Link>
                </li>

                <li className="pt-2">
                  <button onClick={handleLogout} className="btn bg-linear-to-l from-[#24B1B1] to-[#007979] hover:opacity-90 border-none text-white">
                    Logout <MdOutlineLogout />
                  </button>
                </li>
              </ul>
            </div>
          </div> :
            <div>
               <Link href={"/login"} >
              <button className="btn bg-linear-to-l from-[#24B1B1] to-[#007979] text-white rounded-xl hover:opacity-90 border-none ease-in-out transition-all duration-300 hover:scale-102">
                Login <MdOutlineLogin />
              </button>
            </Link>
            </div>
            }
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
