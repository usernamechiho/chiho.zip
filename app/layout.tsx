"use client";

import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hello, setHello] = useState("");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
