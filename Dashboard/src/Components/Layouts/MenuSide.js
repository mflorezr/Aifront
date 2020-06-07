import React, { Component } from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import { UserOutlined, BarChartOutlined, AreaChartOutlined } from '@ant-design/icons';
// import { Link } from "react-router-dom";
import Title from 'antd/lib/typography/Title'

import SubMenu from 'antd/lib/menu/SubMenu';

import { Redirect, Link, Route, Switch } from "react-router-dom";

const { Sider } = Layout;

export default class MenuSide extends React.Component {
  render() {
    return (
      <Sider>
        <Menu
          defaultSelectedKeys={['dashboard']}
          mode="inline"
        >
          <Menu.Item key='dashboard'>
            Dashboard
            <Link to="/dashboard" />
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <AreaChartOutlined />
                <span>Drivers</span>
              </span>
            }
          >
            <Menu.ItemGroup>
              <Menu.Item key='driver1' icon={<BarChartOutlined />}>
                <span>Aumento de ingresos</span>
                <Link to="/driver/1" />
              </Menu.Item>
              <Menu.Item key='driver2' icon={<BarChartOutlined />}>
                <span>Disminución de costos de bienes vendidos</span>
                <Link to="/driver/2" />
              </Menu.Item>
              <Menu.Item key='driver3' icon={<BarChartOutlined />}>
                <span>Aumento de gastos operacionales</span>
                <Link to="/driver/3" />
              </Menu.Item>
              <Menu.Item key='driver4' icon={<BarChartOutlined />}>
                <span>Aumento de utilidad no operacional</span>
                <Link to="/driver/4" />
              </Menu.Item>
              <Menu.Item key='driver5' icon={<BarChartOutlined />}>
                <span>Disminución de inversiones de capital</span>
                <Link to="/driver/5" />
              </Menu.Item>
              <Menu.Item key='driver6' icon={<BarChartOutlined />}>
                <span>Disminución de capital de trabajo</span>
                <Link to="/driver/6" />
              </Menu.Item>
              <Menu.Item key='driver7' icon={<BarChartOutlined />}>
                <span>Disminución de ingresos</span>
                <Link to="/driver/7" />
              </Menu.Item>
              <Menu.Item key='driver8' icon={<BarChartOutlined />}>
                <span>Aumento de costos de bienes vendidos</span>
                <Link to="/driver/8" />
              </Menu.Item>
              <Menu.Item key='driver9' icon={<BarChartOutlined />}>
                <span>Disminución de gastos operacionales</span>
                <Link to="/driver/9" />
              </Menu.Item>
              <Menu.Item key='driver10' icon={<BarChartOutlined />}>
                <span>Disminución de utilidad no operacional</span>
                <Link to="/driver/10" />
              </Menu.Item>
              <Menu.Item key='driver11' icon={<BarChartOutlined />}>
                <span>Aumento de inversiones de capital</span>
                <Link to="/driver/11" />
              </Menu.Item>
              <Menu.Item key='driver12' icon={<BarChartOutlined />}>
                <span>Aumento de capital de trabajo</span>
                <Link to="/driver/12" />
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

// export default Head;