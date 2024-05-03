"use client";

export default function ErrorBoundry({ error }: { error: string }) {
  return <div className="bg-red-100 text-red-500 rounded-md p-2">
    <h3 className="text-center font-bold">
    {error}
    </h3>
  </div>
}
