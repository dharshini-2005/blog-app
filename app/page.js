"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "admin@example.com") {
      router.push("/admin");
    } else if (email === "user@example.com") {
      router.push("/blog");
    } else {
      alert("Invalid email");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
