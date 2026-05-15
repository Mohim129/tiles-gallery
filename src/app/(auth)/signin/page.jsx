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
          alert("Error signing in: " + error.message);
          }
        if (data) {
          alert("Sign in successful!");
        }

        
    };
  return (
    <div className=" ">
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
        <TextField className="w-full max-w-[280px]" name="password">
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
    </div>
  );
};

export default SignInPage;
