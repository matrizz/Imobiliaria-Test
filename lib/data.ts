export interface Property {
  id: string;
  title: string;
  type: "venda" | "locacao";
  price: number;
  city: string;
  neighborhood: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  garage: number;
  description: string;
  features: string[];
  images: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento Moderno no Centro",
    type: "venda",
    price: 450000,
    city: "São Paulo",
    neighborhood: "Centro",
    address: "Av. Paulista, 1000",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    garage: 1,
    description: "Apartamento moderno e espaçoso, localizado no coração de São Paulo. Com acabamentos de alto padrão, este imóvel oferece conforto e praticidade para quem busca viver com qualidade de vida. Conta com varanda gourmet, cozinha americana e área de serviço.",
    features: ["Varanda Gourmet", "Cozinha Americana", "Armários Planejados", "Piso Laminado", "Ar Condicionado", "Portaria 24h"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "2",
    title: "Casa com Quintal Amplo",
    type: "venda",
    price: 680000,
    city: "São Paulo",
    neighborhood: "Vila Mariana",
    address: "Rua Domingos de Morais, 500",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    garage: 2,
    description: "Linda casa com quintal espaçoso, ideal para famílias. Ambiente acolhedor com três quartos, sendo uma suíte master. A área externa é perfeita para churrascos e momentos de lazer com a família.",
    features: ["Quintal Grande", "Churrasqueira", "Suíte Master", "Cozinha Ampla", "Lavanderia", "Área de Serviço"],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "3",
    title: "Studio Compacto e Funcional",
    type: "locacao",
    price: 1800,
    city: "São Paulo",
    neighborhood: "Pinheiros",
    address: "Rua dos Pinheiros, 200",
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    garage: 0,
    description: "Studio moderno e funcional, perfeito para quem busca praticidade. Localizado em uma das regiões mais desejadas de São Paulo, próximo a restaurantes, bares e transporte público.",
    features: ["Mobiliado", "Academia no Prédio", "Lavanderia Coletiva", "Pet Friendly", "Bike Sharing"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "4",
    title: "Cobertura Duplex de Luxo",
    type: "venda",
    price: 1850000,
    city: "São Paulo",
    neighborhood: "Itaim Bibi",
    address: "Rua Joaquim Floriano, 800",
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    garage: 3,
    description: "Espetacular cobertura duplex com vista panorâmica da cidade. Acabamentos de primeiríssima qualidade, piscina privativa, sauna e espaço gourmet completo. Ideal para quem busca exclusividade e sofisticação.",
    features: ["Piscina Privativa", "Sauna", "Espaço Gourmet", "Home Theater", "Vista Panorâmica", "Closet Planejado"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "5",
    title: "Apartamento Garden",
    type: "locacao",
    price: 3500,
    city: "São Paulo",
    neighborhood: "Moema",
    address: "Al. dos Arapanés, 300",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    garage: 1,
    description: "Charmoso apartamento garden com área externa privativa. Perfeito para quem tem pets ou aprecia um contato maior com a natureza sem abrir mão da praticidade urbana.",
    features: ["Área Externa Privativa", "Pet Friendly", "Jardim Particular", "Piso Porcelanato", "Armários Embutidos"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "6",
    title: "Sobrado Reformado",
    type: "venda",
    price: 520000,
    city: "São Paulo",
    neighborhood: "Tatuapé",
    address: "Rua Serra de Bragança, 400",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    garage: 2,
    description: "Sobrado completamente reformado com projeto moderno. Ampla área de lazer com piscina e churrasqueira. Localização privilegiada próximo ao metrô e comércio local.",
    features: ["Piscina", "Churrasqueira", "Edícula", "Despensa", "Próximo ao Metrô", "Recém Reformado"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?w=800&h=600&fit=crop",
    ],
  },
];

export const cities = ["São Paulo", "Campinas", "Santos", "Guarulhos"];
export const neighborhoods = ["Centro", "Vila Mariana", "Pinheiros", "Itaim Bibi", "Moema", "Tatuapé"];
export const priceRanges = [
  { label: "Até R$ 500.000", min: 0, max: 500000 },
  { label: "R$ 500.000 - R$ 1.000.000", min: 500000, max: 1000000 },
  { label: "Acima de R$ 1.000.000", min: 1000000, max: Infinity },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}
