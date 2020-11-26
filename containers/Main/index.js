import { Container as MainContainer } from './styled'
import {Header} from '../../components/';
import {Footer} from '../../components/';
const Main = ({children}) => {
    return (
        <MainContainer>
            <Header></Header>
            <div className="MainBg">
                {children}
            </div>
            <Footer></Footer>
        </MainContainer>
    )
}

export default Main