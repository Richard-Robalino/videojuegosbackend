const videojuegoModel = {

    async getAllVideojuegosModel() { // Obtiene todos los videojuegos
        const peticion = await fetch("http://localhost:4000/videojuegos");
        const videojuegos = await peticion.json();
        return videojuegos;
    },
    
    async createVideojuegoModel(newVideojuego) { // Crea un nuevo videojuego
        const url = "http://localhost:4000/videojuegos";
        const peticion = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newVideojuego),
            headers: { "Content-Type": "application/json" }
        });
        const videojuego = await peticion.json();
        console.log(videojuego);
        return videojuego;
    },

    async updateVideojuegoModel(videojuegoId, updateVideojuegoData) { // Actualiza un videojuego
        const url = `http://localhost:4000/videojuegos/${videojuegoId}`;
        const peticion = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(updateVideojuegoData),
            headers: { "Content-Type": "application/json" }
        });
        const data = await peticion.json();
        return data;
    },

    async deleteVideojuegoModel(videojuegoId) { // Elimina un videojuego
        const url = `http://localhost:4000/videojuegos/${videojuegoId}`;
        const peticion = await fetch(url, {
            method: "DELETE",
        });
        const data = await peticion.json();
        return data;
    },

    async readVideojuegoModel(videojuegoId) { // Lee un videojuego por ID
        const peticion = await fetch(`http://localhost:4000/videojuegos/${videojuegoId}`);
        const data = await peticion.json();
        return data;
    }

};

export default videojuegoModel;
