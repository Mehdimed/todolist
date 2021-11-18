import { useNavigate } from 'react-router-dom';


const Logout = ({isConnected, setIsConnected, updateTasks}) => {

    let navigate = useNavigate();
    const logout = async (url) => {
        const response = await fetch(url , {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        return response
    }

    logout('/logout')
        .then(() =>{
            setIsConnected(false)
            updateTasks([])
            navigate('/');
        })

    return(
        <div>
            page de deconnexion
        </div>
    )
}

export default Logout;