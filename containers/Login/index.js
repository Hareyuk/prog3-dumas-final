import {LoginForm} from 'components';
import { Container as Content } from './styled';

const Login = () => {
    return (
        <Content>
            <h1>Login</h1>
            <LoginForm/>
            <img src="/img/who_login.png" alt="Quién se logea?"/>
        </Content>
    )
}

export default Login;