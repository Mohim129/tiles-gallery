'use client';

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const SignUpPage = () => {
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());


    if (userData.name.length < 3) return;
    if (userData.password.length < 8) return;

    const {data, error} = await authClient.signUp.email({
        name:userData.name,
        email: userData.email,
        password: userData.password,
        callbackURL: '/signin',
        image: userData.image
    })
    if (error) {
      alert("Error signing up: " + error.message);
      }
    if (data) {
      alert("Sign up successful!");
    }
    // console.log("Sign up response:", { data, error })
    
  };
    return (
      <div>
        <Form
          className="flex justify-center items-center h-screen flex-col gap-4"
          onSubmit={onSubmit}
        >
          <h1>Sign Up</h1>
          <TextField
            className="w-full max-w-[280px]"
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input name="name" placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField
            className="w-full max-w-[280px]"
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
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            className="w-full max-w-[280px]"
            isRequired
            name="image"
            type="url"
            validate={(value) => {
              if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(value)) {
                return "Please enter a valid image URL";
              }
              return null;
            }}
          >
            <Label>Image URL</Label>
            <Input name="image" placeholder="https://example.com/image.jpg" />
            <FieldError />
          </TextField>
          <TextField
            className="w-full max-w-[280px]"
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
            <Input name="password" placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <Description className="text-sm">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-blue-500 hover:underline">
                      Sign in here
                    </Link>
                  </Description>
        </Form>
      </div>
    );
};

export default SignUpPage;