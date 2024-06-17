"use client";

import React, { useEffect, useState } from "react";

export default function RegisterForm({}) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async function (e) {
    e.preventDefault();

    if (!user.username || !user.password) {
      setError("Missing input fields");
    }

    try {
      const username = user.username;
      const password = user.password;

      let res = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
        }),
      });
      if (!res.ok) {
        console.log("User registration failed.");
        return;
      }
      res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (res.ok) {
        console.log("req ok");
        const form = e.target;
        form.reset();
      } else {
        console.log("user registration failed");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <h1>USER REGISTRATION</h1>
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
        <button>Registrar</button>
      </form>
    </div>
  );
}
