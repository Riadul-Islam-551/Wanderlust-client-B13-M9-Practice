"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export function DeleteBooking({ bookingId }) {
  console.log(bookingId);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    if (data.deletedCount > 0) {
      window.location.reload();
    }
  };

  return (
    <AlertDialog>
      <Button
        onClick={handleDelete}
        variant="outline"
        className=" border-red-400 text-red-500 rounded "
      >
        <TrashBin></TrashBin> Delete Booking
      </Button>
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                This will permanently cancel your booking !!
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
