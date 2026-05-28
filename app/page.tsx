import ImageCarousel from "@/components/ImageCarousel";
import type { Metadata } from "next";

const carouselSlides = [
  { src: "/goku.jpg", alt: "Lubru3D slide 1", position: "center 35%",  backgroundSize: "contain" },
  { src: "/Lapras.jpg", alt: "Lubru3D slide 2", },
  { src: "/taurus.jpg", alt: "Lubru3D slide 3", position: "40% 50%" },
];

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Impresión 3D personalizada en Lubru3D. Diseños a medida y soluciones reales.",
};

export default function home() {
  return (
    <main className="min-h-screen p-8">
      <section className="mb-16">
        <ImageCarousel slides={carouselSlides} intervalMs={5000}>
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Lubru3D</h1>
            <p className="mt-4 text-lg text-white/90">
              Impresiones 3D personalizadas y soluciones a medida.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/servicios"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                ver servicios
              </a>
              <a
                href="/contactos"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                contactar
              </a>
            </div>
          </div>
        </ImageCarousel>
      </section>

      <section className="mt-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">¿Qué hago en Lubru3D?</h2>

        <p className="text-gray-600 max-w-3xl">
          Diseño e impresión 3D de piezas personalizadas, repuestos, prototipos
          y soluciones a medida para particulares y emprendimientos.
        </p>
      </section>

      <section className="mt-16  py-16">
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
