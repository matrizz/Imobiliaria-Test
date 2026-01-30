import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Nova Imóveis",
  description: "Conheça a Nova Imóveis, sua imobiliária de confiança há mais de 15 anos no mercado.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">

      <section className="relative bg-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Sobre Nós
            </h1>
            <p className="text-lg text-background/80 leading-relaxed">
              Há mais de 15 anos transformando sonhos em realidade no mercado imobiliário.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Nova Imóveis nasceu em 2009 com o objetivo de revolucionar o mercado imobiliário de São Paulo.
                  Desde então, nos dedicamos a oferecer um serviço diferenciado, baseado em transparência,
                  ética e compromisso com nossos clientes.
                </p>
                <p>
                  Com uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem,
                  já ajudamos mais de 2.000 famílias a encontrarem o imóvel dos seus sonhos.
                </p>
                <p>
                  Nosso conhecimento profundo do mercado local, aliado à tecnologia de ponta e atendimento
                  personalizado, nos permite oferecer as melhores oportunidades de compra, venda e locação
                  de imóveis em São Paulo e região.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Equipe Nova Imóveis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Princípios
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os valores que guiam nosso trabalho todos os dias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar a melhor experiência na compra, venda e locação de imóveis,
                conectando pessoas aos seus sonhos com transparência e profissionalismo.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência no mercado imobiliário de São Paulo, reconhecida pela
                excelência no atendimento e pela qualidade dos imóveis oferecidos.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ética, transparência, compromisso com o cliente, inovação constante
                e paixão pelo que fazemos são a base do nosso trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Profissionais dedicados a encontrar o imóvel perfeito para você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "João Silva", role: "Diretor Comercial", creci: "123456" },
              { name: "Maria Santos", role: "Corretora Sênior", creci: "234567" },
              { name: "Pedro Oliveira", role: "Corretor", creci: "345678" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">CRECI: {member.creci}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">2000+</div>
              <div className="text-primary-foreground/80">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Imóveis Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfação</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
