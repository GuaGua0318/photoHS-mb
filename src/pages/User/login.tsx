import { Button, Form, Input } from "antd-mobile";

const Login = () => {
  return ( 
    <div style={{background:'pink',height:'100vh'}}>
      <div  style={{position:'absolute',left:'50%',top:'35%',transform:'translate(-50%,-50%)',width:'100%'}}>
        <h1 style={{fontSize:'40px',textAlign:'center'}}>PhotoHS</h1>
        <div>
        <Form 
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary' size='large'>
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
      </div>
    </div>
   );
}
 
export default Login;