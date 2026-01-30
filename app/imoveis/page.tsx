import { PropertyCard } from "@/components/property-card";
import { PropertyFilters } from "@/components/property-filters";
import { properties } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imóveis | Nova Imóveis",
  description: "Explore nossa lista completa de imóveis para venda e locação em São Paulo e região.",
};

export default function ImoveisPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">

      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Imóveis Disponíveis
          </h1>
          <p className="text-muted-foreground text-lg">
            Encontre o imóvel perfeito para você entre nossa seleção de apartamentos, casas e terrenos.
          </p>
        </div>
      </section>


      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            <aside className="lg:w-72 shrink-0">
              <PropertyFilters />
            </aside>


            <div className="flex-1">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{properties.length}</span> imóveis encontrados
                </p>
                <select className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none">
                  <option>Mais recentes</option>
                  <option>Menor preço</option>
                  <option>Maior preço</option>
                  <option>Maior área</option>
                </select>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>


              <div className="flex justify-center items-center gap-2 mt-12">
                <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors disabled:opacity-50" disabled>
                  Anterior
                </button>
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">
                  1
                </button>
                <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
