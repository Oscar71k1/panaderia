// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import "./styles.css";

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
    <main>
      <header className="header">
        <div className="logo-link-header">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="logo-img"
          />
          <h1 className="logo">Panadería El Pan de Cada Día</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link href="#">Inicio</Link></li>
            <li><Link href="#productos">Productos</Link></li>
            <li><Link href="#novedades">Novedades</Link></li>
            <li><Link href="#nosotros">Nosotros</Link></li>
            <li><Link href="#pedidos">Pedidos</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="intro">
          <h1>Bienvenido a <span className="anahuac">El Pan de Cada Día</span></h1>
          <p>
            Desde hace más de 30 años, horneamos con pasión panes que conectan generaciones. Cada pieza cuenta una historia de tradición y sabor.
          </p>
          <button>Explora nuestro catálogo</button>
          <h2 className="hashtag">#SABORQUESECOMPARTE</h2>
        </div>

        <div className="galeria-scroll-track">
          <div className="galeria-custom">
            <img src="/images/cuernito.png" alt="Pan de muerto" className="img1" />
            <img src="/images/concha.jpg" alt="Concha" className="img2" />
            <img src="/images/bollo_integral.jpg" alt="Bollo integral" className="img3" />
            <img src="/images/pan_muerto.jpg" alt="Pan de muerto" className="img4" />
            <img src="/images/concha.jpg" alt="Concha" className="img5" />
            <img src="/images/bollo_integral.jpg" alt="Bollo integral" className="img6" />
            <img src="/images/concha.jpg" alt="Concha" className="img7" />
          </div>
        </div>
      </section>

      <section id="productos" className="productos-main">
        <div className="productos-hero">
          <h1>Productos Populares</h1>
          <p>Conoce los favoritos de nuestros clientes</p>
        </div>
        <div className="productos-grid">
          {productosPopulares.map((producto, index) => (
            <div key={index} className="producto-card">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={400}
                height={300}
              />
              <div className="producto-card-content">
                <h3>{producto.nombre}</h3>
                <p className="descripcion">{producto.descripcion}</p>
                <p className="precio">${producto.precio} MXN</p>
                <button className="btn-pedir">Añadir al carrito</button>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section logo">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="footer-logo"
            />
          </div>
          <div className="footer-section">
            <h3>Navegación</h3>
            <ul>
              <li><Link href="#nosotros">Nosotros</Link></li>
              <li><Link href="#productos">Productos</Link></li>
              <li><Link href="#">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Síguenos</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://wa.me/522380000000" target="_blank">WhatsApp</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contáctanos</h3>
            <p>Calle del Sabor 123, Col. La Hogaza</p>
            <p>75700 Tehuacán, Pue.</p>
            <p>Tel: +52 238 123 4567</p>
            <p>pedidos@elpandecadadia.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Panadería El Pan de Cada Día. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}