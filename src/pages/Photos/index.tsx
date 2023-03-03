import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";


const Photos = () => {
  const navigate = useNavigate()


  //返回相册
  const back = () => {
    navigate('/my')
  }
  return ( 
    <div className="photos">
      <div>
      <NavBar onBack={back}>瓜瓜的相册</NavBar>
      </div>
      
    </div>
  );
}
 
export default Photos;