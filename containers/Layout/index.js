import { Main } from 'containers';
import { Header } from 'components';

const Layout = ({children}) => {
    return (
        <>
            {/* <Header/>*/}
            <Main> 
                {children}
            </Main>
            {/* footer */}
        </>
    )
}

export default Layout