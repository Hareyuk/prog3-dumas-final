import {SignUpForm} from 'components';
import { Container } from './styled';

const SignUp = () => {
    return (
        <Container>
            <h1>Registro</h1>
            <SignUpForm/>
            <img src="/img/who_signup.png" alt="Quién se registra?"/>
        </Container>
    )
}

export default SignUp;