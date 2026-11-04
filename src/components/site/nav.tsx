"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { LINKS, PHONE_DISPLAY, PHONE_HREF, PHONE_NOTE } from "@/lib/site/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <header className="nav" id="home-navbar-1" data-editable-id="home-navbar-1">
        <div className="wrap grid">
          <div className="wordmark-container">
            <a href="#top" onClick={() => setOpen(false)} className="flex-shrink-0">
              <img 
                src="https://vmmxizresedq89j2.public.blob.vercel-storage.com/uploads/FIzcYukiMXllnNytTFW24aUdV2aBuUF1/1793770652302-Gemini_Generated_Image_47ktyh47ktyh47kt.jpg" 
                alt="Smart Call Electric Logo" 
                className="h-10 w-auto object-contain"
              />
            </a>
            <a href="#top" className="wordmark d" onClick={() => setOpen(false)}>Smart Call Electric</a>
          </div>
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map(([l, h]) => (
              <a key={h} href={h} className="uline">{l}</a>
            ))}
          </nav>
          <div className="nav-right">
            <a href={PHONE_HREF} className="nav-phone d" title={PHONE_NOTE}>
              <Phone size={18} aria-hidden /> {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="btn">Get a Free Quote</a>
          </div>
          <button className="menu-btn" aria-expanded={open} aria-controls="menu-sheet" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
      <div id="menu-sheet" className={`sheet${open ? " open" : ""}`} aria-hidden={!open}>
        <ul>
          {LINKS.map(([l, h]) => (
            <li key={h}><a href={h} className="big d" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
        <a href={PHONE_HREF} className="sheet-phone d" tabIndex={open ? 0 : -1}>{PHONE_DISPLAY}</a>
        <small>{PHONE_NOTE}</small>
        <small>Serving San Diego &amp; surrounding areas</small>
        <a href="#contact" className="btn btn-lg" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Get a Free Quote</a>
      </div>
      <div className="callbar">
        <a href={PHONE_HREF}><Phone size={18} aria-hidden /> Call Now</a>
        <a href="#contact">Free Quote</a>
      </div>
    </>
  );
}
