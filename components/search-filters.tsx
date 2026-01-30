"use client";

import { useState } from "react";
import Link from "next/link";
import { cities, neighborhoods, priceRanges } from "@/lib/data";

export function SearchFilters() {
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-card-foreground mb-2">
            Tipo
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Todos</option>
            <option value="venda">Venda</option>
            <option value="locacao">Locação</option>
          </select>
        </div>


        <div>
          <label htmlFor="city" className="block text-sm font-medium text-card-foreground mb-2">
            Cidade
          </label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Todas</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>


        <div>
          <label htmlFor="price" className="block text-sm font-medium text-card-foreground mb-2">
            Faixa de Preço
          </label>
          <select
            id="price"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Todas</option>
            {priceRanges.map((range, index) => (
              <option key={index} value={index}>
                {range.label}
              </option>
            ))}
          </select>
        </div>


        <div className="flex items-end">
          <Link
            href="/imoveis"
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Buscar
          </Link>
        </div>
      </div>
    </div>
  );
}
