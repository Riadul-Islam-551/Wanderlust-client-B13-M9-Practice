"use client";

import { authClient } from "@/lib/auth-client";
import { Pencil } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

export function EditDestination({ detailsData }) {
  const {
    _id,
    Price,
    ImageURL,
    Duration,
    DestinationName,
    Description,
    DepartureDate,
    Country,
    Category,
  } = detailsData;

  //   console.log(detailsData);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const editedData = Object.fromEntries(formData.entries());
    // console.log(editedData);
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(editedData),
    });

    const data = await res.json();
    alert("Updated Destination successfully");

    // console.log(data);
  };

  return (
    <Modal>
      <Button variant="outline" className={"rounded "}>
        <Pencil></Pencil> Edit
      </Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-5xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-cyan-500">
                Edit Destination
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6 ">
              <Surface variant="default">
                <Form
                  className="flex container mx-auto p-7 flex-col gap-4 border border-gray-200 rounded-2xl my-12 shadow w-full "
                  onSubmit={onSubmit}
                >
                  <div>
                    {/* distination name  */}
                    <TextField
                      isRequired
                      defaultValue={DestinationName}
                      name="DestinationName"
                      type="Text"
                    >
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
                    <TextField
                      isRequired
                      name="Country"
                      type="Text"
                      className="w-full"
                      defaultValue={Country}
                    >
                      <Label>Country </Label>
                      <Input
                        placeholder="Indonesia"
                        className="w-full border-none shadow-none bg-base-300"
                      />
                      <FieldError />
                    </TextField>
                    {/* category */}
                    <TextField
                      isRequired
                      name="Category"
                      type="Text"
                      className="w-full"
                      defaultValue={Category}
                    >
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
                    <TextField
                      isRequired
                      name="Price"
                      type="Text"
                      className="w-full"
                      defaultValue={Price}
                    >
                      <Label>Price </Label>
                      <Input
                        placeholder="e.g., $1200"
                        className="w-full border-none shadow-none bg-base-300"
                      />
                      <FieldError />
                    </TextField>
                    {/* Duration */}
                    <TextField
                      isRequired
                      name="Duration"
                      type="Text"
                      className="w-full"
                      defaultValue={Duration}
                    >
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
                    <TextField
                      isRequired
                      name="DepartureDate"
                      type="text"
                      defaultValue={DepartureDate}
                    >
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
                    <TextField
                      isRequired
                      name="ImageURL"
                      type="url"
                      defaultValue={ImageURL}
                    >
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
                    <TextField
                      isRequired
                      className="w-full"
                      name="Description"
                      defaultValue={Description}
                    >
                      <Label>Description</Label>
                      <TextArea
                        placeholder="Write your message here..."
                        rows={7}
                        className="border-none shadow-none bg-base-300"
                      />
                    </TextField>
                  </div>

                  <Modal.Footer className="mt-5 ">
                    <Button
                      type="submit"
                      variant="outline"
                      className={
                        "border-2  border-cyan-500 rounded text-cyan-500"
                      }
                      slot="close"
                    >
                      Save
                    </Button>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
