import React from "react";

// Compound component pattern
export default function Table({ children }: { children: React.ReactNode }) {
  return <table>{children}</table>;
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
