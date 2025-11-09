import React, { useState } from "react";

// ----------------------------------------------
// Angela Maid — Single-file React site template
// Modern, clean, mobile-first. Tailwind classes are used.
// Replace placeholder copy & images with your own content.
// ----------------------------------------------

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "how", label: "How it Works" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Blog" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// Blog topics: Fill these with your actual topics/titles later.
// If you have titles from your existing site, you can paste them below.
const blogPosts = [
  {
    id: 1,
    title: "[Topic] How to choose the right part-time helper",
    date: "2025-04-01",
    excerpt:
      "A quick decision guide on evaluating experience, background checks, and availability for your household.",
  },
  {
    id: 2,
    title: "[Topic] Deep cleaning checklist before moving in/out",
    date: "2025-03-14",
    excerpt:
      "Room-by-room steps to ensure hygiene standards and what professionals will handle for you.",
  },
  {
    id: 3,
    title: "[Topic] Understanding domestic helper contracts in HK",
    date: "2025-02-20",
    excerpt:
      "Key clauses, responsibilities, and compliance considerations you should know.",
  },
];

const plans = [
  {
    name: "Standard",
    price: "$1680",
    period: "/ visit",
    features: [
      "4 hours on-site",
      "Basic home cleaning",
      "Eco-friendly supplies",
      "Email support",
    ],
    cta: "Book Standard",
    popular: false,
  },
  {
    name: "Plus",
    price: "$2980",
    period: "/ visit",
    features: [
      "6 hours on-site",
      "Deep cleaning focus area",
      "Kitchen + Bathroom detail",
      "Priority scheduling",
    ],
    cta: "Book Plus",
    popular: true,
  },
  {
    name: "Premium",
    price: "$4680",
    period: "/ visit",
    features: [
      "8 hours on-site",
      "Full deep clean",
      "Appliance exterior wipe-down",
      "Same-week rescheduling",
    ],
    cta: "Book Premium",
    popular: false,
  },
];

