import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'

const routers = [
  {
    path:'/',
    element:<Navigate to="home"/>
  }
  ,
  {
    path:'/home',
    element:<Home />
  }
]

export default routers