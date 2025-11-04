import "./Home.css";
import { Link } from "react-router-dom";
import Login from "../login/Login";

function Home() {
  return (
    <>
      <header className="Header">
        <div className="Header__container">
          <h1 className="Header__title">Mi Aplicación</h1>
          <div className="Header__link">
            <Link to="/login" className="Header__enlace">
              Iniciar sesion
            </Link>
            <a href="#" className="Header__enlace">
              Registrarse
            </a>
          </div>
        </div>
      </header>

      <main className="Inicio">
        <section className="Inicio__hero">
          <h1 className="Inicio__titulo">Bienvenido a Nuestra Plataforma</h1>
          <p className="Inicio__descripcion">
            Un espacio diseñado para simplificar tus tareas y potenciar tu
            productividad. Empieza en segundos.
          </p>
          <button className="Inicio__boton">Comenzar Ahora</button>
        </section>

        <section className="Inicio__caracteristicas">
          <h2 className="Inicio__subtitulo">Características Principales</h2>
          <p className="Inicio__texto">
            Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus
            objetivos de manera más eficiente.
          </p>

          <div className="Inicio__grid">
            <div className="Inicio__card">
              <h3>Gestión Centralizada</h3>
              <p>
                Accede y administra todas tus herramientas y datos desde un
                único panel de control intuitivo.
              </p>
            </div>
            <div className="Inicio__card">
              <h3>Flujos de Trabajo Ágiles</h3>
              <p>
                Optimiza tus procesos y colabora con tu equipo en tiempo real
                para una mayor productividad.
              </p>
            </div>
            <div className="Inicio__card">
              <h3>Seguridad Confiable</h3>
              <p>
                Mantenemos tu información segura con protocolos de encriptación
                y protección de última generación.
              </p>
            </div>
          </div>
        </section>

        <footer className="Inicio__footer">
          <div className="Inicio__links">
            <a href="#">Términos de Servicio</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Contacto</a>
          </div>
          <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
        </footer>
      </main>
    </>
  );
}

export default Home;
