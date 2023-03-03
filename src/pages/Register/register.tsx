import { Button, Form, ImageUploadItem, ImageUploader, Input, Toast } from "antd-mobile";
import { PictureOutline } from "antd-mobile-icons";
import { FC, useState } from "react";
import { demoSrc, mockUpload, mockUploadFail } from '../../utils/utils'
import { PostRegisterApi } from "../../axios/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([
    {
      url: '',
    },
  ])

  // 自定义上传按钮
const CustomUploadButton: FC = () => {

  return (
    <ImageUploader maxCount={1} value={fileList} onChange={setFileList} upload={mockUpload}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#999999',
        }}
      >
        <PictureOutline style={{ fontSize: 32 }} />
      </div>
    </ImageUploader>
  )
}

//注册
const onSubmit = async () => {
  if(!fileList[0].url){
    Toast.show({
      content:'请上传头像'
    })
  }else{
    const result = await PostRegisterApi({
      ...form.getFieldsValue(),
      nickname:'瓜瓜',
      avator:fileList[0].url
    })
    if(result.status === 201){
      Toast.show({
        content:'注册成功，请放回登录界面进行登录'
      })
    }
    console.log(result)
  }
  console.log(form.getFieldsValue(),fileList[0].url)
}
//返回登录界面
const goLogin = () => {
  navigate('/login')
}

  return ( 
    <div style={{background:'pink',height:'100vh'}}>
      <div  style={{position:'absolute',left:'50%',top:'35%',transform:'translate(-50%,-50%)',width:'100%'}}>
        <h1 style={{fontSize:'40px',textAlign:'center'}}>PhotoHS</h1>
        <div style={{marginTop:'20px',marginBottom:'20px'}}>
        <CustomUploadButton />
        </div>
        <div>
        <Form 
        layout='horizontal'
        form={form}
        footer={
          <Button block type='submit' color='primary' size='large' onClick={() => onSubmit()}>
            注册
          </Button>
        }
        >
          <Form.Item label='用户名' name='username' style={{width:'90%'}}  rules={[{ required: true, message: '用户名不能为空' }]}>
            <Input placeholder='请输入用户名' clearable style={{borderRadius:'20px'}}/>
          </Form.Item>
          <Form.Item label='密码' name='password'  rules={[{ required: true, message: '密码不能为空' }]}>
            <Input placeholder='请输入密码' clearable type='password' style={{borderRadius:'20px'}}/>
          </Form.Item>
          
        </Form>
        </div>
        <div onClick={() => goLogin()}>
          已有账号，返回登录
        </div>
      </div>
    </div>
   );
}
 
export default Register;