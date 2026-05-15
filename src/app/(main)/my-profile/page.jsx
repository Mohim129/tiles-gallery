import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <h1 className="text-2xl font-bold">You are not logged in</h1>
        <h4>
          Click Here to{" "}
          <Link href="/signin" className="text-blue-400">
            Login
          </Link>
        </h4>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-8">
          My Profile
        </h1>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body items-center text-center">
            <div href={"/my-profile"} className="">
              <div className="w-60 rounded-2xl">
                <img
                  className="rounded-2xl"
                  src={user.image}
                  alt="User Avatar"
                />
              </div>
            </div>

            <h2 className="card-title text-2xl">
              <span className="text-gray-600">Name:</span>
              {user.name}
            </h2>
            <p className="text-base-content/70">
              <span className="text-gray-600 font-bold">Email:</span>{" "}
              {user.email}
            </p>

            <div className="card-actions mt-6">
              <Link
                href="/my-profile/update-info"
                className="btn btn-primary btn-wide"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
