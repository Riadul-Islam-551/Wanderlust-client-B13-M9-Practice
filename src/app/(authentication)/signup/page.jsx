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
import { Icon } from "@iconify/react";
import Link from "next/link";

const SignupPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
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

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="py-9 px-2">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-2">
        Create Account
      </h1>
      <p className="text-gray-600 text-center text-sm mb-5 ">
        Start your adventure with Wanderlust
      </p>
      <div className="card border  border-gray-200 max-w-2xl mx-auto">
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" className={"w-full "} />
            <FieldError />
          </TextField>
          {/* image url  */}
          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Image url" className={"w-full "} />
            <FieldError />
          </TextField>
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
              Create Account
            </Button>
          </div>
        </Form>
        <div className="text-center">or sign in with</div>
        <Button
          onClick={handleGoogleSignin}
          className="w-full rounded "
          variant="tertiary"
        >
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
        <p className="mt-3 text-center text-xs ">
          Have any account?
          <Link href={"/login"} className=" text-cyan-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
