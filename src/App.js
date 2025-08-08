import { useState } from "react";
import { Droplet, BatteryFull, Satellite, Sun, Star, Check } from "lucide-react";
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
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <img
          src={wanderorb}
          alt="WanderOrb"
          className="w-80 h-80 object-contain drop-shadow-[0_0_30px_#00f7ff] mb-10 transition-transform duration-700 hover:scale-105"
        />
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          Entdecke den <span className="text-cyan-400">WanderOrb</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Dein smarter Reisebegleiter – für klare Orientierung, starke Erlebnisse und mühelose Kommunikation weltweit.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            className="px-6 py-4 rounded-full border border-gray-300 text-lg focus:outline-none focus:border-cyan-400"
            required
          />
          <button className="px-8 py-4 rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-400 transition">
            {isSubmitted ? "✓ Angemeldet!" : "Jetzt entdecken"}
          </button>
        </form>
      </section>

      <section className="py-32 bg-white text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
          Was macht WanderOrb <span className="text-cyan-500">besonders</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto px-6">
          {[
            { img: feature1, title: "Navigation mit Weitblick", desc: "Freischwebende holografische Karten zeigen dir jeden Winkel – sogar ohne Internet." },
            { img: feature2, title: "Weltweit verstehen", desc: "KI-gestützte Sofortübersetzung für Gespräche in über 150 Sprachen." },
            { img: feature3, title: "Mitdenken in Echtzeit", desc: "Dynamische Planung je nach Wetter, Events oder Menschenmengen." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl shadow-md hover:shadow-cyan-400/30 transition">
              <img src={item.img} alt={item.title} className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-gray-50 text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
          WanderOrb im <span className="text-cyan-500">Einsatz</span>
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-16">
          Von urbanen Dschungeln bis zu echten Wildnis-Abenteuern
        </p>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mb-20">
          {[
            { img: lifestyle1, title: "Urban Mode", desc: "Navigiere durch Smart Cities mit Verkehrsanalyse und Innenraumkarten." },
            { img: lifestyle3, title: "Wild Explorer", desc: "Finde sichere Routen auch ohne Netz – dank Offline-Tracking und Sonnenenergie." },
            { img: lifestyle2, title: "Coastal Guide", desc: "Gezeitenwarnungen, geheime Küstenorte und lokale Highlights – alles in deiner Hand." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover object-center" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white max-w-6xl mx-auto rounded-3xl p-10 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Droplet size={28} className="text-white" />, label: "Wasserdicht", desc: "Bis 50m Tiefe", bg: "bg-cyan-500" },
              { icon: <BatteryFull size={28} className="text-white" />, label: "Lange Laufzeit", desc: "7 Tage Akku", bg: "bg-green-500" },
              { icon: <Satellite size={28} className="text-white" />, label: "Offline Ready", desc: "Satelliten-Backup", bg: "bg-yellow-500" },
              { icon: <Sun size={28} className="text-white" />, label: "Solar Power", desc: "Autark laden", bg: "bg-purple-500" }
            ].map((item, i) => (
              <div key={i}>
                <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
          Was unsere <span className="text-cyan-500">Kunden</span> sagen
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {[
            { avatar: avatar1, name: "Maria S.", text: "Einfach genial – die holografische Karte hat mir in Marrakesch so oft den Weg gezeigt!", rating: 5 },
            { avatar: avatar2, name: "Jonas K.", text: "Ich habe damit in Japan so viel leichter kommuniziert – absolute Empfehlung!", rating: 5 },
            { avatar: avatar3, name: "Lena P.", text: "Der Akku hält ewig, und die automatische Routenplanung ist super smart.", rating: 4 }
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-all">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 mx-auto rounded-full mb-4 object-cover" />
              <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={20} fill={j < t.rating ? "#facc15" : "none"} stroke="#facc15" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
              <span className="font-semibold text-gray-900">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            Preise & <span className="text-cyan-500">Pakete</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16">Wähle das perfekte Paket für deine Abenteuer</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { img: price1, title: "Basic", price: "299€", originalPrice: "349€", features: ["Hologramm-Navigation", "Offline-Karten", "Standard-Akku", "6 Monate Support"], popular: false },
              { img: price2, title: "Pro", price: "399€", originalPrice: "499€", features: ["Alles aus Basic", "Echtzeit-Übersetzung", "KI-Planung", "12 Monate Support"], popular: true },
              { img: price3, title: "Ultimate", price: "499€", originalPrice: "599€", features: ["Alles aus Pro", "Premium-Akku", "Lebenslange Updates", "Priority Support"], popular: false }
            ].map((p, i) => (
              <div key={i} className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${p.popular ? "scale-105 border-2 border-cyan-500" : "border border-gray-200"}`}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">Beliebteste Wahl</span>
                  </div>
                )}
                <div className="p-8">
                  <img src={p.img} alt={p.title} className="mx-auto mb-6 max-h-32 object-contain" />
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 text-center">{p.title}</h3>
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-cyan-500">{p.price}</span>
                    <span className="text-lg text-gray-400 line-through ml-2">{p.originalPrice}</span>
                  </div>
                  <ul className="text-gray-700 mb-8 space-y-3 text-left">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-center"><Check className="text-cyan-500 w-5 h-5 mr-3" />{f}</li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-full font-bold transition-all ${p.popular ? "bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg hover:shadow-xl" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}>Jetzt bestellen</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 text-sm">30 Tage Geld-zurück-Garantie • Kostenloser Versand inklusive</p>
          </div>
        </div>
      </section>
    </div>
  );
}
