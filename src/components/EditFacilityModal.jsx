"use client";
import { authClient } from "@/lib/auth-client";
import {Button, FieldError, Input, Label,Modal,Surface,TextArea,TextField} from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const EditFacilityModal = ({ facility }) => {
    const router = useRouter()
  const {_id, name,facility_type, image, location,price_per_hour,capacity,available_slots,description,} = facility;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldData = Object.fromEntries(formData.entries());
    const updatedFacility = {
         ...fieldData,
         price_per_hour: Number(fieldData.price_per_hour),
         capacity: Number(fieldData.capacity),
};
updatedFacility.available_slots = updatedFacility.available_slots.split(",").map((slot) => slot.trim());
const {data: tokenData} = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${_id}`,{
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(updatedFacility),
      }
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast.success("Facility Updated Successfully!");
        router.refresh();
    }
  };

  return (
    <Modal>
      <Button
        variant="solid"
       className="bg-linear-to-l from-[#24B1B1] to-[#007979] text-white font-semibold hover:scale-102 transition">
        <BiEdit />
        Update
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>
                Update Facility
              </Modal.Heading>
            </Modal.Header>

           <Modal.Body className="p-6 max-h-[70vh] overflow-y-auto">
              <Surface variant="default">

                <form
                  onSubmit={onSubmit}
                  className="p-8 space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">

                    <TextField
                      defaultValue={name}
                      name="name"
                      isRequired
                    >
                      <Label>Facility Name</Label>
                      <Input  className="w-full rounded-xl"/>
                      <FieldError />
                    </TextField>

                    <div>
  <TextField isRequired>
    <Label>Facility Type</Label>

    <select
      name="facility_type"
      defaultValue={facility_type}
      className="w-full h-11 px-3 rounded-xl border border-default-200 bg-transparent outline-none focus:border-[#24B1B1]"
    >
      <option value="Football">Football</option>
      <option value="Badminton">Badminton</option>
      <option value="Basketball">Basketball</option>
      <option value="Swimming">Swimming</option>
      <option value="Cricket">Cricket</option>
      <option value="Tennis">Tennis</option>
      <option value="Bowling">Bowling</option>
      <option value="Volleyball">Volleyball</option>
      <option value="Gym">Gym</option>
      <option value="Athletics">Athletics</option>
    </select>

    <FieldError />
  </TextField>
</div>
                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >
                      <Label>Location</Label>
                      <Input  className="w-full rounded-xl"/>
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={price_per_hour}
                      name="price_per_hour"
                      type="number"
                      isRequired
                    >
                      <Label>Price Per Hour</Label>
                      <Input  className="w-full rounded-xl"/>
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={capacity}
                      name="capacity"
                      type="number"
                      isRequired
                    >
                      <Label>Capacity</Label>
                      <Input  className="w-full rounded-xl"/>
                      <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={image}
                        name="image"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input  className="w-full rounded-xl"/>
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={available_slots.join(", ")}
                        name="available_slots"
                        isRequired
                      >
                        <Label>Available Slots</Label>
                        <Input className="w-full rounded-xl" placeholder="8AM - 10AM, 4PM - 6PM" />
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>

                        <TextArea
                          placeholder="Describe your facility..."
                        />

                        <FieldError />
                      </TextField>
                    </div>

                  </div>

                  <Modal.Footer>
                    <Button
                      type="submit"
                      className="bg-linear-to-l from-[#24B1B1] to-[#007979] text-white" slot="close">Save Changes
                    </Button>
                  </Modal.Footer>

                </form>

              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditFacilityModal;