import {ContWidthFull} from 'components';
import { Container as Content } from './styled';
import Link from 'next/link';

const Home = () => {
    return (
        <Content>
            <section>
                <h1>Home</h1>
                <div className="infoText">
                    ¡Bienvenidos!
                </div>
                <div className="btnsUser">
                    <Link href="/api/auth/signup">
                            <a>Sign Up</a>
                    </Link>
                    <Link href="/api/auth/login">
                            <a>Login</a>
                    </Link>
                </div>
            </section>

            <section>
                <h1>Lista de juegos</h1>
                <div className="btnsUser">
                    <Link href="/games/1">
                            <a><div>
                                    <img src="/img/imgPrueba.png" alt="juego"/>
                                </div></a>
                    </Link>
                    <Link href="/games/2">
                            <a><div>
                                    <img src="/img/imgPrueba.png" alt="juego"/>
                                </div></a>
                    </Link>
                </div>
            </section>
        </Content>


    )
}

export default Home