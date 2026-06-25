import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Cpu,
  Filter,
  Gauge,
  HardDrive,
  Layers,
  MapPin,
  MemoryStick,
  Microchip,
  Network,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";
import { Sidebar, Topbar } from "./dashboard";

export const Route = createFileRoute("/marketplace/bare-metal")({
  head: () => ({
    meta: [
      { title: "Bare Metal — NodeKPT · Realtime Dedicated Servers, Hourly or Monthly" },
      {
        name: "description",
        content:
          "Dedicated servers in realtime — rent by the hour or month, pay in Rupiah from your balance. Full root access, instant deploy, verified datacenters.",
      },
    ],
  }),
  component: BareMetalPage,
});

function BareMetalPage() {
  return (
    <div className="theme-light min-h-screen bg-background text-foreground">
      <div className="constellation pointer-events-none fixed inset-0 opacity-40" aria-hidden />
      <div className="radial-glow pointer-events-none fixed left-1/3 top-0 h-[600px] w-[900px] -translate-x-1/2" aria-hidden />

      <div className="relative flex">
        <Sidebar activeLabel="Marketplace" />
        <main className="min-w-0 flex-1">
          <Topbar />
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <PageHeader />
            <StatStrip />
            <div className="mt-6 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
              <FilterPanel />
              <div className="min-w-0">
                <Toolbar />
                <ServerGrid />
                <Pagination />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- HEADER ---------- */
function PageHeader() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          <Sparkles className="h-3 w-3" /> Realtime Dedicated · Hourly Billing
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[color:var(--accent)]/25 bg-[color:var(--accent-tint)]">
            <Server className="h-5 w-5 text-[color:var(--accent-strong)]" strokeWidth={1.75} />
          </div>
          <h1 className="truncate text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl">
            Bare <span className="text-gold-gradient">Metal</span>
          </h1>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Realtime dedicated servers — rent by the hour or month, pay in Rupiah straight from your balance. Full root, IPMI, and instant provisioning.
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live · 218 servers
        </div>
        <button className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground hover:text-[color:var(--accent-strong)]">
          <RefreshCw className="h-3 w-3" /> Refresh inventory
        </button>
      </div>
    </div>
  );
}

