import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import U_CAPEX from './assets/U_CAPEX.png';

const { Footer, Content } = Layout;

function Driver11() {
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
                <h2>Aumento de inversiones de capital</h2>
                <p>
                  Que la empresa tenga constantes y crecientes necesidades de capital,
                  dificulta la escalabilidad del modelo de negocios, y limita la estrategia.
                </p> <br /> <br />

                <div class="image-container">
                  <img src={U_CAPEX} alt="Driver 11" />
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

export default Driver11;

