"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteDestination({ detailsData }) {
  const { _id, DestinationName } = detailsData;

  const handleDeleteDestination = async () => {
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });

    const data = await res.json();
    // console.log(data);

    redirect("/destinations");
  };
  return (
    <AlertDialog>
      <Button variant="danger-soft" className={"rounded"}>
        <TrashBin className="text-red-500"></TrashBin> Cancel
      </Button>
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{DestinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                onClick={handleDeleteDestination}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
