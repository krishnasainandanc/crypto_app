import "./App.css";
import logo from"./img/bit2.jpg"
import React,{useState,useEffect} from "react";
import {Layout,Menu} from "antd"
import {MenuFoldOutlined,UserOutlined,VideoCameraOutlined,UploadOutlined,} from '@ant-design/icons';
import Axios from "./Request/Axios";
import Request from "./Request/Request";
import MainApp from "./components/MainApp";
import Cyrto from "./components/Cyrtocurrency"
import {NavLink,Route,Routes} from"react-router-dom"
import Exchange from "./components/Exchange"
import News from "./components/News"
import CrytoDetalis from "./components/CrytoDetalis";
const { Header, Footer, Sider, Content } = Layout;



function App() {

  return (
      <div className="App" style={{display:"flex"}}>
       <Layout>
      <Sider  className="sider-head" >
        <div className="siders-1"> 
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <div className="sider">
              <img src={logo} height="40px" width="40px"/>
              <h1>Crytoverse</h1>
            </div>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <NavLink to="/Cryto-Currency">Cryptocurrency</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <NavLink to="/Cryto-Exchanges">Exchanges</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<MenuFoldOutlined/>}>
              <NavLink to="/Cryto-News">News</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        {/* <Header className="Main-header">
          <div className="header">Header krishna </div>
        </Header> */}
        <Content className="content-main">
          <Routes>
            <Route exact path="/" element={<MainApp/>}/>
            <Route exact path="/Cryto-Currency" element={<Cyrto/>}/>
            <Route exact path="/Cryto-Exchanges" element={<Exchange/>}/>
            <Route exact path="/cryto-News" element={<News/>}/>
            <Route exact path="/Cryto-Currency/:coinId" element={<CrytoDetalis/>}/>
          </Routes>   
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
      </div>
  );
}

export default App;
