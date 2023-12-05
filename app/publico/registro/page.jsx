export default function formularioRegistro(){
    return(
        <form action="">
            <ul>
                <li>
                    <label htmlFor="nombre">Tu nombre </label>
                    <input type="text" id="nombre" name="nombre"/>
                </li>
                <li>
                    <label htmlFor="correo">Tu correo </label>
                    <input type="text" id="email" name="email"/>
                </li>
                <li>
                    <label htmlFor="correo">Tu contraseña </label>
                    <input type="password" id="passwd" name="passwd"/>
                </li>
                <li>
                    <label htmlFor="correo">Repite tu contraseña </label>
                    <input type="password" id="passwd2" name="passwd2"/>
                </li>
                <li>
                    <button>Enviar</button>
                </li>
            </ul>

        </form>
    )
}