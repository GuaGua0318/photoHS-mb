import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register/register'
import Login from '../pages/Login/login'
import My from '../pages/My/my'
import Photos from '../pages/Photos'
import AddPhoto from '../pages/AddPhoto'


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
    path:'/home/add',
    element:<AddPhoto/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/my',
    element:<My/>,
  },
  {
    path:'/my/photos',
    element:<Photos/>
  }
]

export default routers