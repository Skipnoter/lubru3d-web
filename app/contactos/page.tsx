import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá con Lubru3D para cotizaciones de impresión 3D personalizada.",
};

export default function Contactos() {
  return (
    <main className="p-8">
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          ¿Tenés una idea o proyecto en mente? Escribinos y lo charlamos sin
          compromiso.
        </p>
      </section>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 mt-8">
        <p className="mb-4 text-gray-700">
          📧 Email: <strong>contacto@lubru3d.com</strong>
        </p>
        <p className="mb-4 text-gray-700">
          📱 WhatsApp: <strong>+54 9 3624 072353</strong>
          <br />
          📱 WhatsApp: <strong>+54 9 3624 647710</strong>
        </p>

        <a
          href="https://wa.me/5491112345678"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </main>
  );
}
