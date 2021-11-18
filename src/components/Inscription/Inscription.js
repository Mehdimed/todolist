import styled from 'styled-components';
import Layout from '../Layout/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Inscription = () => {
    return(
        <Container>
            <Layout>
                Page d'inscription
            </Layout>
        </Container>
    )
}

export default Inscription;