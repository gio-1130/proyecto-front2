import "./Dashboard.css"
import fotoperfil from "../../assets/Foto_perfil_barra_lateral.png"
function Dashboard(){
return(
      <aside className="Barra_lateral">
        <img 
        className="Imagen_barra_lateral" 
        src={fotoperfil} 
        alt="" 
        />
        <h2 className="Nombre_app" >NombreApp</h2>
        <a href="">Dashboard</a>
        <a href="">Perfil</a>
        <a href="">Configuracion</a>
        <a className="Cerrar_sesion" href="">Cerrar Sesión</a>
      </aside> 
      
)
}

export default Dashboard;