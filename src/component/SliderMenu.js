import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Drawer } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  FileTextOutlined,
  TableOutlined,
  UnorderedListOutlined,
  DashboardOutlined,
  ProfileOutlined,
  IdcardOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import {
  Chart,
  TextEditor,
  TableView,
  CardDesign,
  FbLogin,
  Glogin,
  AnimationDemo,
  FormDemo,
  ContextDemo,
  ImageUpload,
  NestedTable,
  ReactDataTable,
  GridListDemo,
  TimeLineDemo,
  CommentDemo,
  Pagination,
  DraggableDemo,
  CalculateFactorial,
  ReverseString,
  Factoriall,
} from "../container";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const SliderMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);
  const onClose = () => {
    setCollapsed(false);
  };

  return (
    <Router>
      <Layout
        style={{ minHeight: "100vh" }}
        className="sidebar"
        breakpoint={"lg"}
        theme="light"
        collapsedWidth={0}
        trigger={null}
      >
        <Drawer
          placement="left"
          onClose={onClose}
          closable={false}
          visible={collapsed}
          className="hideOnDesktop"
          bodyStyle={{ backgroundColor: "#001529", padding: "0" }}
        >
          <div className="logo" />

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/chart"> Chart</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<FileTextOutlined />}>
                <Link to="/texteditor"> TextEditor</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<TableOutlined />}>
                <Link to="/table"> Table</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<IdcardOutlined />} title="List">
              <Link to="/card">Card</Link>
              <Menu.Item key="6" icon={<FacebookOutlined />}>
                <Link to="/fblogin">FbLogin</Link>
              </Menu.Item>
              <Menu.Item key="7" icon={<GoogleOutlined />}>
                <Link to="/glogin">GoogleLogin</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub" icon={<ProfileOutlined />} title="Profile">
              <Menu.Item key="8" icon={<UserOutlined />}>
                <Link to="/animation"> Animation</Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<VideoCameraOutlined />}>
                <Link to="/formdemo">Form</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<UploadOutlined />}>
                <Link to="/context">Context Api</Link>
              </Menu.Item>
              <Menu.Item key="11" icon={<UploadOutlined />}>
                <Link to="/upload">Image Upload</Link>
              </Menu.Item>
              <Menu.Item key="12" icon={<UnorderedListOutlined />}>
                <Link to="/nestedtable">Nested Table</Link>
              </Menu.Item>
              <Menu.Item key="13" icon={<UnorderedListOutlined />}>
                <Link to="/reactdatatablecomponent">
                  React-Data-Table-Component
                </Link>
              </Menu.Item>
              <Menu.Item key="14" icon={<UnorderedListOutlined />}>
                <Link to="/gridlist">Grid List</Link>
              </Menu.Item>
              <Menu.Item key="15" icon={<UnorderedListOutlined />}>
                <Link to="/timeline">TimeLine</Link>
              </Menu.Item>
              <Menu.Item key="16" icon={<UnorderedListOutlined />}>
                <Link to="/commentdemo">Comment</Link>
              </Menu.Item>
              <Menu.Item key="17" icon={<UnorderedListOutlined />}>
                <Link to="/pagination">Pagination</Link>
              </Menu.Item>
              <Menu.Item key="18" icon={<UnorderedListOutlined />}>
                <Link to="/dragglable">DragglableDemo</Link>
              </Menu.Item>
              <Menu.Item key="19" icon={<UnorderedListOutlined />}>
                <Link to="/memodemo">UseMemoDemo</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>
        {/* <Sider trigger={null} collapsible collapsed={collapsed}> */}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          collapsed={collapsed}
          onBreakpoint={(broken) => {
            setCollapsed(broken);
          }}
          className="hideOnMobile"
        >
          <div className="logo" />

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/chart"> Chart</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<FileTextOutlined />}>
                <Link to="/texteditor">TextEditor</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<TableOutlined />}>
                <Link to="/table">Table</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UnorderedListOutlined />} title="List">
              <Menu.Item key="5" icon={<IdcardOutlined />}>
                <Link to="/card">Card</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<FacebookOutlined />}>
                <Link to="/fblogin">FbLogin</Link>
              </Menu.Item>
              <Menu.Item key="7" icon={<GoogleOutlined />}>
                <Link to="/glogin">GoogleLogin</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub" icon={<ProfileOutlined />} title="Profile">
              <Menu.Item key="8" icon={<UserOutlined />}>
                <Link to="/animation">Animation</Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<VideoCameraOutlined />}>
                <Link to="/formdemo">Form</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<UploadOutlined />}>
                <Link to="/context">Context Api</Link>
              </Menu.Item>
              <Menu.Item key="11" icon={<UploadOutlined />}>
                <Link to="/upload">Image Upload</Link>
              </Menu.Item>
              <Menu.Item key="12" icon={<UnorderedListOutlined />}>
                <Link to="/nestedtable">Nested Table</Link>
              </Menu.Item>
              <Menu.Item key="13" icon={<UnorderedListOutlined />}>
                <Link to="/reactdatatablecomponent">
                  React-Data-Table-Component
                </Link>
              </Menu.Item>
              <Menu.Item key="14" icon={<UnorderedListOutlined />}>
                <Link to="/gridlist">Grid List</Link>
              </Menu.Item>
              <Menu.Item key="15" icon={<UnorderedListOutlined />}>
                <Link to="/timeline">TimeLine</Link>
              </Menu.Item>
              <Menu.Item key="16" icon={<UnorderedListOutlined />}>
                <Link to="/commentdemo">Comment</Link>
              </Menu.Item>
              <Menu.Item key="17" icon={<UnorderedListOutlined />}>
                <Link to="/pagination">Pagination</Link>
              </Menu.Item>
              <Menu.Item key="18" icon={<UnorderedListOutlined />}>
                <Link to="/dragglable">DragglableDemo</Link>
              </Menu.Item>
              <Menu.Item key="19" icon={<UnorderedListOutlined />}>
                <Link to="/memodemo">UseMemoDemo</Link>
              </Menu.Item>
              <Menu.Item key="20" icon={<UnorderedListOutlined />}>
                <Link to="/reverse">ReverseString</Link>
              </Menu.Item>
              <Menu.Item key="21" icon={<UnorderedListOutlined />}>
                <Link to="/factorial">Factorial</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route path="/chart" component={Chart} />
            <Route path="/texteditor" component={TextEditor} />
            <Route path="/table" component={TableView} />
            <Route path="/card" component={CardDesign} />
            <Route path="/fblogin" component={FbLogin} />
            <Route path="/glogin" component={Glogin} />
            <Route path="/animation" component={AnimationDemo} />
            <Route path="/formdemo" component={FormDemo} />
            <Route path="/context" component={ContextDemo} />
            <Route path="/upload" component={ImageUpload} />
            <Route path="/nestedtable" component={NestedTable} />
            <Route path="/reactdatatablecomponent" component={ReactDataTable} />
            <Route path="/gridlist" component={GridListDemo} />
            <Route path="/timeline" component={TimeLineDemo} />
            <Route path="/commentdemo" component={CommentDemo} />
            <Route path="/pagination" component={Pagination} />
            <Route path="/dragglable" component={DraggableDemo} />
            <Route path="/memodemo" component={CalculateFactorial} />
            <Route path="/reverse" component={ReverseString} exact={true} />
            <Route path="/factorial" component={Factoriall} exact={true} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default SliderMenu;
