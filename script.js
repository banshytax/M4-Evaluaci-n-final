class UsuariosAPI {

    constructor() {

        this.usuarios = [];

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

        xhr.onload = () => {

            if (xhr.status === 200) {

                this.usuarios = JSON.parse(xhr.responseText);
                console.log("Datos cargados correctamente.");
                console.log(this.usuarios);

            } else {

                console.error("No fue posible obtener los datos.");

            }

        };

        xhr.onerror = () => {

            console.error("Error de conexión.");

        };

        xhr.send();

    }

    // Buscar usuario por nombre
    obtenerUsuario() {

        if (this.usuarios.length === 0) {
            alert("Los datos aún no se han cargado.");
            return null;
        }

        const nombre = prompt("Ingrese el nombre del usuario:");

        if (!nombre) {
            return null;
        }

        const usuario = this.usuarios.find(u =>
            u.name.toLowerCase() === nombre.trim().toLowerCase()
        );

        if (!usuario) {
            alert("Usuario no encontrado.");
            return null;
        }

        return usuario;

    }

    // 1. Listar nombres
    listarNombres() {

        console.clear();

        console.log("===== LISTA DE USUARIOS =====");

        this.usuarios.forEach(usuario => {

            console.log(usuario.name);

        });

    }

    // 2. Información básica
    buscarUsuarioBasico() {

        const usuario = this.obtenerUsuario();

        if (!usuario) return;

        console.clear();

        console.log("===== INFORMACIÓN BÁSICA =====");

        console.log("Nombre:", usuario.name);
        console.log("Username:", usuario.username);
        console.log("Correo:", usuario.email);

    }

    // 3. Dirección
    buscarDireccion() {

        const usuario = this.obtenerUsuario();

        if (!usuario) return;

        console.clear();

        console.log("===== DIRECCIÓN =====");

        console.log("Calle:", usuario.address.street);
        console.log("Suite:", usuario.address.suite);
        console.log("Ciudad:", usuario.address.city);
        console.log("Código Postal:", usuario.address.zipcode);
        console.log("Latitud:", usuario.address.geo.lat);
        console.log("Longitud:", usuario.address.geo.lng);

    }

    // 4. Información avanzada
    buscarInfoAvanzada() {

        const usuario = this.obtenerUsuario();

        if (!usuario) return;

        console.clear();

        console.log("===== INFORMACIÓN AVANZADA =====");

        console.log("Teléfono:", usuario.phone);
        console.log("Sitio Web:", usuario.website);

        console.log("Compañía:");

        console.log("Nombre:", usuario.company.name);
        console.log("CatchPhrase:", usuario.company.catchPhrase);
        console.log("BS:", usuario.company.bs);

    }

    // 5. Compañías
    listarCompanias() {

        console.clear();

        console.log("===== COMPAÑÍAS =====");

        this.usuarios.forEach(usuario => {

            console.log(
                usuario.company.name +
                " | " +
                usuario.company.catchPhrase
            );

        });

    }

    // 6. Nombres ordenados
    listarNombresOrdenados() {

        console.clear();

        console.log("===== USUARIOS ORDENADOS =====");

        const ordenados = [...this.usuarios];

        ordenados.sort((a, b) => a.name.localeCompare(b.name));

        ordenados.forEach(usuario => {

            console.log(usuario.name);

        });

    }

}

const usuarios = new UsuariosAPI();