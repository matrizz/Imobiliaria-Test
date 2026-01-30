import Link from "next/link";
import { Property } from "@/lib/data";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/imoveis/${property.id}`} className="group block">
      <article className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">

        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${property.type === "venda"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground"
                }`}
            >
              {property.type === "venda" ? "Venda" : "Locação"}
            </span>
          </div>
        </div>


        <div className="p-4">
          <div className="mb-2">
            <span className="text-2xl font-bold text-primary">
              {property.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
              })}
            </span>
            {property.type === "locacao" && (
              <span className="text-sm text-muted-foreground">/mês</span>
            )}
          </div>

          <h3 className="font-semibold text-card-foreground mb-1 line-clamp-1">
            {property.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.neighborhood}, {property.city}
          </p>


          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-3 border-t border-border">
            <div className="flex items-center gap-1" title="Quartos">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1" title="Banheiros">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1" title="Área">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{property.area}m²</span>
            </div>
            {property.garage > 0 && (
              <div className="flex items-center gap-1" title="Vagas">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{property.garage} vaga{property.garage > 1 ? "s" : ""}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
