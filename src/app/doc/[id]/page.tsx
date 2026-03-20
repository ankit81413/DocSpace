"use client";

import { useParams } from "next/navigation";

export default function DocumentPage() {
  const params = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Document ID: {params.id}
      </h1>
    </div>
  );
}