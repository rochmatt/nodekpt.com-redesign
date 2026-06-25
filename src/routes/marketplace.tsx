import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Cpu,
  Filter,
  Globe2,
  HardDrive,
  Heart,
  History,
  MapPin,
  MemoryStick,
  Search,
  Server,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingUp,
  Wifi,
  X,
} from "lucide-react";
import { Sidebar, Topbar } from "./dashboard";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "VPS Marketplace — NodeKPT · Find the best VPS from trusted sellers" },
      { name: "description", content: "Browse VPS, Bare Metal, and Proxy services from verified sellers. Filter by location, price, vCPU and RAM. Pay in IDR (QRIS, VA). Full root access." },
    ],
  }),
  component: Marketplace,
});

function Marketplace() {
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
            <CategoryTabs />
            <SearchRow />
            <div className="mt-6 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
              <FilterPanel />
              <ProductGrid />
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
    <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          <Sparkles className="h-3 w-3" /> Verified Sellers · IDR Payment
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl">
          VPS <span className="text-gold-gradient">Marketplace</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Find the best VPS from trusted sellers — direct server control via integrated panel, full root access, instant deploy.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn-ghost">
          <History className="h-4 w-4 text-[color:var(--accent-strong)]" />
          Order History
        </button>
        <button className="btn-secondary">
          <Heart className="h-4 w-4 text-[color:var(--accent-strong)]" />
          Wishlist
          <span className="rounded-full bg-[color:var(--accent-tint)] px-1.5 text-[10px] font-semibold text-[color:var(--accent-strong)]">4</span>
        </button>
      </div>
    </div>
  );
}

