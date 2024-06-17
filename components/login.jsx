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

      console.log("from sign in");

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-1/2 h-1/3 rounded-lg border-8 border-pink-400 border-solid p-4 space-y-6 shadow-md bg-gray-100"
      >
        <h1 className="text-center text-4xl font-extrabold mt-4 tracking-wide">
          Los Reyess
        </h1>
        <input
          className="w-full rounded-xl border-2 border-gray-300 border-solid py-1 px-2"
          type="text"
          placeholder="Nombre de usuario"
          onChange={(event) =>
            setUser({ ...user, username: event.target.value })
          }
        ></input>
        <input
          className="w-full rounded-xl border-2 border-gray-300 border-solid py-1 px-2"
          type="password"
          placeholder="Contraseña"
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        ></input>
        <button className="rounded-xl w-fit-content bg-pink-400 text-white py-2 px-4 font-bold">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
