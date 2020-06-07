import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import U_Revenue from './assets/U_Revenue.png';

const { Footer, Content } = Layout;

function Driver1() {
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

                <h2>Aumento de ingresos</h2>
                <p>
                  Las empresas necesitan ventas, las ventas son el motor de sus economías internas,
                  el garante de su salud financiera, y, por tanto, la capacidad que tengan de incrementarlos
                  será crucial para su sostenibilidad.
                </p> <br /> <br />

                <div class="image-container">
                  <img src={U_Revenue} alt="Driver 1" />
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

export default Driver1;

