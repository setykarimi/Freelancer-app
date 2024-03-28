"use client";

export default function error({ error }: { error: string }) {
  return (
    <div>
      <span className="text-secondary-900 font-bold">
        {error.toString()?.replace(/error:/i, "")}
      </span>
    </div>
  );
}
