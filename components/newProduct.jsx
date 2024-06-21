"use client";

import { useState } from "react";

export default function NewProductForm() {
  const [newProduct, setNewProduct] = useState({
    description: "",
    amount: 0,
    price: 0,
  });

  const createProduct = async function () {
    try {
      const { description, amount, price } = newProduct;
      const res = await fetch("/api/inventario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, amount, price }),
      });

      if (res.ok) {
        console.log("Product created successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-4 rounded-xl border-gray-300 p-8 bg-white content">
      <h1 className="text-center font-bold mb-4 text-lg">NUEVO PRODUCTO</h1>
      <form className="flex flex-col space-y-4 w-full" onSubmit={createProduct}>
        <span className="md:grid md:grid-cols-4 w-full">
          <label className="text-right mr-4">Descripción:</label>
          <input
            className="col-span-3 w-full border-2 rounded-lg border-gray-300 py-1 px-2"
            type="text"
            onChange={(e) => {
              setNewProduct({ ...newProduct, description: e.target.value });
            }}
          ></input>
        </span>
        <span className="md:grid md:grid-cols-4 w-full justify-end">
          <label className="text-right mr-4">Precio:</label>
          <input
            className="col-span-3 w-full border-2 rounded-lg border-gray-300 py-1 px-2"
            type="number"
            onChange={(e) => {
              setNewProduct({ ...newProduct, price: e.target.value });
            }}
          ></input>
        </span>
        <span className="md:grid md:grid-cols-4 w-full justify-end">
          <label className="text-right mr-4">Marca:</label>
          <input
            className="col-span-3 w-full border-2 rounded-lg border-gray-300 py-1 px-2"
            type="text"
            onChange={(e) => {
              setNewProduct({ ...newProduct, amount: e.target.value });
            }}
          ></input>
        </span>
        <span className="md:grid md:grid-cols-4 w-full justify-end">
          <label className="text-right mr-4">Descuento permitido:</label>
          <input
            className="col-span-3 w-full border-2 rounded-lg border-gray-300 py-1 px-2"
            type="number"
            onChange={(e) => {
              setNewProduct({ ...newProduct, amount: e.target.value });
            }}
          ></input>
        </span>
        <button className="bg-pink-400 text-white font-bold rounded-lg px-6 py-1 w-fit self-center shadow-md">
          Crear
        </button>
      </form>
    </div>
  );
}
