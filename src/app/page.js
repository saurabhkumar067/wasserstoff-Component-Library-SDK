"use client";
import Button from "@/components/Button";
import UploadMonitor from "@/components/DragDrop";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e)=>{
    const {value, name} = e.target;
    setUserDetails((prev)=> ({...prev, [name]:value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    router.push("/demos")
  }

  return (
    <div className="h-full flex flex-col justify-center items-center w-1/2 mx-auto mt-10">
      <Heading heading="Your Journey to Coding Conf 2025 Starts Here!" />
      <p className="text-lg text-center">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form onSubmit={handleSubmit}>
        <UploadMonitor />
        <Input
          type="text"
          label="Full Name"
          placeholder="Enter your name"
          value={userDetails.name}
          onChange={handleInput}
          name="name"
        />
        <Input
          type="email"
          placeholder="example@gmail.com"
          label="Email address"
          value={userDetails.email}
          onChange={handleInput}
          name="email"
        />
        <Button button="Generate By Tickets" />
      </form>
    </div>
  );
}

export default page;
