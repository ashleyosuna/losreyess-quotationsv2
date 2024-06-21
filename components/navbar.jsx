"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="grid grid-cols-3 bg-pink-400 py-3 px-8 text-white font-bold shadow-md text-lg">
      <div className="col-span-2 space-x-8">
        <Link href="/dashboard" className="hover:underline focus:underline">
          Cotizaciones
        </Link>
        <Link href="/inventario" className="hover:underline focus:underline">
          Inventario
        </Link>
      </div>
      <Link
        className="text-right hover:underline focus:underline"
        href="/perfil"
      >
        Perfil
      </Link>
    </div>
  );
}
