import Head from 'next/head';
import {ContWidthFull} from 'components';
import {Container} from './styled';
import Link from 'next/link';

const Header = () => {
    const login = false;
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
                        {!login ? "" : ( <li>
                            <Link href="/auth/logout">
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