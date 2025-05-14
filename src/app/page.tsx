// src/app/page.tsx

import Image from "next/image";
import Link from "next/link";

const productosPopulares = [
  {
    nombre: "Pan de muerto",
    descripcion: "Tradicional con toque de azahar",
    imagen: "/images/pan_muerto.jpg",
    precio: 25,
  },
  {
    nombre: "Concha",
    descripcion: "De vainilla, esponjosa y dulce",
    imagen: "/images/concha.jpg",
    precio: 10,
  },
  {
    nombre: "Bollo integral",
    descripcion: "Con granos naturales",
    imagen: "/images/bollo_integral.jpg",
    precio: 12,
  },
];

export default function Home() {
  return (
    <main className="bg-pan-cream text-pan-dark min-h-screen">
      <header className="bg-pan-brown text-white flex justify-between items-center px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-pan-gold">Panadería El Pan de Cada Día</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-pan-cream hover:text-pan-gold font-medium transition-colors duration-300">Inicio</Link>
          <Link href="#productos" className="text-pan-cream hover:text-pan-gold font-medium transition-colors duration-300">Productos</Link>
          <Link href="#novedades" className="text-pan-cream hover:text-pan-gold font-medium transition-colors duration-300">Novedades</Link>
          <Link href="#nosotros" className="text-pan-cream hover:text-pan-gold font-medium transition-colors duration-300">Nosotros</Link>
          <Link href="#pedidos" className="text-pan-cream hover:text-pan-gold font-medium transition-colors duration-300">Pedidos</Link>
        </nav>
      </header>

      <section className="flex flex-wrap justify-center items-start gap-10 py-10 px-5 bg-[#FAF6F0] text-center">
        <div className="max-w-xl my-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-pan-dark">Bienvenido a</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-pan-brown mb-6">
            EL PAN DE CADA DÍA
          </h1>
          <p className="text-lg text-[#604E42] mb-6">
            Horneamos con amor y tradición. Delicias que alegran tu día, hechas con los mejores ingredientes y una pizca de pasión en cada mordida.
          </p>
          <button className="mt-2 px-6 py-2 bg-pan-gold text-white rounded-lg hover:bg-[#9A3B3B] transition font-bold">
            VER NUESTRO MENÚ
          </button>
          <h2 className="mt-4 text-xl font-semibold text-pan-gold">#SABORQUESECOMPARTE</h2>
        </div>
      </section>

      <section id="productos" className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productosPopulares.map((producto, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pan-dark">{producto.nombre}</h3>
                <p className="text-sm text-[#604E42]">{producto.descripcion}</p>
                <p className="mt-2 font-bold text-[#9A3B3B]">${producto.precio} MXN</p>
                <button className="mt-2 px-4 py-1 bg-pan-gold text-white rounded hover:bg-[#AF6F35] transition">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center px-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="mt-4 animate-fade-in">
          <h2 className="text-3xl font-bold text-pan-brown">
            ¡Tradición y sabor en cada bocado!
          </h2>
        </div>
      </section>

      <footer className="mt-20 bg-pan-brown text-white py-10 px-6">
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-pan-gold uppercase">NAVEGACIÓN RÁPIDA</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#nosotros">Nosotros</Link></li>
              <li><Link href="#productos">Nuestros Productos</Link></li>
              <li><Link href="#">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-pan-gold uppercase">CONÉCTATE</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://wa.me/522380000000" target="_blank">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-pan-gold uppercase">CONTÁCTANOS</h3>
            <p className="text-sm">Calle del Sabor 123, Col. La Hogaza</p>
            <p className="text-sm">75700 Tehuacán, Pue.</p>
            <p className="text-sm">Tel: +52 238 123 4567</p>
            <p className="text-sm">pedidos@elpandecadadia.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
