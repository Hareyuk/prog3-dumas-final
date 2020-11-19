// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        id_user,
        puntaje
    } = req.body;

    return await db
        .collection("juego_1")
        .doc()
        .set(
            {
                id_user,
                puntaje
            }
        )
        .then(() => {
            console.log("Firebase 4 - Puntaje subido");
            res.status(200).json({ message: 'Post Creado', title })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};