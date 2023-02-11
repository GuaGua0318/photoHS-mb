import { Suspense } from 'react';
import routers from './routers'
import {useRoutes} from 'react-router-dom'

const App = () => {

const element = useRoutes(routers)

  return ( 
    <div>
     <Suspense>{element}</Suspense>
    </div>
   );
}
 
export default App;