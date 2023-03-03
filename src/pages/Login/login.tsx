import { Button, Form, Input } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { PostLoginApi } from "../../axios/api";

const Login = () => {
const navigate = useNavigate()
const [form] = Form.useForm()

//跳转登录页
  const goRegister = () => {
    navigate('/register')
  }

  //登录
  const onLogin = async () => {
    const values = form.getFieldsValue()
    const result = await PostLoginApi({
      ...values
    })
    if(result.status === 201){
      let {token,info} = result.data
      window.localStorage.setItem('token',token)
      window.localStorage.setItem('info',JSON.stringify(info))
      navigate('/home')
    }
  }

  return ( 
    <div style={{background:'pink',height:'100vh'}}>
      <div  style={{position:'absolute',left:'50%',top:'35%',transform:'translate(-50%,-50%)',width:'100%'}}>
        <h1 style={{fontSize:'40px',textAlign:'center'}}>PhotoHS</h1>
        <div>
        <Form
        form={form}
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary' size='large' onClick={() => onLogin()}>
            登录
          </Button>
        }
        >
          <Form.Item label='用户名' name='username' style={{width:'90%'}}>
            <Input placeholder='请输入用户名' clearable style={{borderRadius:'20px'}}/>
          </Form.Item>
          <Form.Item label='密码' name='password'>
            <Input placeholder='请输入密码' clearable type='password' style={{borderRadius:'20px'}}/>
          </Form.Item>
          
        </Form>
        </div>
        <div onClick={() => goRegister()} style={{textAlign:'center'}}>
          没有账号，先去注册
        </div>
      </div>
    </div>
   );
}
 
export default Login;