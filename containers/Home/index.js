import { Container as Content } from './styled';
import Link from 'next/link';
import React, {useState} from 'react';
import {Header} from 'components';


//https://react-firebase-js.com/docs/react-firebase-auth/getting-started
//https://stackoverflow.com/questions/58406027/check-if-user-is-logged-in-or-not-using-firebase-in-react
import firebase from "firebase/app";
import "firebase/auth";

const Home = () => {
    var isUser = firebase.auth().currentUser;
    let name, profilePic;
    if (isUser != null) {
        name = isUser.nickname;
        profilePic = isUser.profilePic;
      }
    //console.log(isUser, " - ", profilePic);
    const listGames = [{name: "juego 1", img: "/img/juego_1.png", desc: "Descripción de videojuego 1 aún sin pensar"}, {name: "juego 2", img: "/img/juego_2.png", desc: "Descripción de videojuego 2 aún sin pensar"}];
    return (
        <Content>
            <section>
                <h1 className="fonted">Home</h1>
                {isUser != null ? (
                <div className="infoTextFull">
                    <div>
                    ¡Bienvenido a Rankaming! Ya que estás logeado... <br/><br/> ¿A qué jugarás ahora? ¿Tenés ganas de estar entre los primeros del ranking? ¡Ánimos! ¡Rankaming te apoya! <br/><br/>¡Ve adelante y dá con todo!
                    </div>
                </div>) : 
                <div className="infoText">
                    <div>
                        ¡Bienvenido a Rankaming! Un sitio web pequeño de juegitos donde la gente puede participar y subir sus puntajes al ranking en tiempo global. ¿Estás dispuesto a entrar? ¿Llegarás a estar entre los primeros?<br/><br/>¡Hacete una cuenta o inicia sesión si ya tienes!
                        uwu
                    </div>
                </div>}
                

                {isUser == null ? (
                    <div className="btnsUser">
                    <Link href="/signup">
                            <a>Sign Up</a>
                    </Link>
                    <Link href="/login">
                            <a>Login</a>
                    </Link>
                </div>
                ) : ""}
                
            </section>

            <section>
                <h1 className="fonted">Lista de juegos</h1>
                <div className="btnsGames">
                    {
                        listGames.map((game, index)=>
                                (isUser != null ? 
                                    <Link href={"/games/" + index}>
                                    <a>
                                        <div>
                                            <img src={game.img} alt={game.name}/>
                                            <h3>{game.name}</h3>
                                            <p>{game.desc}</p>
                                        </div>
                                    </a>
                                </Link>
                                    : 
                            <Link href="/login">
                                <a>
                                    <div>
                                        <img src={game.img} alt={game.name}/>
                                        <h3>{game.name}</h3>
                                    </div>
                                </a>
                            </Link>))
                }
                </div>

                
            </section>
        </Content>


    )
}

export default Home