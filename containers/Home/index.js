import {ContWidthFull} from 'components';
import { Container as Content } from './styled';
import Link from 'next/link';
import React, {useState} from 'react';

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
    console.log(isUser, " - ", profilePic);
    const listGames = [{name: "juego 1", img: "/img/imgPrueba.png", desc: "uwu"}, {name: "juego 2", img: "/img/imgPrueba.png", desc: "uwu"}];
    return (
        <Content>
            <section>
                <h1>Home</h1>
                {isUser != null ? (
                <div className="infoTextFull">
                    ¡Bienvenidos!
                </div>) : 
                <div className="infoText">
                    ¡Bienvenidos!
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
                <h1>Lista de juegos</h1>
                <div className="btnsUser">
                    {listGames.map((game, index)=>{
                        {isUser == null ? ( 
                        <Link href={"/games/" + index}>
                            <a>
                                <div>
                                    <img src={game.img} alt={game.name}/>
                                </div>
                            </a>
                        </Link>
                        )
                    :(
                        <Link href={"/games/" + index}>
                            <a>
                                <div>
                                    <img src={game.img} alt={game.name}/>
                                    <h3>{game.name}</h3>
                                    <p>{game.desc}</p>
                                </div>
                            </a>
                        </Link>
                    )}})}
                </div>

                
            </section>
        </Content>


    )
}

export default Home