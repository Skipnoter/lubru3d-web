import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Impresión 3D personalizada en Lubru3D. Diseños a medida y soluciones reales.",
};

export default function home() {
  return (
    <main className="min-h-screen p-8">
      <section className="bg-gray-50">
        <div className="max-w-6x1 max-auto px-6 py-24 text-center">
          <h1 className="text-4x1 font-blod">Lubru3D</h1>

          <p className="mt-4 text-lg">
            Impresiones 3D personalizadas y soluciones a medida.
          </p>
          <div className="mt-8 justify-center gap-4 flex flex-col sm:flex-row">
            <a
              href="/servicios"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              ver servicios
            </a>
            <a
              href="/contactos"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              contactar
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">¿Qué hago en Lubru3D?</h2>

        <p className="text-gray-600 max-w-3xl">
          Diseño e impresión 3D de piezas personalizadas, repuestos, prototipos
          y soluciones a medida para particulares y emprendimientos.
        </p>
      </section>

      <section className="mt-16 bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Servicios</h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Impresión 3D</h3>
              <p className="text-sm text-gray-600">
                Piezas funcionales y estéticas en distintos materiales.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Diseño de piezas</h3>
              <p className="text-sm text-gray-600">
                Modelado 3D desde cero o mejoras sobre diseños existentes.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Prototipos</h3>
              <p className="text-sm text-gray-600">
                Desarrollo rápido de prototipos para pruebas y validación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
