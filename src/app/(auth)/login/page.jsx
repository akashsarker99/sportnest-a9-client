'use client'
import Link from 'next/link';
import React from 'react';
import { Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export const handleGoogleLogin = async () =>{
  await authClient.signIn.social({
    provider: "google",
  });
}


const LoginPage = () => {
  const router = useRouter()
    const handleLogin = async (e) =>{
         e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
   const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    console.log(data, error)
    if (data) {
            toast.success("Login Successful");
            router.push("/")
    }
        if (error) {
            toast.error(error.message);
          }
    }
  
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-700 mt-6">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-3">
            Login to continue booking your favorite sports facilities.
          </p>
        </div>

        <Form className="mt-10 space-y-5" onSubmit={handleLogin}>
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
            <Label>Email Address</Label>
            <Input className={'w-full rounded-xl'} placeholder="Enter your email address" />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input className={'w-full rounded-xl'} placeholder="Enter your password" />
            <Description>
              Must contain at least 6 characters, one uppercase and one
              lowercase letter.
            </Description>

            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full btn h-12 rounded-xl bg-linear-to-l from-[#24B1B1] to-[#007979] hover:opacity-90 text-white font-semibold text-base"
          >
            Login
          </Button>
        </Form>

        <div className="divider text-gray-400 my-8">OR</div>

        <button onClick={handleGoogleLogin} className="w-full btn rounded-xl border border-gray-200 hover:border-[#24B1B1] hover:bg-cyan-50 text-slate-600 font-medium transition duration-300 flex items-center justify-center gap-3">
          <FcGoogle className="text-2xl"></FcGoogle>
          Continue with Google
        </button>

        <p className="text-center text-gray-500 mt-8">
          Don’t have an account?
          <Link
            href={"/register"}
            className="text-[#24B1B1] hover:text-[#007979] font-semibold ml-1"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default LoginPage;