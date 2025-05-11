"use client"
import React from "react";

export default function Input({ label, name,placeholder="",onChange, type, value }) {
  return (
    <div className="flex flex-col my-6">
      <label htmlFor="" className="text-sm text-start mb-1 tracking-wide">
        {label}
      </label>
      <input
        type={type}
        className="border bg-[#000] rounded-sm px-2 py-1 outline-none placeholder:text-xs"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
