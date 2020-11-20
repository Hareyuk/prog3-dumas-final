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
    const logout  = async  ()=>
    {
        return auth
            .signOut()
            .then(() => {
                // Sign-out successful.
                router.push("/login");
                setLog(false);
            })
            .catch((e) => {
                console.error(e);
            });
        /* FirebaseAuth.getInstance().signOut();
        setLog(false); */
    }

    return (
        <>
            <ContWidthFull BColor="#EBE655">
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
                            <Link href="/login" onClick={()=>logout()}>
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