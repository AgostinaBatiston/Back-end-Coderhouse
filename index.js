class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.libros = libros,
            this.mascotas = mascotas;
    }

    getFullName() {
        return "El usuario es: " + this.nombre + " " + this.apellido
    }

}

let usuario1 = new Usuario("Agostina", "Batiston", "[{'Dracula', 'Bram Stoker'}, {'La biblioteca secreta', 'Haruki Murakami'}, { 'El eternauta' , 'Hector German Oesterheld'}]", "[gato, gata, conejo]")

console.log(usuario1)
console.log(usuario1.getFullName())