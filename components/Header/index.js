import Head from 'next/head';
import {Container} from './styled';
import Link from 'next/link';
import firebase from "firebase/app";
import "firebase/auth";
import {useState} from 'react';

const Header = () => {
    var isUser = firebase.auth().currentUser;
    const logout = async () => {
        return firebase.auth().signOut()
            .then(() => {
                // Sign-out successful.
                localStorage.clear();
                router.push("/login");
            })
            .catch((e) => {
                console.error(e);
            });
    };
    console.log(isUser);

    return (
        <Container>
            <div className="cont">
                    <ul>
                        <li>
                            <Link href="/">
                                <a><img src="/img/logoRHeader.png" alt="logo"/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ranking">
                            <a>Ranking</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                            <a>About</a>
                            </Link>
                        </li>
                        {!isUser ? "" : ( <li>
                            <Link href="/login" onClick={()=>logout()}>
                            <a className="LogOut">Log out</a>
                            </Link>
                        </li> )}
                    </ul>
                </div>
        </Container>

    )
}
export default Header