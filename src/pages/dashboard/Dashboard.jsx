import "./Dashboard.css"
import fotoperfil from "../../assets/Foto_perfil_barra_lateral.png"


function Dashboard() {
  return (
    <><div className="contenedor">
      <aside className="Barra_lateral">
        <img
          className="Imagen_barra_lateral"
          src={fotoperfil}
          alt="" />
        <h2 className="Nombre_app">NombreApp</h2>
        <a href="">Dashboard</a>
        <a href="">Perfil</a>
        <a href="">Configuracion</a>
        <a className="Cerrar_sesion" href="">Cerrar Sesión</a>
      </aside>
    </div><div>
        <section className="Titulo_principal">
          <h2 className="Titulo">Bienvenido de nuevo</h2>
          <img className="Foto_perfil"
            src={fotoperfil}
            alt="" />
        </section>
      </div><section className="Tarjetas">
        <h2 className="TItulo_tarjetas">Panel de control</h2>
        <p className="Texto_tarejetas">Un resumen de la actividad de tu cuenta.</p>

         <div className="Tarjetas_contenedor">
            <div className="Tarjeta">
              <h3>Proyectos Activos</h3>
              <p>12</p>
            </div>
            <div className="Tarjeta">
              <h3>Tareas Completadas</h3>
              <p>86</p>
            </div>
            <div className="Tarjeta">
              <h3>Alertas</h3>
              <p>3</p>
            </div>
            <div className="Tarjeta">
              <h3>Miembros del equipo</h3>
              <p>8</p>
            </div>
            
          </div>
      </section><section className="Seccion_inferior">
          <div className="Notificaciones">
            <h3>Notificaciones</h3>

            <div className="Notificacion">
              <h4>Actualización del sistema programada</h4>
              <p>El mantenimiento se realizará el 25 de Diciembre a las 10 PM.</p>
            </div>

            <div className="Notificacion">
              <h4>Nueva factura disponible</h4>
              <p>Tu factura de Noviembre ya está lista para descargar.</p>
            </div>

            <div className="Notificacion">
              <h4>Recordatorio de reunión</h4>
              <p>Tienes una reunión de equipo hoy a las 3 PM.</p>
            </div>

            <a href="#" className="Ver_todo">Ver todas las notificaciones</a>
          </div>
          </section><div className="Accesos_Directos">
            <h3>Accesos Directos</h3>
            <button className="Boton_primario">Crear Nuevo Proyecto</button>
            <button className="Boton">Añadir Tarea</button>
            <button className="Boton">Invitar Miembro</button>
            <button className="Boton">Generar Reporte</button>
          </div></>
  )
}

export default Dashboard;