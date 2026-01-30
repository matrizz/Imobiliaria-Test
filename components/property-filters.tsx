"use client";

import { useState } from "react";
import { cities, neighborhoods, priceRanges } from "@/lib/data";

export function PropertyFilters() {
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  return (
    <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
      <h2 className="text-lg font-semibold text-card-foreground mb-6">Filtros</h2>

      <div className="space-y-6">

        <div>
          <label htmlFor="filter-type" className="block text-sm font-medium text-card-foreground mb-2">
            Tipo
          </label>
          <select
            id="filter-type"
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
          <label htmlFor="filter-city" className="block text-sm font-medium text-card-foreground mb-2">
            Cidade
          </label>
          <select
            id="filter-city"
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
          <label htmlFor="filter-neighborhood" className="block text-sm font-medium text-card-foreground mb-2">
            Bairro
          </label>
          <select
            id="filter-neighborhood"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Todos</option>
            {neighborhoods.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>


        <div>
          <label htmlFor="filter-price" className="block text-sm font-medium text-card-foreground mb-2">
            Faixa de Preço
          </label>
          <select
            id="filter-price"
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


        <div>
          <label htmlFor="filter-bedrooms" className="block text-sm font-medium text-card-foreground mb-2">
            Quartos
          </label>
          <select
            id="filter-bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Todos</option>
            <option value="1">1 quarto</option>
            <option value="2">2 quartos</option>
            <option value="3">3 quartos</option>
            <option value="4">4+ quartos</option>
          </select>
        </div>


        <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          Aplicar Filtros
        </button>


        <button
          onClick={() => {
            setType("");
            setCity("");
            setNeighborhood("");
            setPriceRange("");
            setBedrooms("");
          }}
          className="w-full px-6 py-3 border border-border text-muted-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}
