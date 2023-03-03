import { Avatar, Badge, Grid, TabBar, Tabs,Image } from "antd-mobile";
import { AppOutline, UserOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import './style.scss'
import { GridItem } from "antd-mobile/es/components/grid/grid";
import { demoSrc } from "../../utils/utils";

const My = () => {
  const navigate = useNavigate()

  const tabs = [
    {
      key: '/home',
      title: '共享',
      icon: <AppOutline />,
    },
    {
      key: '/my',
      title: '我的',
      icon: <UserOutline />,
      badge: Badge.dot,
    },
  ]

   //切换tabbar页
   const setRouteActive = (value: string) => {
    navigate(value)
  }

  return ( 
    <>
      <Grid columns={3} className="myInfo">
        <Grid.Item>
          <div className="avator">
          <Avatar src={""} style={{borderRadius:'50%',"--size":'80px'}}/>
          </div>
        </Grid.Item>
        <Grid.Item>
          <div className="info-text">
            <p style={{fontSize:'30px'}}>瓜瓜</p>
            <p>用户名：fsldkjflkds</p>
            <p>获赞:100</p>
          </div>
        </Grid.Item>
      </Grid>
      <div>
      <Tabs>
          <Tabs.Tab title='赞过' key='praise'>
          赞过
          </Tabs.Tab>
          <Tabs.Tab title='相册' key='photos'>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',overflowY:'scroll',height:'calc(100vh - 40px - 230px - 40px - 40px)'}}>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}} onClick={() => navigate('photos')}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            <Image src={demoSrc} width={180} height={100} fit='fill' style={{marginBottom:'10px'}}/>
            </div>
           
          </Tabs.Tab>
        </Tabs>
      </div>
       <div className='bottom' style={{position:'relative',bottom:'0',left:'0'}}>
        <TabBar onChange={value => setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </>
   );
}
 
export default My;