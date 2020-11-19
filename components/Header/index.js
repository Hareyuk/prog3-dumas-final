import Head from 'next/head';
import {ContWidthFull} from 'components';
import {Container} from './styled';
import Link from 'next/link';
import firebase from "firebase/app";
import "firebase/auth";
import {useState} from 'react';

const Header = () => {
    var isUser = firebase.auth().currentUser;
    const [isLog, setLog] = useState((isUser == null ? false : true));
    const signOut = ()=>
    {
        FirebaseAuth.getInstance().signOut();
        setLog(false);
    }

    return (
        <>
            <ContWidthFull>
                <Container>
                    <img src="/img/minilogo.png" alt="logo"/>

                    <ul>
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
                            <Link href="#" onClick={()=>signOut()}>
                            <a>Log out</a>
                            </Link>
                        </li> )}
                    </ul>
                </Container>
            </ContWidthFull>
        </>

    )
}
export default Header