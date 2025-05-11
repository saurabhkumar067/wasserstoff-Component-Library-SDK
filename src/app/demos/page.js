"use client";
import Heading from "@/components/Heading";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Page() {
  const [store, setStore] = useState({});
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setStore(JSON.parse(storedUserDetails));
    }
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center w-1/2 mx-auto mt-10">
      <Heading heading={`Congrats, ${store.name}! Your ticket is ready.`} />
      <p className="text-lg text-center">
        We have emailed your ticket so <span>{store.email}</span>.com and will l
        send updates in the run up to the event.
      </p>
      <div className="border-2 px-14 py-8 rounded-xl flex flex-col gap-10 bg-[#2222228c] mt-14">
        <div className="flex items-center gap-2 ">
          <div>
            <Image src="/chef.png" height={50} width={50} alt="chef" />
          </div>
          <div>
            <h1 className="text-lg">Coding Conf</h1>
            <p className="text-sm">
              <span>Dec 21-2020</span>|<span>America TN</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image src="/human.jpeg" height={50} width={50} alt="human" />
          </div>
          <div>
            <h1 className="text-lg">Jonatan Kristef</h1>
            <p className="text-sm">
              <span>London</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
