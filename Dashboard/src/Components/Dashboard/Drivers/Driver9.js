import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import D_OE from './assets/D_OE.png';

const { Footer, Content } = Layout;

function Driver9() {
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

                <h2>Disminución de gastos operacionales</h2>
                <p>
                  Para crecer, la empresa debe tener una óptima gestión de su flujo de efectivo, sin embargo,
                  debe ser cuidadosa con aquellos gastos que corta, para que no haya a largo plazo, un perjuicio económico
                </p> <br /> <br />

                <div class="image-container">
                  <img src={D_OE} alt="Driver 9" />
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

export default Driver9;

