"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar";
import NewProductForm from "../../components/newProduct";
import ProductsTable from "../../components/productsTable";
import Popup from "reactjs-popup";

export default function Inventario() {
  const [inventory, setInventory] = useState([]);

  const getProducts = async function () {
    try {
      let res = await fetch("/api/inventario", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        res = await res.json();
        setInventory(res.data);
      }
    } catch (err) {
      console.log("Error setting inventory");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="p-12">
        <div className="grid grid-cols-2">
          <h1 className="cols-span-1 text-xl tracking-wide font-bold">
            INVENTARIO
          </h1>
          <Popup
            trigger={
              <button className="cols-span-1 justify-self-end bg-pink-400 p-2 rounded-xl text-white font-bold">
                Nuevo Producto
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <NewProductForm />
              </div>
              //<NewProductForm />
              //   <div className="modal">
              //     <div className="content">Welcome to GFG!!!</div>
              //     <div>
              //       <button onClick={() => close()}>Close modal</button>
              //     </div>
              //   </div>
            )}
          </Popup>
        </div>
        <ProductsTable products={inventory} />
      </div>
    </div>
  );
}
