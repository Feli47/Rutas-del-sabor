"use client";

import { useState } from "react";
import Link from "next/link";

const localesMock = [
  {
    id: 1,
    name: "Cafe Central",
    type: "cafeteria",
    priceRange: "economico",
    city: "Montevideo",
    zone: "Centro",
    rating: 4
  },
  {
    id: 2,
    name: "Burger House",
    type: "restaurante",
    priceRange: "medio",
    city: "Montevideo",
    zone: "Pocitos",
    rating: 5
  },
  {
    id: 3,
    name: "Bar del Puerto",
    type: "bar",
    priceRange: "alto",
    city: "Colonia",
    zone: "Puerto",
    rating: 3
  }
];

export default function LocalesPage() {
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("");

  const filtrados = localesMock.filter((l) => {
    return (
      l.name.toLowerCase().includes(busqueda.toLowerCase()) &&
      (tipo === "" || l.type === tipo)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Locales</h1>

      {/* filtros */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar local..."
          className="border p-2 rounded"
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="restaurante">Restaurante</option>
          <option value="cafeteria">Cafetería</option>
          <option value="bar">Bar</option>
        </select>
      </div>

      {/* listado */}
      <div className="grid grid-cols-3 gap-4">
        {filtrados.map((local) => (
          <Link
            key={local.id}
            href={`/locales/${local.id}`}
            className="border rounded p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{local.name}</h2>
            <p>Tipo: {local.type}</p>
            <p>Ciudad: {local.city}</p>
            <p>Zona: {local.zone}</p>
            <p>⭐ {local.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}