import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import D_CWK from './assets/D_CWK.png';

const { Footer, Content } = Layout;

function Driver6() {
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
                <h2>Disminución de capital de trabajo</h2>
                <p>
                  La capacidad de generar renta con un uso poco intensivo de capital,
                  le significa a las empresas mayor flexibilidad y mayor tasa de supervivencia
                </p> <br /> <br />

                <div class="image-container">
                  <img src={D_CWK} alt="Driver 6" />
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

export default Driver6;

