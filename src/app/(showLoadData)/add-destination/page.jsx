"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destinationData = Object.fromEntries(formData.entries());
    // console.log(destinationData);

    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const res = await fetch("http://localhost:5000/destinations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(destinationData),
    });

    const data = await res.json();
    alert("Add Destination successfully");

    redirect("/destinations");
    // console.log(data);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mt-9 text-center">
        Add New Travel Package
      </h1>
      <Form
        className="flex container mx-auto p-7 flex-col gap-4 border border-gray-200 rounded-2xl my-12 shadow"
        onSubmit={onSubmit}
      >
        <div>
          {/* distination name  */}
          <TextField isRequired name="DestinationName" type="Text">
            <Label>Destination Name</Label>
            <Input
              placeholder="Bali Paradise"
              className="w-full  border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-9">
          {/* country name  */}
          <TextField isRequired name="Country" type="Text" className="w-full">
            <Label>Country </Label>
            <Input
              placeholder="Indonesia"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
          {/* category */}
          <TextField isRequired name="Category" type="Text" className="w-full">
            <Label>Category</Label>
            <Input
              placeholder="Bali Paradise"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-9">
          {/* price  */}
          <TextField isRequired name="Price" type="Text" className="w-full">
            <Label>Price </Label>
            <Input
              placeholder="e.g., $1200"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
          {/* Duration */}
          <TextField isRequired name="Duration" type="Text" className="w-full">
            <Label>Duration</Label>
            <Input
              placeholder="e.g., 7 Days/6 Nights"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div>
          {/* departure date  */}
          <TextField isRequired name="DepartureDate" type="text">
            <Label>Departure Date</Label>
            <Input
              placeholder="mm/dd/yyyy"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div>
          {/* image url  */}
          <TextField isRequired name="ImageURL" type="url">
            <Label>Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div>
          {/* Description*/}
          <TextField isRequired className="w-full" name="Description">
            <Label>Description</Label>
            <TextArea
              placeholder="Write your message here..."
              rows={4}
              className="border-none shadow-none bg-base-300"
            />
            <Description>Maximum 1000 characters</Description>
          </TextField>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="submit">
            <Check />
            Add Package
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddDestinationPage;
