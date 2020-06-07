import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import D_REVENUE from './assets/D_REVENUE.png';

const { Footer, Content } = Layout;

function Driver7() {
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
                <h2>Disminución de ingresos</h2>
                <p>
                  Con frecuencia, foco central de las preocupaciones de los directores,
                  cierto es que entre menos efectivo entre a una empresa, más incierto será su futuro
                </p> <br /> <br />

                <div class="image-container">
                  <img src={D_REVENUE} alt="Driver 7" />
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

export default Driver7;