const services = [
  {
    title: "Regular Housekeeping",
    desc: "Weekly/bi-weekly cleaning for apartments and family homes.",
  },
  {
    title: "Deep Cleaning",
    desc: "Top-to-bottom refresh including high-touch and hard-to-reach areas.",
  },
  { title: "Move-in / Move-out", desc: "Pre/post tenancy detailed cleaning." },
  { title: "Post-renovation", desc: "Dust removal, air-out, and polish surfaces." },
  { title: "Part-time Helpers", desc: "Flexible hourly support tailored to routines." },
  { title: "Elderly Care Support", desc: "Light household tasks and companionship." },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-2xl bg-black/90 flex items-center justify-center text-white font-bold">
        A
      </div>
      <span className="font-semibold tracking-wide">Angela Maid</span>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <button
          className="md:hidden p-2 rounded-lg border border-neutral-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {/* hamburger */}
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((i) => (
            <li key={i.id}>
              <a className="hover:text-black/80 text-black/60" href={`#${i.id}`}>
                {i.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-xl bg-black text-white px-4 py-2 hover:opacity-90"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((i) => (
              <li key={i.id}>
                <a className="block py-2 text-black/80" href={`#${i.id}`} onClick={() => setOpen(false)}>
                  {i.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="inline-block rounded-xl bg-black text-white px-4 py-2"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-neutral-300 text-black/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
              Trusted home cleaning in Hong Kong
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
              A spotless home, <span className="text-black/50">without the hassle.</span>
            </h1>
            <p className="mt-4 text-black/70 max-w-xl">
              Angela Maid provides reliable housekeeping, deep cleaning, and flexible part-time helper services. Book online in minutes and enjoy hotel-level standards at home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-black text-white px-5 py-3 hover:opacity-90">
                Book Now
              </a>
              <a href="#services" className="rounded-xl border border-neutral-300 px-5 py-3 hover:bg-neutral-50">
                Explore Services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-black/60">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 7l-9 9-5-5" stroke="currentColor" strokeWidth="2"/></svg>
                Vetted & insured staff
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 8v8m4-4H8" stroke="currentColor" strokeWidth="2"/></svg>
                Same-week scheduling
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2"/></svg>
                Satisfaction guarantee
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm">
              {/* Replace with your image */}
              <div className="h-full w-full grid place-items-center text-black/40">
                <div className="text-center px-6">
                  <div className="text-6xl">🧼</div>
                  <p className="mt-2">Hero image placeholder</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm">
              <p className="text-xs text-black/60">Customer rating</p>
              <p className="text-lg font-semibold">4.9 / 5.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {kicker && (
        <p className="text-xs font-medium tracking-wide uppercase text-black/50">{kicker}</p>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-2 text-black/60">{subtitle}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="What we do"
          title="Home services built around your life"
          subtitle="Choose a one-off deep clean or a recurring plan. Our team brings supplies and follows a quality checklist."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-neutral-100 grid place-items-center mb-4">✨</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-black/60 text-sm mt-2">{s.desc}</p>
              <a href="#contact" className="inline-block mt-4 text-sm text-black/80 hover:underline">Get a quote →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Tell us your needs",
      desc: "Share home size, preferred date/time, and any special requests.",
    },
    {
      title: "We match the right pro",
      desc: "We assign experienced staff based on your schedule and priorities.",
    },
    {
      title: "Relax while we handle it",
      desc: "Track your booking, get reminders, and rate the service after.",
    },
  ];
  return (
    <section id="how" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Simple" title="How it works" subtitle="Three steps from booking to sparkling." />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 p-6">
              <div className="h-10 w-10 rounded-full bg-black text-white grid place-items-center font-semibold">{i + 1}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="text-black/60 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Transparent" title="Simple pricing" subtitle="Pick a plan or request a custom quote for larger homes and offices." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 shadow-sm ${
                p.popular ? "border-black" : "border-neutral-200"
              } bg-white relative`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 text-xs bg-black text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="font-semibold">{p.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-3xl font-semibold">{p.price}</span>
                <span className="text-black/60">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-black/70">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full text-center rounded-xl bg-black text-white px-4 py-2">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Professional, punctual, and my kitchen never looked better. Rebooked immediately!",
      name: "C. Wong",
    },
    { quote: "Friendly staff and easy booking process.", name: "A. Lee" },
    {
      quote: "They handled our move-out clean perfectly—full deposit back!",
      name: "J. Chan",
    },
  ];
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Social proof" title="Loved by busy families" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <figure key={idx} className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
              <blockquote className="text-black/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-black/60">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Insights" title="From the Angela Maid blog" subtitle="Share helpful guidance about housekeeping, compliance, and home hygiene." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <article key={p.id} className="rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] rounded-xl bg-neutral-100 border border-neutral-200 mb-4 grid place-items-center">📰</div>
              <h3 className="font-semibold leading-snug">{p.title}</h3>
              <p className="text-xs text-black/50 mt-1">{new Date(p.date).toLocaleDateString()}</p>
              <p className="text-sm text-black/60 mt-2">{p.excerpt}</p>
              <a href="#contact" className="inline-block text-sm mt-3 hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do you bring your own supplies?",
      a: "Yes. Our staff uses eco-friendly cleaning products. If you prefer specific products, tell us in the booking notes.",
    },
    {
      q: "Is the service insured?",
      a: "Yes, we carry liability coverage. We also run background checks for staff.",
    },
    {
      q: "Which areas do you cover?",
      a: "Hong Kong Island, Kowloon, and the New Territories. Extra travel fees may apply for remote locations.",
    },
    {
      q: "What’s your cancellation policy?",
      a: "Free changes up to 24 hours before the appointment. Same-day cancellations may incur a fee.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Questions" title="Frequently asked" />
        <div className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-black/60">{open === i ? "–" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-black/70 text-sm">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Get in touch" title="Request a quote" subtitle="Tell us about your home and preferred time. We'll confirm within one business day." />
        <form className="mt-8 grid gap-4 md:grid-cols-2 bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
          <div className="grid gap-2">
            <label className="text-sm text-black/70">Full name</label>
            <input className="border border-neutral-300 rounded-xl px-3 py-2" placeholder="e.g., Angela Chan" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-black/70">Email</label>
            <input className="border border-neutral-300 rounded-xl px-3 py-2" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-black/70">Phone</label>
            <input className="border border-neutral-300 rounded-xl px-3 py-2" placeholder="+852 …" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-black/70">Service type</label>
            <select className="border border-neutral-300 rounded-xl px-3 py-2">
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm text-black/70">Message</label>
            <textarea className="border border-neutral-300 rounded-xl px-3 py-2 min-h-[120px]" placeholder="Tell us about your home size, preferred date/time, and any requests." />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-xs text-black/60">By submitting, you agree to our terms and privacy policy.</p>
            <button className="rounded-xl bg-black text-white px-5 py-2">Send request</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-black/60">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs">Reliable housekeeping and helper services in Hong Kong. Modern, clear pricing, and great support.</p>
          </div>
          <div>
            <h4 className="font-medium text-black/80">Services</h4>
            <ul className="mt-2 space-y-1">
              {services.slice(0, 5).map((s) => (
                <li key={s.title} className="hover:text-black/80"><a href="#services">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-black/80">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-black/80" href="#how">How it works</a></li>
              <li><a className="hover:text-black/80" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-black/80" href="#blog">Blog</a></li>
              <li><a className="hover:text-black/80" href="#faq">FAQ</a></li>
              <li><a className="hover:text-black/80" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-black/80">Contact</h4>
            <ul className="mt-2 space-y-1">
              <li>Email: hello@angelamaid.hk</li>
              <li>Phone: +852 1234 5678</li>
              <li>Hours: Mon–Sat 9:00–18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Angela Maid. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black/80">Privacy</a>
            <a href="#" className="hover:text-black/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans text-black bg-white">
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
