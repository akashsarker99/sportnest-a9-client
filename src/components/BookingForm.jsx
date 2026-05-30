'use client'
import { Form, Input, Label, TextField, Button, } from '@heroui/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = ({facility}) => {
    const {_id, name, facility_type, image, price_per_hour} = facility
    const [hours, setHours] = useState(1);
      const totalPrice = hours * price_per_hour;

      const handleBooking = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
       const bookingData = {
        facilityId: _id,
        facilityName: name,
        facilityType: facility_type,
        facilityImage: image,
        bookingDate: formData.get("bookingDate"),
        timeSlot: formData.get("timeSlot"),
        hours: Number(formData.get("hours")),
        pricePerHour: price_per_hour,
        totalPrice,
       }
        console.log(bookingData)
        toast.success("Booking Successfull !")
      }
    return (
        <div>
         <div className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-3xl font-bold text-slate-700 mb-8">
        Book This Facility
      </h2>

      <Form onSubmit={handleBooking} className="grid md:grid-cols-2 gap-6">
        <TextField isReadOnly>
          <Label>Facility Name</Label>

          <Input value={facility.name} />
        </TextField>

        <TextField
          isRequired
          type="date"
          name="bookingDate"
        >
          <Label>Booking Date</Label>

          <Input />
        </TextField>

        <div className="flex flex-col gap-2">
  <label className="text-sm font-medium text-slate-600">
    Time Slot
  </label>

  <select name="timeSlot" required className="w-full border border-default-200 rounded-xl px-3 py-3 bg-white">
    {facility.available_slots.map(slot => (
      <option key={slot} value={slot}>
        {slot}
      </option>
    ))}
  </select>
</div>

        <TextField
          isRequired
          name="hours">
          <Label>Hours</Label>
          <Input
            type="number"
            min={1}
            value={hours.toString()}
            onChange={(e) =>
              setHours(Number(e.target.value))
            }
          />
        </TextField>

        <TextField isReadOnly>
          <Label>Price Per Hour</Label>
          <Input
            value={`${facility.price_per_hour} Tk`}
          />
        </TextField>

        <TextField isReadOnly>
          <Label>Total Price</Label>
          <Input
            value={`${totalPrice} Tk`}
          />
        </TextField>

        <div className="md:col-span-2 w-full text-right">
          <Button
            type="submit"
            className="w-full md:w-fit transition duration-300 py-6 text-base hover:scale-105 bg-linear-to-l from-[#24B1B1] to-[#007979] text-white">
            Confirm Booking
          </Button>
        </div>
      </Form>
    </div>
        </div>
    );
};

export default BookingForm;