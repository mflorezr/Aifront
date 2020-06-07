import React from 'react';

import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import RadarComp from "./Charts/Radar/RadarChart";
import Head from '../Layouts/Head';
import MenuSide from '../Layouts/MenuSide';

const { Header, Footer, Sider, Content } = Layout;


function Dashboard() {

  return (
    <div className="App">
      <Layout>
        <Head />
        <Layout>
          <MenuSide />
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>⠀</Breadcrumb.Item>
              </Breadcrumb>
              <div site-layout-content style={{ background: '#fff', padding: 48, minHeight: 580 }}>
                <RadarComp />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Dàbái</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;