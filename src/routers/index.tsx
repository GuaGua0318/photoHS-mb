import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import User from '../pages/User'


const routers = [
  {
    path:'/',
    element:<Navigate to="home"/>
  }
  ,
  {
    path:'/home',
    element:<Home />
  },
  {
    path:'/user',
    element:<User/>
  }
]

export default routers