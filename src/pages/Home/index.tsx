import React, { useState } from 'react'
import { Badge, Space, TabBar, Image, Button, ImageViewer, Card, Grid, Modal, Popup, Avatar, Footer, Input } from 'antd-mobile'
import './style.scss'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
  AddOutline,
} from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'


const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',
]

const Home = () => {
  const tabs = [
    {
      key: '/home',
      title: '共享',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '/my',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  const [activeKey, setActiveKey] = useState('todo')
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  //底部额外内容
  const ViewWithFooter = () => {
    const [visible1, setVisible1] = useState(false)
    const [value, setValue] = useState('')

    const renderFooter = (image: string, index: number) => {
      return (
        <div className='footer' style={{ display: 'scrollY' }}>
          <div>

          </div>
          <Grid columns={3} gap={8} className='tags' style={{ height: '50px', lineHeight: '50px' }}>
            <Grid.Item>
              <div>
                <i className="iconfont" style={{ fontSize: '25px' }}>&#xe870;<span style={{ fontSize: '15px' }}>100</span></i>
              </div>
            </Grid.Item>
            <Grid.Item>
              <div>
                <i className="iconfont" style={{ fontSize: '25px' }}>&#xe891;<span style={{ fontSize: '15px' }}>100</span></i>
              </div>
            </Grid.Item>
            <Grid.Item onClick={() => {
              setVisible1(true)
            }}>
              <div style={{ fontSize: '18px' }}>详情&gt;</div>
            </Grid.Item>
          </Grid>
          <Popup
            visible={visible1}
            showCloseButton={true}
            onClose={() => {
              setVisible1(false)
            }}
            bodyStyle={{ height: '100%' }}
          >
            <div>
              <div style={{ textAlign: 'center', height: '50px', lineHeight: '50px', background: 'pink', fontSize: '22px' }}>详情</div>
              <div>
                <Image src={demoSrc} fit='scale-down' />
              </div>
              <div className='content'>
                <h1>打开老骥伏枥看电视剧弗兰克的健身房</h1>
                <p style={{ fontSize: '22px' }}>sdfjklsdajfkldsjflkdsjflkadsjflkasdjfklsdjflksdjflkdsjfklsdjfkldsjflksdjfjdslkjf</p>
                <p className='day'>2023-03-18</p>
              </div>
              <div className='comments'>
                <p>共100条评论</p>
                <ul>
                  <li style={{ marginBottom: '10px' }}>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                  <li>
                    <Space>
                      <Avatar src={demoSrc} style={{ borderRadius: '50%' }} />
                      <div>
                        <p style={{ fontSize: '16px' }}>呱呱</p>
                        <p style={{ fontSize: '18px' }}>sdafjdsklfjdslkfjdslkfjkldsfjds</p>
                      </div>
                    </Space>
                  </li>
                </ul>
                <Footer label='没有更多了'></Footer>
              </div>
            </div>
            <div style={{ height: '50px', border: '1px solid pink', paddingLeft: '10px', lineHeight: '50px' }}>
              <Space>
                <Input
                  placeholder='请输入内容'
                  value={value}
                  onChange={val => {
                    setValue(val)
                  }}
                  style={{ border: '1px solid gray', borderRadius: '10px', height: '40px', paddingLeft: '10px' }}
                />
                <span>赞</span>
                <span>评论</span>
              </Space>

            </div>
          </Popup>
        </div>
      )
    }

    return (
      <>
        <ImageViewer.Multi
          images={demoImages}
          visible={visible}
          defaultIndex={1}
          onClose={() => {
            setVisible(false)
          }}
          renderFooter={renderFooter}
        />
      </>
    )
  }

  //切换tabbar页
  const setRouteActive = (value: string) => {
    navigate(value)
  }

  return (
    <>
      <div className='HD'>
        共享
      </div>
      <div className='content'>
      <Space wrap style={{ padding: '0 0 0 8px', marginTop: '20px'}}>
        <Image src={demoSrc} width={183} height={200} fit='fill' onClick={() => {
          setVisible(true)
        }} />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
        <Image src={demoSrc} width={183} height={200} fit='fill' />
      </Space>
      </div>
     
      <div className='bottom' style={{position:'relative',bottom:'0',left:'0'}}>
        <div className='addBtn' onClick={() => navigate('add')}>
        <AddOutline fontSize={36}/>
        </div>
        <TabBar onChange={value => setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
      <ViewWithFooter />
    </>
  )
}

export default Home;