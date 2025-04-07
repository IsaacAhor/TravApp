"use client";

import React, { useEffect, useState } from "react";

interface SuccessMessageProps {
  message: string;
  duration?: number; // milliseconds
}

export default function SuccessMessage({ message, duration = 3000 }: SuccessMessageProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      aria-live="polite"
      className={`max-w-xl mx-auto mb-4 px-4 py-3 rounded-md border border-green-600 bg-green-900 text-green-300 text-center font-semibold transition-all duration-1000 ease-in-out transform ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {message}
    </div>
  );
}
