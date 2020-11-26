import {Container} from './styled';
import firebase from "firebase/app";
import "firebase/auth";
import {useState} from 'react';

const ListaRank = (props) => {
    const {NameGame, IdGame} = props;
    return (
        <Container>
            <div className="cont">
                <h3>{NameGame}</h3>
                <div className="Rank">
                    <ul>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                        <li>
                            Puntaje-Nombre
                        </li>
                    </ul>
                </div>
                </div>
        </Container>

    )
}
export default ListaRank;