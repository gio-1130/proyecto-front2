import "./Login.css";

function Login() {
  return (
    <main className="Login">
      <h1 className="Login__titulo">Iniciar Sesión</h1>
      <p className="Login__texto">Bienvenido de nuevo. Accede a tu cuenta.</p>

      <form className="Login__form">
        <div className="Login__campo">
          <label htmlFor="email">Email o Nombre de Usuario</label>
          <input type="text" id="email" placeholder="tú@ejemplo.com" required />
        </div>

        <div className="Login__campo">
          <div className="Login__campo-header">
            <label htmlFor="password">Contraseña</label>
            <a href="#" className="Login__olvido">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="********"
            required
          />
        </div>

        <button type="submit" className="Login__boton">
          Iniciar Sesión
        </button>
      </form>

      <p className="Login__registro">
        ¿No tienes una cuenta? <a href="#">Regístrate</a>
      </p>
    </main>
  );
}

export default Login;
