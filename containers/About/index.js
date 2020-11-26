import { Container as Content } from './styled';
import Link from 'next/link';
import React, {useState} from 'react';

const About = () => {
    return (
        <Content>
            <section>
                <h1 className="fonted">About</h1>
                <div className="infoTextFull">
                    <div>
                    Este es un sitio web que se desarolló como entrega del final de la materia Programación Multimedial 3, de carrera Tecnología Multimedial en Universidad Maimónides, con Leandro Amaro García de profesor.
                    </div>
                </div>
                <img src="img/about_me.png" alt="el autor Axel Dumas"/>
                <div className="infoTextFull">
                    <div>
                    ¡Estudiante de Universidad Maimónides a punto de pasar a cuarto año, con ganas de terminar este sitio web y también de aprobar la materia! Intentando aprender más de Next a medida que voy desarrollando este sitio web. Decidí hacer de esta temática porque me gustan los videojuegos, y sin darme cuenta el diseño de interfaz terminó muy influenciada por mi personalidad. <br/><br/> ¡Espero que disfruten del sitio web!
                    </div>
                </div>

            </section>

        </Content>

    )
}

export default About;