/* ---------- STAT STRIP ---------- */
function StatStrip() {
  const stats = [
    { icon: Zap, label: "Avg deploy", value: "~90s" },
    { icon: ShieldCheck, label: "Verified DC", value: "12 sites" },
    { icon: Activity, label: "Uptime SLA", value: "99.95%" },
    { icon: Gauge, label: "Starting", value: "Rp 1.909/hr" },
  ];
  return (
    <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
      {stats.map((s) => (
        <div key={s.label} className="card-surface flex items-center gap-3 p-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[color:var(--accent-tint)]">
            <s.icon className="h-4 w-4 text-[color:var(--accent-strong)]" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="truncate text-sm font-bold text-foreground">{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- FILTER PANEL ---------- */
function FilterPanel() {
  return (
    <aside className="card-surface hidden h-fit p-5 lg:block">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <Filter className="h-3.5 w-3.5 text-[color:var(--accent-strong)]" /> Filters
        </div>
        <button className="text-[11px] font-medium text-[color:var(--accent-strong)] hover:underline">Reset</button>
      </div>

      <Section title="Search CPU">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="i7, Ryzen, Xeon, EPYC…"
            className="h-10 w-full rounded-xl border border-border bg-card/60 pl-9 pr-3 text-sm outline-none focus:border-[color:var(--accent)]/40"
          />
        </div>
      </Section>

      <Section title="Location">
        <select className="h-10 w-full rounded-xl border border-border bg-card/60 px-3 text-sm outline-none focus:border-[color:var(--accent)]/40">
          {["All countries", "Germany", "Singapore", "United States", "Netherlands", "Japan"].map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </Section>

      <Section title="Billing Mode">
        <div className="grid grid-cols-2 gap-2">
          {[
            { l: "Hourly", on: true },
            { l: "Monthly", on: false },
          ].map((m) => (
            <button
              key={m.l}
              className={`h-9 rounded-lg border text-xs font-semibold transition-colors ${
                m.on
                  ? "border-[color:var(--accent)]/40 bg-[color:var(--accent-tint)] text-[color:var(--accent-strong)]"
                  : "border-border bg-card/60 text-foreground/70 hover:border-[color:var(--accent)]/30"
              }`}
            >
              {m.l}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Price / month (Rp)">
        <div className="flex items-center gap-2">
          <input placeholder="Min" className="h-10 w-full rounded-xl border border-border bg-card/60 px-3 text-sm outline-none focus:border-[color:var(--accent)]/40" />
          <span className="text-muted-foreground">–</span>
          <input placeholder="Max" className="h-10 w-full rounded-xl border border-border bg-card/60 px-3 text-sm outline-none focus:border-[color:var(--accent)]/40" />
        </div>
      </Section>

      <Section title="RAM" rangeLabel="32 – 1024 GB">
        <input type="range" min={32} max={1024} defaultValue={256} className="w-full accent-[color:var(--accent)]" />
      </Section>

      <Section title="Disk" rangeLabel="0 GB – 100 TB">
        <input type="range" min={0} max={100} defaultValue={22} className="w-full accent-[color:var(--accent)]" />
      </Section>

      <Section title="GPU">
        <div className="flex flex-wrap gap-2">
          {["Any", "NVIDIA", "AMD", "None"].map((g) => (
            <label key={g} className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 hover:border-[color:var(--accent)]/30">
              <input type="checkbox" className="accent-[color:var(--accent)]" />
              {g}
            </label>
          ))}
        </div>
      </Section>

      <Section title="Network">
        <div className="flex flex-wrap gap-2">
          {["1 Gbps", "10 Gbps", "Unmetered"].map((g) => (
            <label key={g} className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 hover:border-[color:var(--accent)]/30">
              <input type="checkbox" className="accent-[color:var(--accent)]" />
              {g}
            </label>
          ))}
        </div>
      </Section>

      <button className="btn-primary mt-2 w-full">Apply Filters</button>
    </aside>
  );
}

function Section({ title, rangeLabel, children }: { title: string; rangeLabel?: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 border-t border-border/60 pt-5 first-of-type:mt-5 first-of-type:border-t-0 first-of-type:pt-5">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="text-[12px] font-semibold tracking-tight text-foreground">{title}</div>
        {rangeLabel && <div className="text-[10px] text-muted-foreground">{rangeLabel}</div>}
      </div>
      {children}
    </div>
  );
}

/* ---------- TOOLBAR ---------- */
function Toolbar() {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">8</span> of <span className="font-semibold text-foreground">218</span> dedicated servers ready
      </div>
      <div className="flex items-center gap-2">
        <div className="card-surface flex h-10 items-center gap-2 px-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Sort</span>
          <select className="bg-transparent text-sm font-medium text-foreground outline-none">
            <option>Best value</option>
            <option>Price: Low to High</option>
            <option>Most cores</option>
            <option>Most RAM</option>
          </select>
        </div>
        <button className="btn-ghost lg:hidden">
          <Filter className="h-4 w-4 text-[color:var(--accent-strong)]" /> Filters
        </button>
      </div>
    </div>
  );
}

/* ---------- SERVER GRID ---------- */
type BareMetal = {
  cpu: string;
  gpu: string;
  ram: string;
  cores: string;
  disk: string;
  location: string;
  flag: string;
  network: string;
  hour: number;
  month: number;
  badge?: "Best value" | "Hot" | "Low stock";
};

const servers: BareMetal[] = [
  { cpu: "Intel Core i7-6700", gpu: "Intel HD Graphics 530", ram: "64 GB DDR4", cores: "4 Core · 8 Thread", disk: "2× 250 GB SSD", location: "Germany", flag: "🇩🇪", network: "1 Gbit/s · Unmetered", hour: 1909, month: 1191801, badge: "Best value" },
  { cpu: "Intel Core i7-6700", gpu: "Intel HD Graphics 530", ram: "64 GB DDR4", cores: "4 Core · 8 Thread", disk: "2× 4096 GB ENT HDD", location: "Germany", flag: "🇩🇪", network: "1 Gbit/s · Unmetered", hour: 1909, month: 1191801 },
  { cpu: "Intel Core i7-7700", gpu: "Intel HD Graphics 630", ram: "64 GB DDR4", cores: "4 Core · 8 Thread", disk: "2× 256 GB NVMe", location: "Germany", flag: "🇩🇪", network: "1 Gbit/s · Unmetered", hour: 1909, month: 1191801, badge: "Hot" },
  { cpu: "AMD Ryzen 9 5950X", gpu: "—", ram: "128 GB DDR4", cores: "16 Core · 32 Thread", disk: "2× 1 TB NVMe", location: "Singapore", flag: "🇸🇬", network: "10 Gbit/s", hour: 4250, month: 2650000 },
  { cpu: "Intel Xeon E5-2680", gpu: "—", ram: "256 GB DDR4 ECC", cores: "12 Core · 24 Thread", disk: "4× 2 TB SSD", location: "Netherlands", flag: "🇳🇱", network: "10 Gbit/s · Unmetered", hour: 5499, month: 3299000, badge: "Low stock" },
  { cpu: "AMD EPYC 7402P", gpu: "NVIDIA RTX A4000", ram: "256 GB DDR4 ECC", cores: "24 Core · 48 Thread", disk: "2× 3.84 TB NVMe", location: "United States", flag: "🇺🇸", network: "10 Gbit/s", hour: 8990, month: 5390000 },
];

function ServerGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {servers.map((s, i) => (
        <ServerCard key={i} s={s} />
      ))}
    </div>
  );
}

function ServerCard({ s }: { s: BareMetal }) {
  const badgeColor =
    s.badge === "Best value"
      ? "bg-gradient-to-r from-gold-soft to-gold-deep text-white"
      : s.badge === "Hot"
        ? "bg-rose-500/10 text-rose-700 border border-rose-500/30"
        : "bg-amber-500/10 text-amber-700 border border-amber-500/30";

  return (
    <div className="card-interactive group relative flex flex-col overflow-hidden p-5">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--accent)]/40 to-transparent" />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <Microchip className="h-3 w-3" /> Dedicated
          </div>
          <div className="mt-1 truncate text-[15px] font-bold tracking-tight text-foreground">{s.cpu}</div>
          <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="text-base leading-none">{s.flag}</span>
            <MapPin className="h-3 w-3" />
            <span className="truncate">{s.location}</span>
          </div>
        </div>
        {s.badge && (
          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${badgeColor}`}>
            {s.badge}
          </span>
        )}
      </div>

      <div className="mt-4 space-y-2 rounded-xl border border-border/60 bg-foreground/[0.02] p-3">
        <SpecRow icon={Cpu} label={s.cpu} sub={s.cores} />
        <SpecRow icon={Layers} label={s.gpu === "—" ? "Integrated graphics" : s.gpu} />
        <SpecRow icon={MemoryStick} label={s.ram} />
        <SpecRow icon={HardDrive} label={s.disk} />
        <SpecRow icon={Network} label={s.network} />
        <SpecRow icon={Wifi} label="Traffic unlimited" />
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-border/60 pt-4">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] font-semibold text-muted-foreground">Rp</span>
            <span className="text-xl font-bold leading-none tracking-tight text-foreground">
              {s.hour.toLocaleString("id-ID")}
            </span>
            <span className="text-[11px] text-muted-foreground">/hour</span>
          </div>
          <div className="mt-0.5 text-[10px] text-muted-foreground">
            max Rp {s.month.toLocaleString("id-ID")}/mo
          </div>
        </div>
        <button className="btn-primary !h-9 !py-0 !px-3.5 !text-[12px]">
          <ShoppingCart className="h-3.5 w-3.5" />
          Order
        </button>
      </div>
    </div>
  );
}

function SpecRow({
  icon: Icon,
  label,
  sub,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[12px] text-foreground/80">
      <Icon className="h-3.5 w-3.5 shrink-0 text-[color:var(--accent-strong)]" strokeWidth={1.75} />
      <span className="truncate font-medium">{label}</span>
      {sub && <span className="ml-auto shrink-0 text-[11px] text-muted-foreground">{sub}</span>}
    </div>
  );
}

function Pagination() {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
      <div className="text-xs text-muted-foreground">Page 1 of 28</div>
      <div className="flex items-center gap-1">
        <button className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium text-foreground/70 hover:border-[color:var(--accent)]/40">Prev</button>
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            className={`h-9 w-9 rounded-lg text-sm font-semibold ${
              n === 1
                ? "bg-[color:var(--accent)] text-white"
                : "border border-border bg-card text-foreground/70 hover:border-[color:var(--accent)]/40"
            }`}
          >
            {n}
          </button>
        ))}
        <span className="px-1 text-sm text-muted-foreground">…</span>
        <button className="h-9 w-9 rounded-lg border border-border bg-card text-sm font-semibold text-foreground/70 hover:border-[color:var(--accent)]/40">28</button>
        <button className="btn-secondary !h-9 !py-0 !px-3 !text-[13px]">Next</button>
      </div>
    </div>
  );
}
