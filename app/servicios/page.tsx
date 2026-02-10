import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de impresión 3D, prototipado rápido y diseño 3D personalizado.",
};

export default function Servicios() {
  return (
    <main className="max-w-6x1 max-auto px-6 py-16">
      <h1 className="text-3x1 font-blod">Servicios</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-lg">Impresion 3D</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fabricacion de piezas personalizadas en distintos materiales.
          </p>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-lg">Prototipado rápido</h2>
          <p className="mt-2 text-sm text-gray-600">
            Validá ideas y diseños en tiempo récord.
          </p>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-lg">Diseño 3D</h2>
          <p className="mt-2 text-sm text-gray-600">
            Modelado 3D a medida según tu necesidad.
          </p>
        </div>
      </div>
    </main>
  );
}
