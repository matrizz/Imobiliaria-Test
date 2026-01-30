"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual-only form, no actual submission
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
            placeholder="(11) 99999-9999"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
            Assunto *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Selecione um assunto</option>
            <option value="compra">Quero comprar um imóvel</option>
            <option value="venda">Quero vender meu imóvel</option>
            <option value="locacao">Quero alugar um imóvel</option>
            <option value="avaliacao">Solicitar avaliação</option>
            <option value="outros">Outros</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg border-0 focus:ring-2 focus:ring-primary outline-none resize-none"
          placeholder="Escreva sua mensagem aqui..."
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