/* ---------- CATEGORY TABS ---------- */
function CategoryTabs() {
  const cats = [
    { label: "All Products", count: 248, active: true },
    { label: "Cloud VPS", count: 142 },
    { label: "Bare Metal", count: 38 },
    { label: "Residential Proxy", count: 51 },
    { label: "Datacenter Proxy", count: 17 },
  ];
  return (
    <div className="mt-6 -mx-4 overflow-x-auto px-4 sm:mt-8 sm:mx-0 sm:px-0">
      <div className="flex min-w-max items-center gap-2">
        {cats.map((c) => (
          <button
            key={c.label}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
              c.active
                ? "border-[color:var(--accent)]/40 bg-[color:var(--accent-tint)] text-[color:var(--accent-strong)]"
                : "border-border bg-card/60 text-foreground/75 hover:border-[color:var(--accent)]/30 hover:text-foreground"
            }`}
          >
            {c.label}
            <span
              className={`rounded-full px-1.5 text-[10px] font-semibold ${
                c.active ? "bg-[color:var(--accent)] text-white" : "bg-foreground/5 text-foreground/60"
              }`}
            >
              {c.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- SEARCH ROW ---------- */
function SearchRow() {
  return (
    <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center">
      <div className="card-surface relative flex-1 p-0">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search VPS packages, sellers, or locations..."
          className="h-12 w-full rounded-2xl border-0 bg-transparent pl-11 pr-4 text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex gap-2">
        <div className="card-surface relative flex h-12 items-center gap-2 px-4 sm:min-w-[200px]">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Sort</span>
          <select className="ml-auto bg-transparent pr-1 text-sm font-medium text-foreground outline-none">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
            <option>Top Rated</option>
          </select>
        </div>
        <button className="btn-ghost lg:hidden">
          <Filter className="h-4 w-4 text-[color:var(--accent-strong)]" />
          Filters
        </button>
      </div>
    </div>
  );
}

/* ---------- FILTER PANEL ---------- */
function FilterPanel() {
  const locations = ["All locations", "Singapore", "Jakarta", "United States", "Germany", "Japan"];
  return (
    <aside className="card-surface hidden h-fit p-5 lg:block">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <Filter className="h-3.5 w-3.5 text-[color:var(--accent-strong)]" /> Filters
        </div>
        <button className="text-[11px] font-medium text-[color:var(--accent-strong)] hover:underline">Clear all</button>
      </div>

      <FilterSection title="Location">
        <select className="h-10 w-full rounded-xl border border-border bg-card/60 px-3 text-sm outline-none focus:border-[color:var(--accent)]/40">
          {locations.map((l) => <option key={l}>{l}</option>)}
        </select>
      </FilterSection>

      <FilterSection title="Price per month (Rp)">
        <div className="flex items-center gap-2">
          <input placeholder="Min" className="h-10 w-full rounded-xl border border-border bg-card/60 px-3 text-sm outline-none focus:border-[color:var(--accent)]/40" />
          <span className="text-muted-foreground">–</span>
          <input placeholder="Max" className="h-10 w-full rounded-xl border border-border bg-card/60 px-3 text-sm outline-none focus:border-[color:var(--accent)]/40" />
        </div>
      </FilterSection>

      <FilterSection title="vCPU" rangeLabel="1 – 32 vCPU">
        <input type="range" min={1} max={32} defaultValue={16} className="accent-[color:var(--accent)] w-full" />
      </FilterSection>

      <FilterSection title="RAM" rangeLabel="1 – 256 GB">
        <input type="range" min={1} max={256} defaultValue={64} className="accent-[color:var(--accent)] w-full" />
      </FilterSection>

      <FilterSection title="Storage Type">
        <div className="flex flex-wrap gap-2">
          {["SSD", "NVMe", "HDD"].map((s) => (
            <label key={s} className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 hover:border-[color:var(--accent)]/30">
              <input type="checkbox" className="accent-[color:var(--accent)]" />
              {s}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Seller Verification">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground/85">
          <input type="checkbox" defaultChecked className="accent-[color:var(--accent)]" />
          <CheckCircle2 className="h-4 w-4 text-[color:var(--accent-strong)]" />
          Verified sellers only
        </label>
      </FilterSection>

      <button className="btn-primary mt-2 w-full">
        Apply Filters
      </button>
    </aside>
  );
}

function FilterSection({ title, rangeLabel, children }: { title: string; rangeLabel?: string; children: React.ReactNode }) {
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

/* ---------- PRODUCT GRID ---------- */
type Product = {
  name: string;
  category: "Cloud VPS" | "Bare Metal" | "Proxy";
  seller: string;
  sellerInitial: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  vcpu: string;
  ram: string;
  disk: string;
  bandwidth: string;
  status: "Ready" | "Limited" | "Order soon";
  popular?: boolean;
  verified?: boolean;
};

const products: Product[] = [
  { name: "VPS Pico", category: "Cloud VPS", seller: "HostKey", sellerInitial: "H", location: "Singapore", rating: 4.8, reviews: 142, price: 101982, vcpu: "1 vCPU", ram: "1 GB RAM", disk: "40 GB SSD", bandwidth: "3 TB", status: "Ready", verified: true },
  { name: "VPS Nano", category: "Cloud VPS", seller: "HostKey", sellerInitial: "H", location: "Jakarta", rating: 4.9, reviews: 218, price: 125516, vcpu: "2 vCPU", ram: "2 GB RAM", disk: "60 GB SSD", bandwidth: "3 TB", status: "Ready", popular: true, verified: true },
  { name: "VPS v2 Pico", category: "Cloud VPS", seller: "GlobalCloud", sellerInitial: "G", location: "Germany", rating: 4.7, reviews: 96, price: 125516, oldPrice: 145000, vcpu: "1 vCPU", ram: "1 GB RAM", disk: "40 GB NVMe", bandwidth: "3 TB", status: "Ready", verified: true },
  { name: "VPS Mini", category: "Cloud VPS", seller: "HostKey", sellerInitial: "H", location: "United States", rating: 4.6, reviews: 73, price: 141205, vcpu: "2 vCPU", ram: "4 GB RAM", disk: "80 GB SSD", bandwidth: "5 TB", status: "Limited", verified: true },
  { name: "VPS v2 Nano", category: "Cloud VPS", seller: "GlobalCloud", sellerInitial: "G", location: "Japan", rating: 4.8, reviews: 184, price: 149050, vcpu: "2 vCPU", ram: "2 GB RAM", disk: "60 GB NVMe", bandwidth: "4 TB", status: "Ready", verified: true },
  { name: "VPS v2 Mini", category: "Cloud VPS", seller: "GlobalCloud", sellerInitial: "G", location: "Singapore", rating: 4.9, reviews: 312, price: 175353, vcpu: "2 vCPU", ram: "4 GB RAM", disk: "80 GB NVMe", bandwidth: "5 TB", status: "Ready", popular: true, verified: true },
];

function ProductGrid() {
  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{products.length}</span> of <span className="font-semibold text-foreground">248</span> packages
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <ActiveChip label="Singapore" />
          <ActiveChip label="SSD" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {products.map((p) => <ProductCard key={p.name + p.seller} p={p} />)}
      </div>

      <Pagination />
    </div>
  );
}

function ActiveChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent-tint)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--accent-strong)]">
      {label}
      <X className="h-3 w-3" />
    </span>
  );
}

function ProductCard({ p }: { p: Product }) {
  const Icon = p.category === "Bare Metal" ? HardDrive : p.category === "Proxy" ? Globe2 : Server;
  const statusStyles =
    p.status === "Ready"
      ? "border-emerald-600/30 bg-emerald-500/10 text-emerald-700"
      : p.status === "Limited"
        ? "border-amber-600/30 bg-amber-500/10 text-amber-700"
        : "border-foreground/15 bg-foreground/5 text-foreground/70";

  return (
    <div className="card-interactive group relative flex flex-col overflow-hidden p-5">
      {p.popular && (
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-soft to-gold-deep px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm">
          <TrendingUp className="h-3 w-3" /> Popular
        </div>
      )}

      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[color:var(--accent)]/25 bg-[color:var(--accent-tint)]">
          <Icon className="h-5 w-5 text-[color:var(--accent-strong)]" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {p.category}
          </div>
          <div className="mt-0.5 truncate text-[15px] font-bold tracking-tight text-foreground">{p.name}</div>
          <div className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-foreground/10 text-[9px] font-bold text-foreground/80">
              {p.sellerInitial}
            </span>
            <span className="truncate">{p.seller}</span>
            {p.verified && <CheckCircle2 className="h-3 w-3 shrink-0 text-[color:var(--accent-strong)]" />}
            <span className="text-foreground/30">•</span>
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{p.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-border/60 bg-foreground/[0.02] p-3">
        <Spec icon={Cpu} label={p.vcpu} />
        <Spec icon={MemoryStick} label={p.ram} />
        <Spec icon={HardDrive} label={p.disk} />
        <Spec icon={Wifi} label={`${p.bandwidth} traffic`} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[11px] text-foreground/70">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-foreground">{p.rating}</span>
          <span className="text-muted-foreground">({p.reviews})</span>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusStyles}`}>
          {p.status === "Order soon" ? <Clock className="h-3 w-3" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
          {p.status}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-border/60 pt-4">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] font-semibold text-muted-foreground">Rp</span>
            <span className="text-xl font-bold leading-none tracking-tight text-foreground">{p.price.toLocaleString("id-ID")}</span>
            <span className="text-[11px] text-muted-foreground">/mo</span>
          </div>
          {p.oldPrice && (
            <div className="mt-0.5 text-[10px] text-muted-foreground line-through">Rp {p.oldPrice.toLocaleString("id-ID")}</div>
          )}
        </div>
        <div className="flex shrink-0 gap-1.5">
          <button className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-foreground/70 transition-colors hover:border-[color:var(--accent)]/40 hover:text-[color:var(--accent-strong)]" aria-label="Wishlist">
            <Heart className="h-4 w-4" strokeWidth={1.75} />
          </button>
          <button className="btn-primary !h-9 !py-0 !px-3.5 !text-[12px]">
            <ShoppingCart className="h-3.5 w-3.5" />
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

function Spec({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] text-foreground/75">
      <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={1.75} />
      <span className="truncate font-medium">{label}</span>
    </div>
  );
}

function Pagination() {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
      <div className="text-xs text-muted-foreground">Page 1 of 24</div>
      <div className="flex items-center gap-1">
        <button className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium text-foreground/70 transition-colors hover:border-[color:var(--accent)]/40 hover:text-foreground">Prev</button>
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            className={`h-9 w-9 rounded-lg text-sm font-semibold transition-colors ${
              n === 1
                ? "bg-[color:var(--accent)] text-white"
                : "border border-border bg-card text-foreground/70 hover:border-[color:var(--accent)]/40 hover:text-foreground"
            }`}
          >
            {n}
          </button>
        ))}
        <span className="px-1 text-sm text-muted-foreground">…</span>
        <button className="h-9 w-9 rounded-lg border border-border bg-card text-sm font-semibold text-foreground/70 transition-colors hover:border-[color:var(--accent)]/40 hover:text-foreground">24</button>
        <button className="btn-secondary !h-9 !py-0 !px-3 !text-[13px]">
          Next <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
