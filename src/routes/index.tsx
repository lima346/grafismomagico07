import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImg from "@/assets/grafismo-hero.jpg";
import { Check, Sparkles, Pencil, Heart, ShieldCheck, ThumbsUp } from "lucide-react";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarJuliana from "@/assets/avatar-juliana.jpg";
import avatarPatricia from "@/assets/avatar-patricia.jpg";
import avatarFernanda from "@/assets/avatar-fernanda.jpg";
import avatarMariana from "@/assets/avatar-mariana.jpg";
import avatarRodrigo from "@/assets/avatar-rodrigo.jpg";

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

function VturbPlayer() {
  useEffect(() => {
    const id = "vturb-player-script-6a05d098f70f7722cd247a67";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src =
      "https://scripts.converteai.net/0a5d8304-0978-49e5-a985-6cea705baa64/players/6a05d098f70f7722cd247a67/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html:
          '<vturb-smartplayer id="vid-6a05d098f70f7722cd247a67" style="display:block;margin:0 auto;width:100%;"></vturb-smartplayer>',
      }}
    />
  );
}

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Purchase", { value: 0.0, currency: "USD" });
    }
  }, []);
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
          <VturbPlayer />
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
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { name: "Camila Ribeiro", avatar: avatarCamila, time: "2 h", text: "Gente, esse material salvou meu planejamento! Minhas crianças amaram e já vejo a evolução no traçado a cada semana 😍❤️", likes: 142, replies: 12 },
            { name: "Juliana Martins", avatar: avatarJuliana, time: "5 h", text: "Comprei pro meu filho de 4 anos e ele PEDE pra fazer todo dia kkkk tá amando! Recomendo demais 🥰", likes: 98, replies: 8 },
            { name: "Patrícia Lopes", avatar: avatarPatricia, time: "1 d", text: "Como pedagoga, posso afirmar: a sequência didática é excelente. Economiza horas do meu planejamento semanal. Vale cada centavo!", likes: 76, replies: 5 },
            { name: "Fernanda Castro", avatar: avatarFernanda, time: "1 d", text: "Sou avó e comprei pra brincar com meu neto nas férias. Que delícia ver ele concentrado e aprendendo brincando 💕", likes: 64, replies: 3 },
            { name: "Mariana Souza", avatar: avatarMariana, time: "2 d", text: "Já imprimi tudo e encadernei! Qualidade impecável, atividades lindas e bem pensadas. Meus alunos da pré-escola adoraram 👏👏", likes: 53, replies: 7 },
            { name: "Rodrigo Almeida", avatar: avatarRodrigo, time: "3 d", text: "Minha esposa é professora e ficou apaixonada pelo material. Disse que é um dos melhores que já viu. Compra certa!", likes: 41, replies: 2 },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-4 md:p-5">
              <div className="flex gap-3">
                <img
                  src={c.avatar}
                  alt={c.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="rounded-2xl bg-muted/60 px-4 py-2.5">
                    <p className="font-semibold text-sm">{c.name}</p>
                    <p className="text-sm mt-1 leading-relaxed">{c.text}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-1.5 px-3 text-xs text-muted-foreground">
                    <span>{c.time}</span>
                    <button className="font-semibold hover:underline">Curtir</button>
                    <button className="font-semibold hover:underline">Responder</button>
                    <span className="ml-auto inline-flex items-center gap-1">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <ThumbsUp className="h-2.5 w-2.5" />
                      </span>
                      {c.likes}
                    </span>
                  </div>
                </div>
              </div>
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
