import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavbarContainer = styled.div`
    width: 100vw;
    height: 50px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const LogoNavbar = styled.div`
    width: 120px;
    height: 40px;
    background-image: url('https://i.ibb.co/Jn2Y19m/todo.jpg');
    background-size: 100% 100%;
`

const AvatarUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    width: 35px;
    height: 35px;
    background-color: #C94287;
    border-radius: 50%;
    margin-right: 20px;
`

const Navbar = () => {

    return(
        <NavbarContainer id="navbar">
            <Link to="/"><LogoNavbar/></Link>
            <Link to="/login">Se connecter</Link>
            <Link to="/logout">Se déconnecter</Link>
            <AvatarUser>T</AvatarUser>
        </NavbarContainer>
    )
}

export default Navbar;