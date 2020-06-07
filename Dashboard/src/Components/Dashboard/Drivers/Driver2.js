import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import D_CR from './assets/D_CR.png';

const { Footer, Content } = Layout;

function Driver2() {
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
                <h2>Disminución de costos de bienes vendidos</h2>
                <p>
                  La oportunidad de disminuir egresos es algo sumamente atractivo para muchas organizaciones,
                  sin embargo, se debe tener en cuenta que, en varias ocasiones, disminuirlos,
                  también significaría disminuir los ingresos.
                </p> <br /> <br />

                <div class="image-container">
                  <img src={D_CR} alt="Driver 2" />
                </div>

              </div>
              {/* <div className="site-layout-content">Content</div> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Dàbái</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Driver2;

