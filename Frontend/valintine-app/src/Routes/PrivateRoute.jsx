import React from 'react'
import { useNavigate ,Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {

const user = JSON.parse(sessionStorage.getItem("userdetails")) ||""
const navigate = useNavigate()
// console.log(user)
if(!user){
    return <Navigate to={"/login"}/>
}

  return (
  children
  )
}

export default PrivateRoute