import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {


  return (
    <Container>
      <Navbar/>
    </Container>
  );
}

export default App;
