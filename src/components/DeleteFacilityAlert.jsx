"use client";
import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteFacilityAlert = ({ facility }) => {
  const router = useRouter();
  const { _id, name } = facility;
  const handleDelete = async () => {
    const {data: tokenData} = await authClient.token()
    const res = await fetch(`http://localhost:5000/facility/${_id}`,{
        method: "DELETE",
         headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      }
      });
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.success("Facility Deleted Successfully!");
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button
        className="bg-red-500 text-white font-semibold transition hover:scale-102"
        variant="solid"
      >
        <TrashBin />
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete Facility?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{name}</strong> and all of its
                booking information. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button
                slot="close"
                variant="tertiary"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger">
                Delete Facility
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteFacilityAlert;