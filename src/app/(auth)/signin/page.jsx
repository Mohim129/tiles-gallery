'use client';

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";



const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

    
        const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: '/'
        })
        if (error) {
          toast.error("Error signing in: " + error.message);
          }
        if (data) {
          toast.success("Sign in successful!");
        }    
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
          provider: "google",
        });
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-300 rounded-lg w-[340px] h-[380px] flex flex-col justify-center items-center bg-base-100 shadow-lg">
        <Form
          className="flex justify-center items-center h-screen flex-col gap-4"
          onSubmit={onSubmit}
        >
          <h2>Sign In</h2>
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
            isRequired
            className="w-full max-w-[280px]"
            name="password"
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full max-w-[280px]"
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Login
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <Description className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </Description>
        </Form>
        <div className="px-6 sm:px-0 max-w-sm">
          <button
          onClick={handleGoogleSignIn}
            type="button"
            className="text-white w-full mb-6 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
