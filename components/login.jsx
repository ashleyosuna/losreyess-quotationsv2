"use client";

import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm({}) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async function (e) {
    e.preventDefault();

    if (!user.username || !user.password) {
      setError("Missing input fields");
    }

    try {
      const username = user.username;
      const password = user.password;
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        console.log("Error logging in");
        return;
      }

      router.replace("dashboard");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <h1>USER LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          onChange={(event) =>
            setUser({ ...user, username: event.target.value })
          }
        ></input>
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        ></input>
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
}
