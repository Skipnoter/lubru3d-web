import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6x1 mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl fotn-blod">
          Lubru3D
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/servicios" className="hover:text-blue-600">
            Servicios
          </Link>
          <Link href="/contactos" className="hover:text-blue-600">
            Contactos
          </Link>
        </div>
      </div>
    </nav>
  );
}
