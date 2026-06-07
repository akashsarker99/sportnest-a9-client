"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Form, Input, Label, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const AddFacilityPage = () => {
  const { data: session } = authClient.useSession();
const user = session?.user;

    const onSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const fieldData = Object.fromEntries(formData.entries());

        const facility= {
          ...fieldData,
           owner_email: user?.email,
        }
        facility.available_slots = facility.available_slots.split(",").map((slot) => slot.trim());

        const {data: tokenData} = await authClient.token()
       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(facility)
       })
       const data = await res.json();
       toast.success("Facility added successfully")
       redirect('/all-facilities')
    }
    return (
        <div>
         <div className="min-h-screen py-16 px-6">
           <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-300 p-8">
              <div className="text-center">
                 <h2 className="text-4xl font-bold text-slate-700"> Add New
                  <span className="bg-linear-to-l from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">{" "}Facility</span>
                  </h2>
             <p className="text-gray-500 mt-4">Add a sports facility and make it available for booking.</p>
        </div>
        <Form onSubmit={onSubmit} className="mt-10 flex flex-col gap-5">
          <TextField isRequired>
            <Label>Facility Name</Label>
            <Input
            className="w-full rounded-xl"
              name="name"
              placeholder="Elite Football Turf"/>
          </TextField>

          <TextField isRequired>
            <Label>Facility Type</Label>
            <Input
            className="w-full rounded-xl"
              name="facility_type"
              placeholder="Football"/>
          </TextField>

          <TextField isRequired>
            <Label>Image URL</Label>

            <Input
            className="w-full rounded-xl"
              name="image"
              placeholder="https://example.com/image.jpg"/>
          </TextField>

          <TextField isRequired>
            <Label>Location</Label>

            <Input
            className="w-full rounded-xl"
              name="location"
              placeholder="Dhaka, Bangladesh"/>
          </TextField>

          <div className="grid md:grid-cols-2 gap-5 w-full">

            <TextField isRequired>
              <Label>Price Per Hour</Label>

              <Input
              className="w-full rounded-xl"
                name="price_per_hour"
                type="number"
                placeholder="1200"/>
            </TextField>

            <TextField isRequired>
              <Label>Capacity</Label>

              <Input
              className="w-full rounded-xl"
                name="capacity"
                type="number"
                placeholder="14"/>
            </TextField>

          </div>

          <TextField isRequired>
            <Label>Available Slots</Label>

            <Input
            className="w-full rounded-xl"
              name="available_slots"
              placeholder="8AM - 10AM, 4PM - 6PM"/>
          </TextField>

          <TextField isRequired>
            <Label>Description</Label>

            <Input
            className="w-full rounded-xl"
              name="description"
              placeholder="Premium artificial grass football turf with floodlights."/>
          </TextField>

          <Button type="submit" className="w-full h-12 bg-linear-to-l from-[#24B1B1] to-[#007979] text-white text-base font-semibold transition duration-300 hover:scale-103">
              Add Facility
          </Button>
        </Form>
      </div>
    </div>
        </div>
    );
};

export default AddFacilityPage;