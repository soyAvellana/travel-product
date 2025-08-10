import { useState } from "react";
import {
  Droplet,
  BatteryFull,
  Satellite,
  Sun,
  Star,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from "lucide-react";
import wanderorb from "./assets/img/wanderorb.png";
import feature1 from "./assets/img/feature1.png";
import feature2 from "./assets/img/feature2.png";
import feature3 from "./assets/img/feature3.png";
import lifestyle1 from "./assets/img/lifestyle1.png";
import lifestyle2 from "./assets/img/lifestyle2.png";
import lifestyle3 from "./assets/img/lifestyle3.png";
import price1 from "./assets/img/price1.png";
import price2 from "./assets/img/price2.png";
import price3 from "./assets/img/price3.png";
import avatar1 from "./assets/img/avatar1.png";
import avatar2 from "./assets/img/avatar2.png";
import avatar3 from "./assets/img/avatar3.png";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setNavOpen(false);
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-gray-900 px-3 py-2 rounded shadow">
        Zum Inhalt springen
      </a>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToId("hero"); }}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded"
          >
            <img src={wanderorb} alt="OrbiX Logo" className="w-10 h-10 object-contain" />
            <span className="font-extrabold tracking-tight text-xl">OrbiX</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Hauptnavigation">
            <a href="#features-1" onClick={(e) => { e.preventDefault(); scrollToId("features-1"); }} className="hover:text-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Features</a>
            <a href="#einsatz" onClick={(e) => { e.preventDefault(); scrollToId("einsatz"); }} className="hover:text-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Einsatz</a>
            <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="hover:text-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Preise</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToId("faq"); }} className="hover:text-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#preise"
              onClick={(e) => { e.preventDefault(); scrollToId("preise"); }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E7490] text-white font-semibold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2"
              aria-label="Jetzt bestellen"
            >
              Jetzt bestellen <ArrowRight size={18} aria-hidden="true" />
            </a>
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden p-2 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2"
              aria-label={navOpen ? "Navigation schließen" : "Navigation öffnen"}
              aria-expanded={navOpen}
              aria-controls="mobile-nav"
              type="button"
            >
              {navOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div id="mobile-nav" role="navigation" aria-label="Mobile Navigation" className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-3 grid gap-2 text-sm">
              <a href="#features-1" onClick={(e) => { e.preventDefault(); scrollToId("features-1"); }} className="py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Features</a>
              <a href="#einsatz" onClick={(e) => { e.preventDefault(); scrollToId("einsatz"); }} className="py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Einsatz</a>
              <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Preise</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToId("faq"); }} className="py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">FAQ</a>
              <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#0E7490] text-white font-semibold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                Jetzt bestellen <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="main">
        <section id="hero" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFEFF] text-[#0E7490] text-sm font-medium mb-6">
                <Sparkles size={16} aria-hidden="true" /> Neu: KI-gestützte Routen in Echtzeit
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Klarer sehen. Sicherer reisen. Mehr <span className="text-[#0891B2]">erleben</span>.</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">OrbiX führt dich mit holografischer Navigation, <br></br>Live-Übersetzung und smarter Planung – überall, online wie offline.</p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0E7490] text-white font-bold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                  Jetzt starten <ArrowRight size={20} aria-hidden="true" />
                </a>
                <a href="#features-1" onClick={(e) => { e.preventDefault(); scrollToId("features-1"); }} className="px-8 py-4 rounded-full border border-gray-300 font-semibold hover:border-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                  Mehr erfahren
                </a>
              </div>
              <form onSubmit={handleSubmit} className="mt-8 flex gap-3 max-w-xl md:max-w-md mx-auto md:mx-0">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">E-Mail-Adresse</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Deine E-Mail-Adresse" className="w-full px-5 py-4 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2" required />
                </div>
                <button type="submit" className="px-6 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                  {isSubmitted ? "✓ Danke!" : "Demo erhalten"}
                </button>
              </form>
              <div aria-live="polite" className="sr-only">{isSubmitted ? "Danke! Wir melden uns per E-Mail." : ""}</div>
              <p className="text-sm text-gray-500 mt-3 inline-flex items-center gap-2"><ShieldCheck size={16} className="text-[#0E7490]" aria-hidden="true" /> 30 Tage Geld-zurück-Garantie</p>
            </div>
            <div className="order-1 md:order-2">
              <img src={lifestyle1} alt="Erlebnisaufnahme des OrbiX in Nutzung" className="w-full max-h-[520px] object-cover rounded-3xl shadow-xl" />
            </div>
          </div>
        </section>

        <section id="features-1" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={feature1} alt="Navigation mit Weitblick" loading="lazy" decoding="async" className="w-full max-h-[440px] object-contain" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Navigation mit <span className="text-[#0891B2]">Weitblick</span></h2>
              <p className="text-lg text-gray-600 mb-6">Freischwebende holografische Karten – präzise Orientierung auch offline. Immer der beste Überblick, egal wo du bist.</p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Offline-Karten & Indoor-Maps",
                  "Reisezeiten & Sicherheitshinweise in Echtzeit",
                  "Intuitive Gestensteuerung"
                ].map((t, i) => (
                  <li key={i} className="flex items-center"><Check className="text-[#0E7490] w-5 h-5 mr-3" aria-hidden="true" />{t}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E7490] text-white font-semibold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                  Jetzt testen <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features-2" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Weltweit <span className="text-[#0891B2]">verstehen</span></h2>
              <p className="text-lg text-gray-600 mb-6">Live-Übersetzung in über 150 Sprachen – inklusive Sprachausgabe und automatischer Erkennung.</p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Kontextbezogene Übersetzung",
                  "Dialekte & Fachbegriffe",
                  "Gesprächsmodus & Transkription"
                ].map((t, i) => (
                  <li key={i} className="flex items-center"><Check className="text-[#0E7490] w-5 h-5 mr-3" aria-hidden="true" />{t}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E7490] text-white font-semibold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                  Jetzt testen <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div>
              <img src={feature2} alt="Weltweit verstehen" loading="lazy" decoding="async" className="w-full max-h-[440px] object-contain" />
            </div>
          </div>
        </section>

        <section id="features-3" className="bg-white">
          <div className="max-w-7xl mx_auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={feature3} alt="Mitdenken in Echtzeit" loading="lazy" decoding="async" className="w-full max-h-[440px] object-contain" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Mitdenken in <span className="text-[#0891B2]">Echtzeit</span></h2>
              <p className="text-lg text-gray-600 mb-6">KI-Planung passt sich Wetter, Events und Menschenmengen an – für stressfreie Routen und mehr Erlebnisse.</p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Proaktive Vorschläge & Alerts",
                  "Mehr Sicherheit durch Crowd-Infos",
                  "Automatisierte Plan-Updates"
                ].map((t, i) => (
                  <li key={i} className="flex items-center"><Check className="text-[#0E7490] w-5 h-5 mr-3" aria-hidden="true" />{t}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E7490] text-white font-semibold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                  Jetzt testen <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="einsatz" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">OrbiX im <span className="text-[#0891B2]">Einsatz</span></h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Von urbanen Dschungeln bis zu echten Wildnis-Abenteuern.</p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { img: lifestyle1, title: "Urban Mode", desc: "Innenraumkarten, Verkehrs-Insights, sichere Night-Routes." },
                { img: lifestyle3, title: "Wild Explorer", desc: "Offline-Tracking, SOS-Funktionen, energieeffizient." },
                { img: lifestyle2, title: "Coastal Guide", desc: "Gezeitenwarnungen, versteckte Spots, lokale Highlights." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md">
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="w-full h-48 object-cover object-center" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center bg-white rounded-3xl p-8 shadow border border-gray-100">
              {[
                { icon: <Droplet size={28} className="text-white" aria-hidden="true" />, label: "Wasserdicht", desc: "Bis 50m Tiefe", bg: "bg-[#0E7490]" },
                { icon: <BatteryFull size={28} className="text-white" aria-hidden="true" />, label: "Lange Laufzeit", desc: "7 Tage Akku", bg: "bg-green-500" },
                { icon: <Satellite size={28} className="text-white" aria-hidden="true" />, label: "Offline Ready", desc: "Satelliten-Backup", bg: "bg-yellow-500" },
                { icon: <Sun size={28} className="text-white" aria-hidden="true" />, label: "Solar Power", desc: "Autark laden", bg: "bg-purple-500" }
              ].map((item, i) => (
                <div key={i}>
                  <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>{item.icon}</div>
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0E7490] text-white font-bold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                Jetzt Paket wählen <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Was unsere <span className="text-[#0891B2]">Kunden</span> sagen</h2>
              <p className="text-lg text-gray-600">Vertrauen entsteht durch echte Erfahrungen.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { avatar: avatar1, name: "Chen S.", text: "Der OrbiX hat mir in Marrakesch so oft den Weg gerettet.", rating: 5 },
                { avatar: avatar2, name: "Lefu K.", text: "In Japan viel einfacher kommuniziert – Übersetzung funktioniert top.", rating: 5 },
                { avatar: avatar3, name: "Matt P.", text: "Akku hält lange, Routenplanung spart Zeit. Sehr zufrieden.", rating: 4 }
              ].map((t, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl shadow-sm">
                  <img src={t.avatar} alt={`Avatar von ${t.name}`} loading="lazy" decoding="async" className="w-16 h-16 mx-auto rounded-full mb-4 object-cover" />
                  <div className="flex justify-center gap-1 mb-4 text-yellow-400" aria-label={`${t.rating} von 5 Sternen`}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={20} fill={j < t.rating ? "#facc15" : "none"} stroke="#facc15" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
                  <span className="font-semibold text-gray-900 text-center block">{t.name}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="text-[#0E7490]" size={18} aria-hidden="true" /> 4.8/5 basierend auf 1.200+ Bewertungen</div>
            </div>
          </div>
        </section>

        <section id="preise" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Preise & <span className="text-[#0891B2]">Pakete</span></h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Wähle das perfekte Paket für deine Abenteuer. Jederzeit kündbar.</p>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { img: price1, title: "Basic", price: "299€", originalPrice: "349€", features: ["Hologramm-Navigation", "Offline-Karten", "Standard-Akku", "6 Monate Support"], popular: false },
                { img: price2, title: "Pro", price: "399€", originalPrice: "499€", features: ["Alles aus Basic", "Echtzeit-Übersetzung", "KI-Planung", "12 Monate Support"], popular: true },
                { img: price3, title: "Ultimate", price: "499€", originalPrice: "599€", features: ["Alles aus Pro", "Premium-Akku", "Lebenslange Updates", "Priority Support"], popular: false }
              ].map((p, i) => (
                <div key={i} className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition ${p.popular ? "scale-105 border-2 border-[#0891B2]" : "border border-gray-200"}`}>
                  {p.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="bg-[#0E7490] text-white px-6 py-2 rounded-full text-sm font-bold">Beliebteste Wahl</span></div>
                  )}
                  <div className="p-8">
                    <img src={p.img} alt={p.title} loading="lazy" decoding="async" className="mx-auto mb-6 max-h-32 object-contain" />
                    <h3 className="text-3xl font-bold mb-2">{p.title}</h3>
                    <div className="text-center mb-6">
                      <span className="text-5xl font-extrabold text-[#0891B2]">{p.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{p.originalPrice}</span>
                    </div>
                    <ul className="text-gray-700 mb-8 space-y-3 text-left">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-center"><Check className="text-[#0E7490] w-5 h-5 mr-3" aria-hidden="true" />{f}</li>
                      ))}
                    </ul>
                    <button className={`w-full py-4 rounded-full font-bold transition ${p.popular ? "bg-[#0E7490] text-white hover:bg-[#0891B2]" : "bg-gray-100 text-gray-900 hover:bg-gray-200"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2`} aria-label={`Paket ${p.title} bestellen`} type="button">
                      Jetzt bestellen
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8">30 Tage Geld-zurück-Garantie • Kostenloser Versand</p>
          </div>
        </section>

        <section id="faq" className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">Häufige <span className="text-[#0891B2]">Fragen</span></h2>
            <div className="space-y-4">
              {[
                { q: "Brauche ich Internet für die Navigation?", a: "Nein, Karten sind offline verfügbar. Live-Infos (z. B. Events) kommen bei Verbindung automatisch dazu." },
                { q: "Wie lange hält der Akku?", a: "Bis zu 7 Tage bei normaler Nutzung. Das Gerät unterstützt zudem Solarladung." },
                { q: "In wie vielen Sprachen funktioniert die Übersetzung?", a: "In über 150 Sprachen mit automatischer Erkennung und Sprachausgabe." },
                { q: "Gibt es eine Geld-zurück-Garantie?", a: "Ja, du kannst 30 Tage ohne Risiko testen – volle Erstattung, wenn es nicht passt." }
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl">
                  <button
                    id={`faq-header-${i}`}
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2"
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-panel-${i}`}
                    type="button"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <ChevronDown className={`transition ${faqOpen === i ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {faqOpen === i && (
                    <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-header-${i}`} className="px-5 pb-5 text-gray-600">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0E7490] text-white font-bold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
                Zu den Paketen <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Bereit für dein nächstes <span className="text-[#0891B2]">Abenteuer</span>?</h3>
            <p className="text-gray-300 mb-8">Starte heute mit OrbiX und entdecke Orte, die andere verpassen.</p>
            <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2">
              Jetzt bestellen <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3"><img src={wanderorb} alt="OrbiX Logo" className="w-8 h-8 object-contain" /><span className="text-white font-extrabold">OrbiX</span></div>
            <p className="text-gray-400">Dein smarter Reisebegleiter für jede Situation.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features-1" onClick={(e) => { e.preventDefault(); scrollToId("features-1"); }} className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Features</a></li>
              <li><a href="#einsatz" onClick={(e) => { e.preventDefault(); scrollToId("einsatz"); }} className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Einsatz</a></li>
              <li><a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">Preise</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToId("faq"); }} className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} aria-hidden="true" /> <a href="mailto:info@orbix.com" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">info@orbix.com</a></li>
              <li className="flex items-center gap-2"><Phone size={16} aria-hidden="true" /> <a href="tel:+49123456789" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded">+49 123 456 789</a></li>
              <li className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> Berlin, Deutschland</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Sicherheit</h4>
            <div className="flex items-center gap-2 text-sm text-gray-400"><ShieldCheck size={18} className="text-[#0E7490]" aria-hidden="true" /> 30 Tage Geld-zurück</div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-2"><CheckCircle size={18} className="text-[#0E7490]" aria-hidden="true" /> Kostenloser Versand</div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm pb-20 md:pb-6">© {new Date().getFullYear()} OrbiX. Alle Rechte vorbehalten.</div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-gray-200 px-4 py-3 pb-[env(safe-area-inset-bottom)] flex items-center justify-between">
        <div className="text-sm"><span className="font-semibold">Starte jetzt</span><span className="text-gray-500"> – 30 Tage risikofrei</span></div>
        <a href="#preise" onClick={(e) => { e.preventDefault(); scrollToId("preise"); }} className="px-4 py-2 rounded-full bg-[#0E7490] text-white font-semibold hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2">
          Jetzt bestellen
        </a>
      </div>
    </div>
  );
}
