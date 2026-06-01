import { createFileRoute } from "@tanstack/react-router";
import deckPool from "@/assets/portfolio/01-deck-piscina.jpg";
import r1c2 from "@/assets/portfolio/r1c2.jpg";
import r1c3 from "@/assets/portfolio/r1c3.jpg";
import r1c4 from "@/assets/portfolio/r1c4.jpg";
import r1c5 from "@/assets/portfolio/r1c5.jpg";
import r2c1 from "@/assets/portfolio/r2c1.jpg";
import r2c2 from "@/assets/portfolio/r2c2.jpg";
import r2c4 from "@/assets/portfolio/r2c4.jpg";
import r2c5 from "@/assets/portfolio/r2c5.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import logoTN from "@/assets/logo-tn.png";

const WHATSAPP = "https://wa.me/5493814620953?text=Hola%20Techos%20Norte%2C%20quiero%20pedir%20un%20presupuesto";
const INSTAGRAM = "https://www.instagram.com/techosnortes/";
const PHONE_1 = "3814620953";
const PHONE_2 = "3815673417";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Techos Norte — Decks, Techos y Entrepisos a medida" },
      { name: "description", content: "Instalaciones en madera, hierro y WPC. Decks, techos, pérgolas y entrepisos a medida. Familia emprendedora, calidad y atención personalizada en Tucumán." },
      { property: "og:title", content: "Techos Norte — Madera, hierro y WPC" },
      { property: "og:description", content: "Decks, techos, pérgolas y entrepisos a medida. Diseños personalizados con terminaciones premium." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: deckPool },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Manifesto />
      <Gallery />
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoTN} alt="Techos Norte" className="h-9 w-auto" />
          <span className="font-display text-xl tracking-tight text-forest">Techos Norte</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicios" className="hover:text-forest transition">Servicios</a>
          <a href="#galeria" className="hover:text-forest transition">Galería</a>
          <a href="#proceso" className="hover:text-forest transition">Proceso</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-forest transition">Instagram</a>
          <a href="#contacto" className="hover:text-forest transition">Contacto</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-sm font-semibold bg-forest text-primary-foreground px-4 py-2 rounded-full hover:bg-forest-deep transition">
          Presupuesto
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end pb-20 pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-24 right-6 md:right-12 text-right text-[11px] tracking-[0.3em] text-cream/80 uppercase">
        Tucumán · Argentina<br />Familia emprendedora
      </div>
      <div className="relative max-w-7xl mx-auto px-6 w-full text-cream">
        <div className="text-[11px] tracking-[0.35em] mb-6 uppercase text-cream/80">— Madera · Hierro · WPC</div>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95]">
          Diseño que<br />
          <em className="not-italic text-[oklch(0.82_0.1_55)]">transforma</em> espacios.
        </h1>
        <div className="mt-10 flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <p className="max-w-md text-lg text-cream/85">
            Decks, techos, pérgolas y entrepisos a medida. Calidad, calidez y terminaciones premium para tu hogar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-terracotta text-accent-foreground px-7 py-4 font-semibold rounded-full hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-warm)" }}>
              Pedir presupuesto →
            </a>
            <a href="#galeria" className="border border-cream/40 text-cream px-7 py-4 font-semibold rounded-full hover:bg-cream/10 transition">
              Ver trabajos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Decks en WPC", "Decks en madera", "Revestimientos", "Pérgolas a medida", "Techos en madera", "Entrepisos", "Escaleras", "Estructuras en hierro"];
  return (
    <div className="border-y border-border bg-forest text-cream overflow-hidden py-5">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl mx-8">
            {t} <span className="text-[oklch(0.82_0.1_55)] mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { n: "01", t: "Decks WPC y madera", d: "Decks exteriores en WPC y maderas duras. Resistentes, antideslizantes y con terminación premium para piscinas, patios y terrazas.", img: r1c2 },
    { n: "02", t: "Revestimientos", d: "Revestimientos interiores y exteriores en madera maciza. Detalle artesanal que transforma cualquier ambiente.", img: r2c2 },
    { n: "03", t: "Pérgolas y techos", d: "Pérgolas, galerías y techos en madera con estructura de hierro. Diseño a medida según tu espacio.", img: r2c5 },
    { n: "04", t: "Entrepisos y escaleras", d: "Entrepisos, escaleras flotantes y estructuras en madera + hierro. Combinación de calidez e ingeniería.", img: r1c5 },
  ];
  return (
    <section id="servicios" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="text-[11px] tracking-[0.35em] text-terracotta mb-4 uppercase">— Servicios</div>
            <h2 className="font-display text-5xl md:text-7xl max-w-3xl text-ink">Cada detalle, pensado para <em>durar</em>.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Trabajamos madera, hierro y WPC con diseños personalizados, materiales de calidad y terminaciones profesionales.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article key={s.n} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-forest transition-colors" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-display text-2xl text-terracotta">{s.n}</span>
                  <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Servicio</span>
                </div>
                <h3 className="font-display text-2xl mb-3 text-ink">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="relative py-28 md:py-32 px-6 border-y border-border bg-forest text-cream overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-[11px] tracking-[0.35em] text-[oklch(0.82_0.1_55)] mb-6 uppercase">— Nosotros</div>
        <p className="font-display text-3xl md:text-5xl leading-[1.1]">
          Somos una <em className="not-italic text-[oklch(0.82_0.1_55)]">familia emprendedora</em>. Cada deck, cada techo y cada pérgola los pensamos como si fueran para nuestra propia casa: con paciencia, oficio y atención personalizada.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [r1c2, r1c3, r1c4, r1c5, r2c1, r2c2, r2c4, r2c5];
  return (
    <section id="galeria" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="text-[11px] tracking-[0.35em] text-terracotta mb-4 uppercase">— Galería</div>
            <h2 className="font-display text-5xl md:text-7xl text-ink">Obras recientes.</h2>
          </div>
          <a href="https://instagram.com/techosnortes" target="_blank" rel="noreferrer" className="text-sm font-semibold underline underline-offset-4 text-forest hover:text-terracotta">
            Ver más en @techosnortes →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl bg-card ${i % 7 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}
            >
              <img src={src} alt={`Trabajo Techos Norte ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Consulta", d: "Nos contás tu idea por WhatsApp. Coordinamos visita y mediciones sin cargo." },
    { n: "02", t: "Diseño a medida", d: "Te proponemos materiales, terminaciones y un presupuesto cerrado por escrito." },
    { n: "03", t: "Instalación", d: "Ejecutamos la obra con materiales de calidad y atención al detalle." },
    { n: "04", t: "Entrega", d: "Terminación premium, limpieza final y soporte post-obra." },
  ];
  return (
    <section id="proceso" className="py-24 md:py-32 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-[11px] tracking-[0.35em] text-terracotta mb-4 uppercase">— Cómo trabajamos</div>
        <h2 className="font-display text-5xl md:text-7xl mb-16 max-w-3xl text-ink">Simple, claro y sin sorpresas.</h2>
        <div className="grid md:grid-cols-4 gap-px bg-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 hover:bg-secondary transition-colors">
              <div className="font-display text-6xl text-terracotta mb-6">{s.n}</div>
              <h3 className="font-display text-2xl mb-3 text-ink">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "100%", l: "A medida" },
    { v: "3", l: "Materiales nobles" },
    { v: "★★★★★", l: "Atención personalizada" },
    { v: "TUC", l: "Tucumán y zona" },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-5xl md:text-7xl text-forest">{s.v}</div>
            <div className="text-[11px] tracking-[0.25em] text-muted-foreground mt-2 uppercase">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="py-28 md:py-32 px-6 bg-ink text-cream">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-[11px] tracking-[0.35em] text-[oklch(0.82_0.1_55)] mb-6 uppercase">— Pedí tu presupuesto</div>
        <h2 className="font-display text-5xl md:text-8xl mb-8 leading-[0.95]">
          Hagamos realidad<br /><em className="not-italic text-[oklch(0.82_0.1_55)]">tu proyecto.</em>
        </h2>
        <p className="text-cream/80 max-w-xl mx-auto mb-10">
          Contanos qué tenés en mente y te respondemos con una propuesta personalizada.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-terracotta text-accent-foreground px-8 py-5 font-semibold rounded-full hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-warm)" }}>
            WhatsApp →
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="border border-cream/30 px-8 py-5 font-semibold rounded-full hover:bg-cream/10 transition">
            @techosnortes
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-cream/70">
          <a href={`tel:${PHONE_1}`} className="hover:text-cream">📞 {PHONE_1}</a>
          <a href={`tel:${PHONE_2}`} className="hover:text-cream">📞 {PHONE_2}</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logoTN} alt="Techos Norte" className="h-7 w-auto" />
          <span className="font-display text-foreground tracking-tight">Techos Norte</span>
        </div>
        <div>Instalaciones en madera, hierro y WPC · Tucumán</div>
        <div className="flex items-center gap-4">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-foreground">@techosnortes</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
