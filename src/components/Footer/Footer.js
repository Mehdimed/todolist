import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 50px;
    background-color: #C94287;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
`

const Footer = () => {
    return (
        <Container>
            <span>@Agence Freya</span>
        </Container>
    )
}

export default Footer;