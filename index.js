class Usuario {
    constructor(datos) {
        this.nombre = datos.nombre,
            this.apellido = datos.apellido,
            this.libros = datos.libros,
            this.mascotas = datos.mascotas;
    }

    getFullName() {
        return "El usuario es: " + this.nombre + " " + this.apellido
    }

}

let obj = {
    nombre: "Agostina",
    apellido: "Batiston",
    libros: "[{'Dracula', 'Bram Stoker'}, {'La biblioteca secreta', 'Haruki Murakami'}, { 'El eternauta' , 'Hector German Oesterheld'}]",
    mascotas: "[gato, gata, conejo]"
}

let usuario1 = new Usuario(obj)

console.log(usuario1)
console.log(usuario1.getFullName())