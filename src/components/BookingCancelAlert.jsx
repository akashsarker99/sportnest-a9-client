"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BookingCancelAlert = ({ booking }) => {
  const router = useRouter();
  const { _id, facilityName } = booking;
  const handleCancelBooking = async () => {

    const res = await fetch(`http://localhost:5000/booking/${_id}`,{
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Booking Cancelled Successfully!");
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button
        className="btn rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 hover:-translate-y-1"
        variant="solid">
        <TrashBin />
        Cancel Booking
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[450px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Cancel Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-slate-600">
                Are you sure you want to cancel your booking for{" "}
                <strong>{facilityName}</strong>?
              </p>

              <p className="text-sm text-gray-500 mt-3">
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button
                slot="close"
                variant="tertiary"
              >
                Keep Booking
              </Button>

              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Cancel Booking
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingCancelAlert;