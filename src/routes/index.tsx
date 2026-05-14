import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/grafismo-hero.jpg";
import { Check, Sparkles, Pencil, Heart, ShieldCheck, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grafismo na Educação Infantil — Método Completo para Alfabetizar com Leveza" },
      { name: "description", content: "Material exclusivo de grafismo para educação infantil. Desenvolva coordenação motora, traçado e pré-escrita com atividades prontas e divertidas." },
      { property: "og:title", content: "Grafismo na Educação Infantil" },
      { property: "og:description", content: "Atividades prontas de grafismo para alfabetização com leveza e diversão." },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://checkout.escalepay.com/8188866";

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero + VSL */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20 relative">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <Sparkles className="h-4 w-4" /> Método Aprovado por Educadoras
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Transforme o <span className="text-primary">Grafismo Infantil</span> em uma Jornada Divertida de Alfabetização
            </h1>
          </div>

          {/* VSL */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] border border-border bg-card">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              poster={heroImg}
            >
              <source src="" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            ▶ Assista ao vídeo até o final para entender como aplicar o método
          </p>

          <div className="mt-8 flex flex-col items-center">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-5 text-lg md:text-xl font-bold text-primary-foreground transition-transform hover:scale-105 shadow-[var(--shadow-cta)]"
              style={{ background: "var(--gradient-cta)" }}
            >
              QUERO GARANTIR MEU MATERIAL AGORA
            </a>
            <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Compra 100% segura · Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Esse material é perfeito para você que…
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Pencil, title: "É professora da Educação Infantil", text: "Quer atividades prontas, organizadas e que realmente desenvolvem o traçado das crianças." },
            { icon: Heart, title: "É mãe ou pai dedicado(a)", text: "Deseja ajudar seu filho a se preparar para a alfabetização de forma leve e divertida em casa." },
            { icon: Sparkles, title: "Atua na Pedagogia ou Psicopedagogia", text: "Busca recursos profissionais para estimular a coordenação motora fina dos pequenos." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O que vai receber */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            O que você vai receber
          </h2>
          <ul className="space-y-4">
            {[
              "+200 atividades de grafismo prontas para imprimir",
              "Sequência didática progressiva: do traço simples à pré-escrita",
              "Atividades temáticas que prendem a atenção das crianças",
              "Guia da educadora com orientações de aplicação",
              "Bônus: caderno de coordenação motora fina",
              "Bônus: pasta com letras pontilhadas do alfabeto completo",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Imagem */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
          <img
            src={heroImg}
            alt="Criança praticando grafismo com lápis coloridos"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Quem já usa, aprova
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Camila R.", role: "Professora", text: "Minhas crianças amaram! Vejo a evolução no traçado a cada semana." },
            { name: "Juliana M.", role: "Mãe do Théo", text: "Meu filho pediu para fazer todos os dias. Material incrível e bonito!" },
            { name: "Patrícia L.", role: "Pedagoga", text: "Organização perfeita. Economiza horas do meu planejamento." },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm mb-4">"{t.text}"</p>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Grafismo Educação Infantil. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
