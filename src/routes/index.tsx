import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, ShieldCheck, Zap, Globe2, Server, Sparkles, Check } from "lucide-react";
import heroImage from "@/assets/hero-nodes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NodeKPT — Marketplace VPS Premium di Indonesia" },
      {
        name: "description",
        content:
          "Temukan VPS terbaik dari seller terverifikasi. Marketplace VPS, Winstaller, dan Hypervisor dalam satu platform yang elegan dan terpercaya.",
      },
      { property: "og:title", content: "NodeKPT — Marketplace VPS Premium" },
      {
        property: "og:description",
        content: "Find the right VPS in minutes. 150+ VPS, 25+ seller terverifikasi, uptime 99.9%.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PromoBar />
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <Marketplace />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

function PromoBar() {
  return (
    <div className="bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2.5 text-xs tracking-wide">
        <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
        <span className="opacity-90">
          Promo pembukaan — diskon <span className="text-[var(--gold)] font-medium">20%</span> untuk pesanan pertama
        </span>
        <span className="hidden sm:inline rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] opacity-80">
          New 2026
        </span>
      </div>
    </div>
  );
}

function Nav() {
  const items = ["Marketplace", "Winstaller", "Hypervisor", "Fitur", "Harga", "Jadi Seller"];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-cream shadow-[var(--shadow-soft)]">
            <span className="font-serif text-lg italic leading-none">N</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-tight">NodeKPT</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              VPS · Marketplace
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted sm:inline-flex">
            Log in
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm text-cream shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5">
            Mulai Gratis <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-60" aria-hidden />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[var(--emerald-deep)]/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:pt-28 lg:pb-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald-deep)]" />
            Marketplace VPS terkurasi — 25+ seller terverifikasi
          </div>

          <h1 className="mt-6 font-serif text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] tracking-tight">
            VPS premium,
            <br />
            <span className="italic text-gradient-luxe">dipilih dengan cermat.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            NodeKPT menyatukan VPS, Winstaller, dan Hypervisor dalam satu tempat —
            ditenagai oleh penyedia terpercaya, dengan harga transparan dan dukungan
            yang responsif.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-[var(--shadow-lift)]">
            <div className="flex flex-1 items-center gap-3 pl-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari VPS, lokasi, atau seller…"
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button className="rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition-transform hover:-translate-y-0.5">
              Telusuri
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["Jakarta", "Singapore", "Tokyo", "Frankfurt", "New York"].map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5">
                <Globe2 className="h-3 w-3" /> {c}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
            <img
              src={heroImage}
              alt="Visualisasi jaringan node VPS premium"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-6">
              <div className="flex items-end justify-between text-cream">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] opacity-70">
                    Featured Node
                  </div>
                  <div className="mt-1 font-serif text-2xl">Bare Metal · Tokyo</div>
                  <div className="text-xs opacity-75">8 vCPU · 32 GB · NVMe</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.22em] opacity-70">Mulai</div>
                  <div className="font-serif text-2xl text-[var(--gold)]">Rp 120rb</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 -bottom-6 hidden w-56 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-lift)] md:block">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[var(--emerald-deep)]" />
              Uptime 90 hari
            </div>
            <div className="mt-1 font-serif text-3xl">99.97%</div>
            <div className="mt-3 flex h-1.5 gap-0.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    background:
                      i === 17
                        ? "var(--gold)"
                        : "var(--emerald-deep)",
                    opacity: i === 17 ? 1 : 0.85,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "150+", v: "VPS tersedia" },
    { k: "25+", v: "Seller terverifikasi" },
    { k: "5", v: "Lokasi server" },
    { k: "99.9%", v: "Uptime rata-rata" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {items.map((it) => (
          <div key={it.v} className="px-6 py-10 text-center md:py-12">
            <div className="font-serif text-4xl md:text-5xl tracking-tight">{it.k}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {it.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Server,
      title: "Marketplace terkurasi",
      desc: "Setiap seller melewati proses verifikasi sebelum dapat menjual. Anda hanya melihat penyedia yang benar-benar layak dipercaya.",
    },
    {
      icon: Zap,
      title: "Winstaller instan",
      desc: "Pasang Windows pada VPS Linux apa pun hanya dengan beberapa klik. Tanpa ribet, tanpa konfigurasi rumit.",
    },
    {
      icon: ShieldCheck,
      title: "Pembayaran aman",
      desc: "Dana ditahan hingga layanan terverifikasi aktif. Refund otomatis bila terjadi masalah pada pemesanan.",
    },
  ];
  return (
    <section id="fitur" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--emerald-deep)]">
          Mengapa NodeKPT
        </div>
        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Dirancang untuk profesional yang menuntut <em>ketenangan</em>.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-cream">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-serif text-2xl tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full bg-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Marketplace() {
  const items = [
    {
      tag: "Singapore",
      title: "VPS Cloud · Performance",
      specs: "4 vCPU · 8 GB · 160 GB NVMe",
      price: "Rp 95rb",
      seller: "NimbusHost",
    },
    {
      tag: "Jakarta",
      title: "VPS KVM · Standard",
      specs: "2 vCPU · 4 GB · 80 GB SSD",
      price: "Rp 45rb",
      seller: "BumiNode",
    },
    {
      tag: "Tokyo",
      title: "Bare Metal · Pro",
      specs: "8 vCPU · 32 GB · 1 TB NVMe",
      price: "Rp 380rb",
      seller: "SakuraOps",
    },
  ];
  return (
    <section id="marketplace" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--emerald-deep)]">
              Pilihan minggu ini
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Penawaran terbaik dari seller pilihan.
            </h2>
          </div>
          <a
            href="#marketplace"
            className="hidden items-center gap-1.5 text-sm text-foreground hover:gap-2.5 transition-all sm:inline-flex"
          >
            Lihat semua <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                  <Globe2 className="h-3 w-3" /> {it.tag}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--emerald-deep)]">
                  Verified
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl tracking-tight">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.specs}</p>

              <div className="my-6 h-px w-full bg-border" />

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    by {it.seller}
                  </div>
                  <div className="mt-1 font-serif text-3xl">
                    {it.price}
                    <span className="text-sm text-muted-foreground"> /bln</span>
                  </div>
                </div>
                <button className="rounded-full border border-ink bg-transparent px-4 py-2 text-sm text-foreground transition-colors hover:bg-ink hover:text-cream">
                  Pesan
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const pts = [
    "Verifikasi seller berlapis",
    "Escrow pembayaran otomatis",
    "Refund instan bila gagal",
    "Dukungan 24/7 berbahasa Indonesia",
  ];
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--emerald-deep)]">
          Kepercayaan
        </div>
        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Standar yang tidak <em>berkompromi</em>.
        </h2>
        <p className="mt-5 max-w-lg text-muted-foreground">
          Kami percaya marketplace yang baik dibangun di atas kepercayaan. Setiap
          detail — dari verifikasi seller hingga proses pembayaran — dirancang untuk
          melindungi Anda.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {pts.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--emerald-deep)]/10 text-[var(--emerald-deep)]">
                <Check className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      <figure className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-cream shadow-[var(--shadow-lift)]">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--emerald-deep)]/30 blur-3xl" />
        <blockquote className="relative font-serif text-2xl leading-snug md:text-3xl">
          “NodeKPT mengubah cara saya membeli VPS. Tidak ada lagi tebak-tebakan —
          hanya seller yang benar-benar bisa diandalkan.”
        </blockquote>
        <figcaption className="relative mt-8 flex items-center gap-3 text-sm">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 font-serif italic">
            R
          </div>
          <div>
            <div>Rian Pradana</div>
            <div className="text-cream/60 text-xs">Founder, Cendekia Cloud</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-cream md:px-16 md:py-24">
        <div className="absolute inset-0 bg-noise opacity-30" aria-hidden />
        <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--emerald-deep)]/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[var(--gold)]/15 blur-3xl" />

        <div className="relative max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Temukan VPS Anda <em className="text-[var(--gold)]">hari ini</em>.
          </h2>
          <p className="mt-5 text-cream/75 md:text-lg">
            Daftar gratis dan jelajahi marketplace dengan ratusan VPS dari seller
            terverifikasi di seluruh dunia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5">
              Mulai gratis <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-cream/25 px-6 py-3 text-sm text-cream/90 transition-colors hover:bg-cream/10">
              Jadi seller
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-ink text-cream">
            <span className="font-serif text-base italic">N</span>
          </div>
          <div className="font-serif text-lg">NodeKPT</div>
          <span className="text-xs text-muted-foreground">© 2026</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Marketplace</a>
          <a href="#" className="hover:text-foreground">Harga</a>
          <a href="#" className="hover:text-foreground">Jadi Seller</a>
          <a href="#" className="hover:text-foreground">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
