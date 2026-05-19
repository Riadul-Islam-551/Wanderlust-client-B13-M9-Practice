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
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    
    if (data) {
      redirect("/");
    }

    if (error) {
      alert("something went wrong");
    }

    // console.log({ data, error }); 

    // console.log(user);
  };

  return (
    <div className="py-9 px-2">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-2">
        Login Account
      </h1>
      <div className="max-w-2xl mx-auto">
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" className={"w-full "} />
            <FieldError />
          </TextField>
          {/* password  */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" className={"w-full "} />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className={"w-full bg-cyan-500 rounded "}>
              <Check />
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
