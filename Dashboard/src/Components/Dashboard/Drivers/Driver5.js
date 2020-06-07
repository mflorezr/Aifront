import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import D_CAPEX from './assets/D_CAPEX.png';

const { Footer, Content } = Layout;

function Driver5() {
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

                <h2>Disminución de inversiones de capital</h2>
                <p>
                  Debido a las grandes sumas de efectivo que con frecuencia presupone esta cuenta,
                  se debe gestionar con especial cuidado, en conformancia con la etapa que afronta la
                  empresa de su ciclo de vida
                </p> <br /> <br />

                <div class="image-container">
                  <img src={D_CAPEX} alt="Driver 5" />
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

export default Driver5;

