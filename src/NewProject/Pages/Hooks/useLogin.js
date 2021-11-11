import {useState} from 'react'
import { login } from '../../Service'
import {useNavigate} from 'react-router-dom'


function useLogin() {

    const[credintials,setCredintials] = useState({
      email: '',
      password: ''  
    })
    const[error,setError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) =>{
    setCredintials({
        ...credintials,
        [e.target.id]:e.target.value})

    }
    const handleSubmit = (e) =>{
    e.preventDefault();

    if(credintials.email !== '' && credintials.password !== ''){
        let data = {
            email : credintials.email,
            password : credintials.password
        }
        let result = login(data)

        if(result === 'Success'){
              if(error) setError(false)

             navigate('/display') 
        }else{
            setError(true)
        }
    }else{
        setError(true)
    }
    }
    return [
        handleChange,
        handleSubmit,
        error
    ]
}

export default useLogin
