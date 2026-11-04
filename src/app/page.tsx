import type { Metadata } from "next";

export const metadata: Metadata = {
  // Absolute: the root layout's title template ("%s | Site") would otherwise append the site name
  // to a title that already carries it ("Books | Shelf | Shelf").
  title: { absolute: "Smart Call Electric" },
  description: "Smart Call Electric provides expert residential and commercial electrical services across San Diego, offering reliable repairs, upgrades, and installations.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Smart Call Electric",
    description: "Smart Call Electric provides expert residential and commercial electrical services across San Diego, offering reliable repairs, upgrades, and installations.",
    type: "website",
    images: [{ url: "https://www.cocodly.com/opengraph.png", width: 1200, height: 630, alt: "Smart Call Electric" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Call Electric",
    description: "Smart Call Electric provides expert residential and commercial electrical services across San Diego, offering reliable repairs, upgrades, and installations.",
    images: ["https://www.cocodly.com/opengraph.png"],
  },
};

import "./site.css";
import { Fragment } from "react";
import { LocationMap } from "@/components/cocodly/map";
import { display, body } from "./fonts";
import { ArrowRight, Clock, MapPin, Receipt, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { ContactForm } from "@/components/site/contact-form";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";
import { AREAS, EMAIL, HOURS, LICENSE, LINKS, PHONE_DISPLAY, PHONE_HREF, PHONE_NOTE, SERVICES } from "@/lib/site/content";

const IMG = {
  hero: "https://vmmxizresedq89j2.public.blob.vercel-storage.com/brief-media/cmw1iyfzw000408k1af45gdbx/hero-eVD2P71D5VZaL7ytod2g6toZc8sunM.webp",
  ev: "https://vmmxizresedq89j2.public.blob.vercel-storage.com/brief-media/cmw1iyfzw000408k1af45gdbx/supporting-1-84UoH7PYOVYmocp2l55kDT2HzzMSoP.webp",
  meter: "https://vmmxizresedq89j2.public.blob.vercel-storage.com/brief-media/cmw1iyfzw000408k1af45gdbx/supporting-2-qIryiOIdGEBfMlDste512YKYjY9JD4.webp",
};

const CELLS = [
  { t: "Panel upgrades", p: "Modern capacity for today’s loads — air conditioning, induction ranges, heat pumps and chargers.", j: ["Main panel replacements", "Subpanels for garages and ADUs", "Load calculations"] },
  { t: "Residential electrical", p: "Everyday electrical work for San Diego homes, done neatly and to code.", j: ["Lighting installs", "New wiring and circuits", "Outlets, switches and GFCIs"] },
  { t: "Commercial services", p: "Lighting, wiring and repairs for shops, offices and small commercial spaces.", j: ["LED lighting retrofits", "Tenant improvement wiring", "Scheduled repairs"] },
  { t: "Troubleshooting & repairs", p: "We trace the fault, explain it plainly and fix it properly.", j: ["Tripping breakers", "Dead outlets and flickering lights", "Burning smells or warm plates"] },
];

const WHY = [
  { t: "Licensed & insured.", Icon: ShieldCheck, p: "A licensed and insured California electrical contractor, so the work is covered and permitted where it needs to be." },
  { t: "Prompt service.", Icon: Clock, p: "We show up when we say we will, and we keep you updated from the first call to the final test." },
  { t: "Upfront pricing.", Icon: Receipt, p: "A clear quote before work starts, with no surprises on the invoice." },
  { t: "Local experience.", Icon: MapPin, p: "We know San Diego homes, businesses and codes — from older bungalows to new builds." },
];

function Trace() {
  return (
    <>
      <span className="tr tr-v" aria-hidden />
      <span className="tr tr-h" aria-hidden />
      <span className="dot" aria-hidden />
    </>
  );
}

export default function HomePage() {
  const year = new Date().getFullYear();
  return (
    <div className={`site ${display.variable} ${body.variable}`} id="top">
      <RevealOnScroll />
      <Nav />
      <main>
      {/* HERO */}
<section className="hero on-navy w-full px-4 overflow-hidden" id="home-hero-san-diego-electric-2" data-editable-id="home-hero-san-diego-electric-2">
  <div className="hero-photo hidden md:block">
    <img src={IMG.hero} alt="Electrician in safety glasses landing wires in a neatly dressed breaker panel on a white stucco garage wall" width={1600} height={1000} loading="eager" fetchPriority="high" decoding="async" />
  </div>
  <div className="hero-copy w-full">
    <h1 className="d">
      <span>Reliable</span>
      <span>electricians</span>
      <span>in San Diego</span>
    </h1>
    <p className="hero-lede">
      Licensed, safety-first residential and commercial electrical work across San Diego and surrounding areas — panel upgrades, EV chargers, troubleshooting and repairs, done right the first time.
    </p>
    <div className="hero-cta">
      <Trace />
      <a href="#contact" className="btn btn-lg">Get a Free Quote</a>
      <a href={PHONE_HREF} className="hero-phone">
        <small>Call now</small>
        <span className="num d uline">{PHONE_DISPLAY}</span>
      </a>
    </div>
    <p className="hero-note">{PHONE_NOTE}</p>
  </div>
</section>

        {/* ABOUT */}
        <section className="about" id="about" data-editable-id="home-about-local-expertise-3">
          <div className="wrap grid">
            <div className="about-head">
              <span className="label">About Smart Call Electric</span>
              <h2 className="about-statement d" data-reveal="">
                <span className="ln"><span>Smart Call Electric is San Diego’s local,</span></span>
                <span className="ln"><span>safety-first electrical contractor, wiring</span></span>
                <span className="ln"><span>homes and businesses with work that’s</span></span>
                <span className="ln"><span>done right, labelled clearly and built</span></span>
                <span className="ln"><span>to last.</span></span>
              </h2>
            </div>
            <figure className="about-photo" data-reveal="">
              <img src={IMG.meter} alt="Gloved hands testing a kitchen outlet with a digital multimeter" width={900} height={1200} loading="lazy" decoding="async" />
            </figure>
            <div className="about-cols">
              <div data-reveal="">
                <h3 className="d">Local expertise</h3>
                <p>We know San Diego homes, codes and neighbourhoods across the county — the 1950s ranch houses, the coastal condos and the new builds inland.</p>
              </div>
              <div data-reveal="" className="d2">
                <h3 className="d">Safety first</h3>
                <p>Every job is done to code, with careful testing before we leave. If something isn’t safe, we tell you plainly and show you why.</p>
              </div>
              <div data-reveal="" className="d3">
                <h3 className="d">Quality workmanship</h3>
                <p>We leave tidy panels, labelled breakers and clean runs — and we stand behind our work after the truck pulls away.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services" data-editable-id="home-services-grid-4">
          <div className="wrap">
            <div className="grid services-head">
              <h2 className="d" data-reveal="clip">Every circuit, one call.</h2>
              <p data-reveal="">Full-service residential and commercial electrical work across San Diego — from a single dead outlet to a whole new panel.</p>
            </div>
            <div className="svc-grid">
              <article className="ev" data-reveal="" data-trace="">
                <Trace />
                <figure>
                  <img src={IMG.ev} alt="Level 2 EV charger with a neatly coiled cable on a light grey stucco wall beside a driveway" width={900} height={1200} loading="lazy" decoding="async" />
                </figure>
                <div className="ev-body">
                  <h3 className="d">EV charger installation</h3>
                  <p>Level 2 home and business chargers, installed safely and to code — sized to your panel, placed where the cable actually reaches.</p>
                  <ul className="jobs">
                    <li>Home Level 2 chargers</li>
                    <li>Dedicated circuits</li>
                    <li>Panel capacity checks</li>
                  </ul>
                  <div className="ev-link">
                    <a href="#contact" className="uline is-on">Get a quote <ArrowRight size={18} aria-hidden /></a>
                  </div>
                </div>
              </article>
              <div className="cells">
                {CELLS.map((c, i) => (
                  <a href="#contact" className={`cell d${i + 2}`} key={c.t} data-reveal="clip">
                    <h3 className="d">{c.t}</h3>
                    <p>{c.p}</p>
                    <ul className="jobs">{c.j.map((j) => <li key={j}>{j}</li>)}</ul>
                    <ArrowRight className="arrow" size={26} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="why on-navy" id="why-us" data-editable-id="home-why-choose-smart-call-5">
          <div className="wrap">
            <div className="grid why-top">
              <span className="label">Why Smart Call</span>
              <p>Four things you can count on every time we’re called.</p>
            </div>
            {WHY.map(({ t, Icon, p }) => (
              <div className="grid why-row" key={t}>
                <h3 className="d" data-reveal="clip">{t}</h3>
                <div data-reveal="" className="d2">
                  <Icon size={28} strokeWidth={1.5} aria-hidden />
                  <p>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="area" id="service-area" data-editable-id="home-service-area-map-6">
          <div className="area-map">
            <LocationMap query="San Diego County, CA" zoom={9} mapStyle="light" title="Map of San Diego County" className="area-map-inner" />
          </div>
          <div className="wrap grid">
            <div className="area-panel" data-reveal="clip">
              <h2 className="d">Serving San Diego and surrounding areas</h2>
              <p>Smart Call Electric serves homes and businesses across San Diego and nearby communities.</p>
              <ul className="area-list">{AREAS.map((a) => <li key={a}>{a}</li>)}</ul>
              <p className="area-note">Sample list — confirm the communities you serve.</p>
              <p className="area-call">Don’t see your area? Call us — we’ll let you know if we can help.</p>
              <a href={PHONE_HREF} className="area-phone d">{PHONE_DISPLAY}</a>
              <p className="area-links"><a className="uline" href="https://www.google.com/maps/place/San+Diego+County,+CA" target="_blank" rel="noopener noreferrer">Open in Maps</a></p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact" data-editable-id="home-contact-form-section-7">
          <div className="wrap grid">
            <div className="contact-left">
              <div className="contact-head">
                <h2 className="d" data-reveal="">Talk to an electrician today.</h2>
                <a href={PHONE_HREF} className="big-phone d" data-reveal="clip">{PHONE_DISPLAY}</a>
                <span className="phone-note">{PHONE_NOTE}</span>
              </div>
              <div className="contact-info">
                <div className="hours">
                  <h3>Business hours (placeholder — confirm)</h3>
                  <dl className="tnum">
                    {HOURS.map(([d, t]) => (<><dt key={d}>{d}</dt><dd key={d + "t"}>{t}</dd></>))}
                  </dl>
                </div>
                <div className="contact-meta">
                  <a href={`mailto:${EMAIL}`} className="uline" style={{ justifySelf: "start" }}>{EMAIL} <span style={{ color: "#4A5568" }}>(placeholder)</span></a>
                  <span>Serving San Diego and surrounding areas.</span>
                </div>
              </div>
            </div>
            <div className="form-panel" data-reveal="" data-trace="">
              <Trace />
              <h3 className="d">Get a free quote</h3>
              <p>Tell us what’s going on. We’ll call you back to talk it through.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer on-navy" id="home-footer-8" data-editable-id="home-footer-8">
        <div className="wrap">
          <p className="footer-mark d" data-reveal="clip">Smart Call Electric</p>
          <div className="grid footer-cols">
            <div className="fcol fcol-1">
              <h4>Services</h4>
              <ul>{SERVICES.map((s) => <li key={s}><a href="#services" className="uline">{s}</a></li>)}</ul>
            </div>
            <div className="fcol fcol-2">
              <h4>Quick links</h4>
              <ul>{LINKS.map(([l, h]) => <li key={h}><a href={h} className="uline">{l === "Why Us" ? "Why Choose Us" : l}</a></li>)}</ul>
            </div>
            <div className="fcol fcol-3">
              <h4>Contact</h4>
              <a href={PHONE_HREF} className="f-phone d">{PHONE_DISPLAY}</a>
              <p style={{ marginTop: 12 }}><a href={`mailto:${EMAIL}`} className="uline">{EMAIL}</a></p>
              <p style={{ marginTop: 12, opacity: 0.8 }}>{LICENSE}</p>
              <dl className="f-hours tnum">
                {HOURS.map(([d, t]) => (<><dt key={d}>{d}</dt><dd key={d + "t"} style={{ margin: 0 }}>{t}</dd></>))}
              </dl>
            </div>
            <div className="fcol fcol-4">
              <h4>Service area</h4>
              <p>San Diego and surrounding areas, including {AREAS.slice(1, 7).join(", ")} and more.</p>
            </div>
          </div>
        </div>
        <div className="legal">
          <div className="wrap">
            <span>Licensed &amp; Insured · {LICENSE}</span>
            <span>© {year} Smart Call Electric. All rights reserved. · Privacy · Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
