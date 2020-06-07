import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';
import U_OE from './assets/U_OE.png';

const { Footer, Content } = Layout;

function Driver3() {
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
                <h2>Aumento de gastos operacionales</h2>
                <p>
                  A menudo, los gastos administrativos se ven como un flujo de caja innecesario,
                  pero gran parte de la estructura organizacional depende de este rubro.
                </p> <br /> <br />

                <div class="image-container">
                  <img src={U_OE} alt="Driver 3" />
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

export default Driver3;

