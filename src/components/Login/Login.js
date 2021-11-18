import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import Connexion from '../Connexion/Connexion'



const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Login = ({isConnected,setIsConnected}) => {

    let navigate = useNavigate();

    if(isConnected){
        navigate('/')
    }

    const postData = async (url, user) => {
        const response = await fetch(url , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })

        if (response.ok){
            return response;
          }
    }

    const tryConnect = (username,password) => {
        postData('/tryLogin', {username: username, password: password})
            .then(response => response.ok ? setIsConnected(true) : setIsConnected(false))
    }


    return(
        <Container>
            <Layout>
               <Connexion tryConnect={tryConnect}/>
            </Layout>
        </Container>
    )
}

export default Login;