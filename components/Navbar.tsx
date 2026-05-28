import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b shadow-sm bg-black">
      <div className="max-w-6x1 mx-auto flex items-center justify-between p-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="overflow-hidden rounded-full transition-transform duration-300 ease-out group-hover:scale-130">
            <Image
              src="/logo_lubru3d.jpg"
              alt="Lubru3D Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
          </div>
        </Link>

        <div className="flex gap-6 text-sm font-medium text-slate-700">
          <Link href="/servicios" className="transition hover:text-blue-600">
            Servicios
          </Link>
          <Link href="/contactos" className="transition hover:text-blue-600">
            Contactos
          </Link>
        </div>
      </div>
    </nav>
  );
}
