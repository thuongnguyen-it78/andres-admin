import {
  FileProtectOutlined, MenuFoldOutlined, MenuUnfoldOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import NotFound from 'components/NotFound/NotFound'
import Job from 'features/Job/Job'
import ProductFeature from 'features/Job/Job'
import UserFeature from 'features/User/User'
import React, { useState } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import './Layout.scss'


const { Header, Sider, Content } = Layout

const menu = [
  {
    id: 1,
    name: 'Quản lý công việc',
    path: '/jobs',
    icon: <FileProtectOutlined />,
  }
]

function MainLayout(props) {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">{/* <img src={logo} alt="" /> */}</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[1]}>
          {menu.map((item) => (
            <Menu.Item key={item.id} icon={item.icon}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{ padding: '16px 24px 24px', backgroundColor: "#F0F2F5" }}
          
        >
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item href="/products">Quản lý sản phẩm</Breadcrumb.Item>
            </Breadcrumb> */}
              <Switch>
                <Redirect from="/home" to="/" exact />
                <Route path="/jobs" component={Job} />
                <Route component={NotFound} />
              </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

MainLayout.propTypes = {}

export default MainLayout
