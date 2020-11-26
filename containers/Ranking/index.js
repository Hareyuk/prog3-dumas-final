import { Container as Content } from './styled';
import {ListaRank} from '../../components'

const Home = () => {
   return (
        <Content>
            <section>
                <h1>Ranking</h1>
                <div className="ListRanks">
                    <ListaRank NameGame="Juego 1" IdGame="1"></ListaRank>
                    <ListaRank NameGame="Juego 2" IdGame="2"></ListaRank>
                </div>
                
            </section>
        </Content>


    )
}

export default Home