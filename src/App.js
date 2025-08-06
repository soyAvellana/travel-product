import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="font-sans bg-white text-gray-900">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <img
          src={wanderorb}
          alt="WanderOrb"
          className="w-72 h-72 object-contain drop-shadow-[0_0_35px_#00f7ff] mb-6 animate-pulse"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Wander<span className="text-cyan-400">Orb</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Der ultimative Reisebegleiter mit holografischer Navigation, KI-Übersetzung & smartem Design.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            className="px-6 py-4 rounded-full border border-gray-300 text-lg focus:outline-none focus:border-cyan-400"
            required
          />
          <button className="px-8 py-4 rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-400 transition">
            {isSubmitted ? "✓ Angemeldet!" : "Mehr erfahren"}
          </button>
        </form>
      </section>

      <section className="py-32 text-center">
        <h2 className="text-4xl font-extrabold mb-16">Warum WanderOrb?</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
          {[
            {
              img: feature1,
              title: "3D Hologramm",
              desc: "Freischwebende Karten in Echtzeit auf jedem Gelände.",
            },
            {
              img: feature2,
              title: "Echtzeit-Übersetzung",
              desc: "Über 150 Sprachen direkt in deinem Ohr.",
            },
            {
              img: feature3,
              title: "KI-Planung",
              desc: "Live-Optimierung deiner Route nach Wetter & Events.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 p-10 rounded-3xl shadow-xl hover:shadow-cyan-500/20 transition"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-20 h-20 mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10">Immer dabei</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Egal ob Stadt, Dschungel oder Strand – der WanderOrb führt dich intuitiv und intelligent durch jede Umgebung.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: lifestyle1,
                title: "Urban Mode",
                desc: "Navigiere durch Städte mit präziser Echtzeit-Analyse.",
              },
              {
                img: lifestyle2,
                title: "Wilderness Guide",
                desc: "Pfadfindung selbst in unkartiertem Gelände.",
              },
              {
                img: lifestyle3,
                title: "Coastal Tracker",
                desc: "Strandrouten, Gezeitenwarnung und geheime Orte.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Was unsere Kunden sagen</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              avatar: avatar1,
              name: "Maria S.",
              text: "Einfach genial – die holografische Karte hat mir in Marrakesch so oft den Weg gezeigt!",
              rating: 5,
            },
            {
              avatar: avatar2,
              name: "Jonas K.",
              text: "Ich habe damit in Japan so viel leichter kommuniziert – absolute Empfehlung!",
              rating: 5,
            },
            {
              avatar: avatar3,
              name: "Lena P.",
              text: "Der Akku hält ewig, und die automatische Routenplanung ist super smart.",
              rating: 4,
            },
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
              />
              <div className="flex justify-center mb-4 text-yellow-400 text-lg">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <span className="font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Preise & Pakete</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              img: price1,
              title: "Basic",
              price: "299€",
              features: [
                "Hologramm-Navigation",
                "Offline-Karten",
                "Standard-Akku",
              ],
            },
            {
              img: price2,
              title: "Pro",
              price: "399€",
              features: ["Alles aus Basic", "Echtzeit-Übersetzung", "KI-Planung"],
            },
            {
              img: price3,
              title: "Ultimate",
              price: "499€",
              features: [
                "Alles aus Pro",
                "Premium-Akku",
                "Lebenslange Updates",
              ],
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-cyan-500/20 transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="mx-auto mb-6 max-h-48 object-contain"
              />
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-4xl font-bold text-cyan-500 mb-6">{p.price}</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition">
                Jetzt bestellen
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cyan-500 text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Bereit für dein Abenteuer?</h2>
        <p className="mb-8 text-lg">
          Melde dich jetzt an und sei einer der Ersten, die den WanderOrb
          erhalten
        </p>
        <button className="px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition">
          Jetzt vorbestellen
        </button>
      </section>
    </div>
  );
}