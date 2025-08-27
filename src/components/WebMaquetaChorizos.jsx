export default function WebMaquetaChorizos() {
  const waPhone = "573206574077";
  const waLink = "https://wa.me/" + waPhone;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/chorizos_base.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-red-700/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="tracking-wide uppercase text-sm md:text-base font-semibold mb-2">Santa Marta</p>
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow mb-4">
            Chorizos y Morcillas Artesanales J&A
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-8 text-white/90">
            Sabor auténtico samario para tu <strong>negocio</strong> o familia. Aprovecha nuestros <strong>Combos Familiares</strong>.
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition">
            Pedidos WhatsApp 320 657 4077
          </a>
        </div>

        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2 shadow">
          <img src="/logo-oficial-ja.jpg" alt="Logo oficial J&A" className="w-12 h-12 object-contain" />
        </div>
      </section>

      {/* COMBOS */}
      <section className="py-14 px-6 bg-gray-50" style={{ backgroundImage: "url('/fondo-palmeras.svg')" }}>
        <h2 className="text-2xl md:text-4xl font-extrabold text-red-700 text-center mb-10">
          Combos Familiares
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="rounded-2xl shadow-lg bg-white overflow-hidden">
            <div className="relative h-56 md:h-72 w-full">
              <img src="/chorizos_base.png" alt="Bandeja de chorizos artesanales J&A"
                className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute top-3 left-3 bg-red-600/95 text-white rounded-xl px-3 py-1 text-sm md:text-base font-extrabold shadow">
                COMBO 1
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-base md:text-lg mb-1">
                1 libra de <strong>MORCILLA</strong> + 1 bandeja de <strong>CHORIZOS</strong>
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-red-600 mb-4">$30.000</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow hover:opacity-95">
                Pedir por WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl shadow-lg bg-white overflow-hidden">
            <div className="relative h-56 md:h-72 w-full">
              <img src="/chorizo-y-morcilla-773x458.jpeg" alt="Chorizo y morcilla artesanales J&A"
                className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute top-3 left-3 bg-yellow-400/95 text-red-700 rounded-xl px-3 py-1 text-sm md:text-base font-extrabold shadow">
                COMBO 2
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-base md:text-lg mb-1">
                1 kilo de <strong>MORCILLA</strong> + 1 bandeja de <strong>CHORIZOS</strong>
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-red-600 mb-4">$40.000</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow hover:opacity-95">
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm md:text-base text-gray-600 mt-6">
          ¿Eres distribuidor(a) o emprendedor(a)? Escríbenos para precios al por mayor.
        </p>
      </section>

      {/* FRANJA VISUAL */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/chorizo-y-morcilla-773x458.jpeg')" }} />
        <div className="absolute inset-0 bg-red-700/70" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Sabor artesanal de Santa Marta</h3>
          <p className="text-white/90">Ingredientes seleccionados, recetas tradicionales y control de calidad constante.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-red-600 text-white text-center">
        <h4 className="text-2xl md:text-3xl font-extrabold mb-3">¿Listo para pedir?</h4>
        <p className="mb-6 text-white/90">Entrega en Santa Marta. Atención rápida por WhatsApp.</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="inline-block bg-white text-red-600 font-bold text-lg md:text-xl px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition">
          Pedidos al 320 657 4077
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-red-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4">© 2025 J&A – Santa Marta. Chorizos y Morcillas Artesanales.</p>
          <div className="flex items-center justify-center gap-6">
            <img src="/logo-chorizos.png" alt="Logo Chorizos Artesanales J&A" className="h-14 w-14 object-contain" />
            <img src="/logo-morcillas.png" alt="Logo Morcillas Artesanales J&A" className="h-14 w-14 object-contain" />
          </div>
        </div>
      </footer>

      {/* BOTÓN flotante de WhatsApp */}
      <a href={waLink} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition">
        💬
      </a>
    </div>
  );
}