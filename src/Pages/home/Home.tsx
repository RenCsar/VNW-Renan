import Contador from "../../Components/Contador/Contador";
import { Container } from "./Home.Styled";

const Home = () => {
    return (
        <Container>
            <h1>Uma surpresa será revelada ao final da contagem</h1>
            <h2>Aguardem...</h2>
            <Contador />
        </Container>
    )
}

export default Home;