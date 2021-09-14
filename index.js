const libros = [{ nombre: 'Dracula', autor: 'Bram Stoker' }, { nombre: 'La biblioteca secreta', autor: 'Haruki Murakami' }, { nombre: 'El eternauta', autor: 'Hector German Oesterheld' }]

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

    getBookNames() {
        const Arr = libros.map(libros => libros.nombre)
        return Arr;
    }

    addNewBook(nombre2, autor2) {
        const addBook = { nombre: nombre2, autor: autor2 }
        this.libros.push(addBook)

    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    CountMascotas() {
        return "Tiene " + this.mascotas.length + " mascotas"

    }

}


let usuario1 = new Usuario("Agostina", "Batiston", libros, ["perro", "gato", "conejo"])


console.log(usuario1.getFullName())
usuario1.addNewBook("Uzumaki", "Junji ito")
console.log(usuario1.getBookNames())
console.log(usuario1.CountMascotas())
usuario1.addMascota("gata")
console.log(usuario1.mascotas)