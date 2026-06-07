"use client";
import { authClient } from "@/lib/auth-client";
import {Button, FieldError, Input, Label,ListBox,Modal,Select,Surface,TextArea,TextField} from "@heroui/react";
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
                      <Input />
                      <FieldError />
                    </TextField>

                    <Select
                      defaultValue={facility_type}
                      name="facility_type"
                      isRequired
                    >
                      <Label>Facility Type</Label>

                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>

                          <ListBox.Item id="Football">
                            Football
                          </ListBox.Item>

                          <ListBox.Item id="Badminton">
                            Badminton
                          </ListBox.Item>

                          <ListBox.Item id="Basketball">
                            Basketball
                          </ListBox.Item>

                          <ListBox.Item id="Swimming">
                            Swimming
                          </ListBox.Item>

                          <ListBox.Item id="Cricket">
                            Cricket
                          </ListBox.Item>

                          <ListBox.Item id="Tennis">
                            Tennis
                          </ListBox.Item>

                          <ListBox.Item id="Bowling">
                            Bowling
                          </ListBox.Item>

                          <ListBox.Item id="Volleyball">
                            Volleyball
                          </ListBox.Item>

                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >
                      <Label>Location</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={price_per_hour}
                      name="price_per_hour"
                      type="number"
                      isRequired
                    >
                      <Label>Price Per Hour</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={capacity}
                      name="capacity"
                      type="number"
                      isRequired
                    >
                      <Label>Capacity</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={image}
                        name="image"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input />
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
                        <Input placeholder="8AM - 10AM, 4PM - 6PM" />
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