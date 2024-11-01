"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=T.mirzakhairi121106",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidated");
      }
    }

    return (
      <div>
        <h1>{status}</h1>
        <button
          className="bg-black text-white m-2 p-2 rounded-lg"
          onClick={() => revalidate()}
        >
          Revalidate
        </button>
      </div>
    );
  };
}
