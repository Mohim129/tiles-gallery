
"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField, Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const UpdateInfoPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await authClient.getSession();
      if (data?.user) {
        setUser(data.user);
        setName(data.user.name || "");
        setImageUrl(data.user.image || "");
      }
    };
    getSession();
  }, []);

  if (user === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  if (!user) {
    router.replace("/signin");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: updateError } = await authClient.updateUser({
        name,
        image: imageUrl,
      });

      if (updateError) {
        setError(updateError.message || "Update failed. Please try again.");
      } else {
        toast.success("Profile updated!");
        router.push("/my-profile");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <Form
        className="w-full max-w-[400px] flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-[#6d4fc9]">
          Update Information
        </h2>

        <TextField
          isRequired
          name="name"
          label="Name"
          value={name}
          onChange={(newValue) => setName(newValue)}
          validate={(value) => {
            if (value.length < 3) return "Name must be at least 3 characters";
            return null;
          }}
        >
          <Input placeholder="John Doe" />
        </TextField>

        <TextField
          isRequired
          name="imageUrl"
          label="Image URL"
          value={imageUrl}
          onChange={(newValue) => setImageUrl(newValue)}
          validate={(value) => {
            if (!value) return "Image URL is required";
            try {
              new URL(value);
              return null;
            } catch {
              return "Please enter a valid URL";
            }
          }}
        >
          <Input placeholder="https://example.com/photo.jpg" />
        </TextField>

        {error && (
          <div className="alert alert-error shadow-lg">
            <span>{error}</span>
          </div>
        )}

        <div className="flex gap-2 justify-center">
          <Button type="submit" color="#6d4fc9" disabled={loading}>
            {loading ? "Updating..." : "Update Information"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onPress={() => router.back()}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateInfoPage;
