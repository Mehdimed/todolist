import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Layout = ({ children }) => {
    return(
        <Container>
            <Navbar/>

                {children}

            <Footer/>
        </Container>
    )
}

export default Layout;