import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const UsernameInput = styled.input`

`
const PasswordInput = styled.input`

`
const LoginButton = styled.button`

`

const Connexion = ({tryConnect}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <Container>
            <UsernameInput value={username} onChange={e => setUsername(e.target.value)}/>
            <PasswordInput value={password} onChange={e => setPassword(e.target.value)}/>
            <LoginButton onClick={() => {tryConnect(username,password)}}>Connexion</LoginButton>
        </Container>
    )
}

export default Connexion;