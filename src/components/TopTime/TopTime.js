import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
    width: 100vw;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #62797A;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 25px ;
    margin-top: 25px ;
`

const Toptime = () => {

    const [date, setDate] = useState(new Date());
    const mins = ('0'+ date.getMinutes()).slice(-2);
    const hours = ('0'+ date.getHours()).slice(-2);
    const time = hours + ':' + mins

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
          };
      }, []);

    return(
        <Container id="Toptime">
            {time}
        </Container>
    )
}

export default Toptime;