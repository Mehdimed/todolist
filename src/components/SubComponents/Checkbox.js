import styled from "styled-components";
import {ReactComponent as CheckSVG} from '../../assets/images/check.svg'

const Container = styled.div`
    
    background-color: ${props => props.isChecked ? '#C83D86' : '#DFC9D5' };
    width: 20px;
    height: 20px;
    cursor: pointer;
    padding: 2px;
    border-radius: 5px;
    margin-left: 10px;
`

const Checkbox = ({ isChecked,checkTask,task }) => {
    return (
        <Container isChecked={isChecked} onClick={() => checkTask(task)}>
            {isChecked && <CheckSVG/>}

        </Container>
    )
}

export default Checkbox;