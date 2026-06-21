import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Server,
  Terminal,
  Sparkles,
} from "lucide-react";
import serverRack from "@/assets/server-rack.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NodeKPT — Marketplace VPS Premium" },
      {
        name: "description",
        content:
          "VPS kelas dunia dari seller terverifikasi. Marketplace VPS, Winstaller, dan Hypervisor dalam satu platform yang elegan dan terpercaya.",
      },
      { property: "og:title", content: "NodeKPT — Marketplace VPS Premium" },
      {
        property: "og:description",
        content: "VPS premium dari seller terverifikasi. Deploy dalam hitungan menit.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Locations />
      <Pricing />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  const items = ["Marketplace", "Winstaller", "Hypervisor", "Fitur", "Harga"];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg border border-gold/30 bg-gradient-to-br from-gold-soft/20 to-transparent">
            <span className="font-serif text-lg italic leading-none text-gold">N</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-tight">NodeKPT</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              VPS · Marketplace
            </div>
          </div>
        </a>
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
          <button className="hidden rounded-full px-4 py-2 text-sm text-foreground/90 transition-colors hover:bg-muted sm:inline-flex">
            Log in
          </button>
          <button className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-gold-soft to-gold-deep px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
            Mulai Gratis
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="constellation absolute inset-0" aria-hidden />
      <div className="radial-glow absolute left-1/2 top-1/3 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pt-20 pb-24 lg:grid-cols-[1.1fr_1fr] lg:pt-28 lg:pb-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
            Marketplace VPS Premium
          </div>

          <h1 className="mt-7 font-serif text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight">
            VPS kelas dunia,
            <br />
            <span className="italic text-gold-gradient">dikurasi</span>{" "}
            <span className="text-foreground/95">untuk Anda.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            NodeKPT menghubungkan Anda dengan seller VPS terverifikasi di seluruh
            dunia — performa enterprise, harga jujur, deploy dalam hitungan menit.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-gold-soft to-gold-deep px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
              Jelajahi Marketplace
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm text-foreground/90 backdrop-blur transition-colors hover:bg-card">
              <Terminal className="h-4 w-4 text-gold" />
              Lihat Live Demo
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
            {["Tanpa kontrak", "Pembayaran lokal", "Refund 7 hari"].map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-gold" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Terminal visual */}
        <TerminalCard />
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-transparent blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-[var(--shadow-lift)] backdrop-blur-xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <div className="text-xs text-muted-foreground">nodekpt — deploy.sh</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            v2.4
          </div>
        </div>

        {/* Code */}
        <div className="font-mono text-[13px] leading-relaxed p-6 space-y-2">
          <p>
            <span className="text-gold">$</span> curl -s install.nodekpt.com | bash
          </p>
          <p className="text-muted-foreground">→ Resolving nearest node: Jakarta-1</p>
          <p className="text-muted-foreground">
            → Provisioning <span className="text-foreground">4 vCPU</span> ·{" "}
            <span className="text-foreground">8 GB RAM</span> ·{" "}
            <span className="text-foreground">160 GB NVMe</span>
          </p>
          <p className="text-muted-foreground">
            → Hardening firewall · enabling SSH keys
          </p>
          <p className="pt-1">
            <span className="text-green-400">[ ok ]</span>{" "}
            <span className="text-foreground">VPS ready in 42s</span>{" "}
            <span className="text-muted-foreground">· uptime 99.97%</span>
          </p>
          <p className="text-muted-foreground">
            $ endpoint: <span className="text-gold">203.0.113.18</span>
          </p>
        </div>

        {/* Latency badge */}
        <div className="absolute bottom-5 left-5 rounded-xl border border-border bg-background/90 px-4 py-3 backdrop-blur">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Latency
          </div>
          <div className="font-serif text-3xl leading-tight">12 ms</div>
          <div className="text-[10px] text-muted-foreground">Asia · rata-rata</div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- LOCATIONS ----------------------------- */
function Locations() {
  const cities = ["Jakarta", "Singapore", "Tokyo", "Frankfurt", "New York", "London"];
  return (
    <section className="border-y border-border bg-background/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          Tersedia di lokasi pilihan
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-16">
          {cities.map((c) => (
            <div
              key={c}
              className="font-serif text-2xl text-foreground/55 transition-colors hover:text-foreground md:text-3xl"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PRICING ----------------------------- */
function Pricing() {
  const plans = [
    {
      tag: "Jakarta · ID",
      name: "Starter",
      specs: "2 vCPU · 4 GB · 80 GB NVMe",
      chips: ["KVM", "1 Gbps", "Anti-DDoS"],
      price: "Rp 65rb",
      featured: false,
    },
    {
      tag: "Singapore · SG",
      name: "Pro",
      specs: "4 vCPU · 8 GB · 160 GB NVMe",
      chips: ["KVM", "Dedicated IP", "Snapshots"],
      price: "Rp 145rb",
      featured: true,
    },
    {
      tag: "Tokyo · JP",
      name: "Scale",
      specs: "8 vCPU · 16 GB · 320 GB NVMe",
      chips: ["NVMe Gen4", "AMD EPYC", "Backup"],
      price: "Rp 320rb",
      featured: false,
    },
  ];

  return (
    <section id="harga" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
              Harga
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Performa premium,
              <br />
              untuk <span className="italic text-gold-gradient">setiap skala</span>.
            </h2>
          </div>
          <a
            href="#harga"
            className="inline-flex items-center gap-1.5 text-sm text-gold hover:gap-2.5 transition-all"
          >
            Lihat semua paket <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                p.featured
                  ? "border-gold/40 bg-gradient-to-b from-gold/[0.06] to-card shadow-[var(--shadow-gold)]"
                  : "border-border bg-card/60 hover:border-gold/30"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.tag}
                </div>
                {p.featured && (
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-gold">
                    Paling Laku
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-serif text-3xl tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.specs}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="mt-auto flex items-end justify-between gap-3">
                <div>
                  <div className="font-serif text-4xl text-gold-gradient">
                    {p.price}
                  </div>
                  <div className="text-xs text-muted-foreground">per bulan</div>
                </div>
                <button
                  className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm transition-all ${
                    p.featured
                      ? "bg-gradient-to-b from-gold-soft to-gold-deep text-primary-foreground shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
                      : "border border-border bg-background/40 text-foreground hover:border-gold/40 hover:text-gold"
                  }`}
                >
                  Deploy <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FEATURES ----------------------------- */
function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Seller terverifikasi",
      desc: "Setiap seller melewati KYC dan audit performa berkala. Kualitas tidak diragukan.",
    },
    {
      icon: Zap,
      title: "Deploy instan",
      desc: "Provisioning otomatis dalam hitungan detik dengan Winstaller eksklusif NodeKPT.",
    },
    {
      icon: Globe,
      title: "Lokasi global",
      desc: "Pilih dari 5+ region utama Asia, Eropa, dan Amerika dengan latensi terendah.",
    },
    {
      icon: Server,
      title: "Hardware NVMe Gen4",
      desc: "AMD EPYC, NVMe Gen4, dan jaringan 10 Gbps di semua paket Pro ke atas.",
    },
  ];

  return (
    <section id="fitur" className="relative border-t border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="relative">
          <div className="absolute inset-0 -m-8 rounded-[2rem] bg-gradient-to-br from-gold/15 via-transparent to-transparent blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
            <img
              src={serverRack}
              alt="Server rack premium NodeKPT"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Fitur</div>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Infrastruktur yang
            <br />
            <span className="italic text-gold-gradient">tak perlu diragukan</span>.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Kami merancang NodeKPT untuk profesional yang menuntut performa,
            keandalan, dan transparansi — tanpa kompromi.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-gold/30 bg-gold/5">
                  <Icon className="h-4.5 w-4.5 text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-xl tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CTA ----------------------------- */
function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="constellation absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
        <Sparkles className="mx-auto h-6 w-6 text-gold" />
        <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          Siap memulai dengan
          <br />
          <span className="italic text-gold-gradient">NodeKPT</span>?
        </h2>
        <p className="mt-6 text-muted-foreground md:text-lg">
          Buat akun gratis, jelajahi marketplace, dan deploy VPS pertama Anda hari ini.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-gold-soft to-gold-deep px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
            Mulai gratis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button className="rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm text-foreground backdrop-blur transition-colors hover:bg-card">
            Bicara dengan tim
          </button>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md border border-gold/30 bg-gold/5">
            <span className="font-serif text-base italic text-gold">N</span>
          </div>
          <div className="font-serif text-lg">NodeKPT</div>
          <span className="text-xs text-muted-foreground">© 2026</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="hover:text-gold">Marketplace</a>
          <a href="#" className="hover:text-gold">Harga</a>
          <a href="#" className="hover:text-gold">Jadi Seller</a>
          <a href="#" className="hover:text-gold">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
