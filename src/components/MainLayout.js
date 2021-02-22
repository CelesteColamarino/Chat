import React, { useState } from "react";
import { Layout } from "antd";
import Login from "./Login";
// import Chat from "./Chat";

const { Header, Footer, Sider, Content } = Layout;

const MainLayout = () => {
  const [Logged, setLogged] = useState(false);

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ color: "#f0f2f5", background: "#6840ff" }}>
          My Chat App
        </Header>
        <Layout>
          <Content>{Logged ? "aca va el chat" : <Login />}</Content>
          {Logged ? <Sider>Sider</Sider> : ""}
        </Layout>
        <Footer
          style={{
            color: "#f0f2f5",
            background: "#6840ff",
            textAlign: "center",
          }}
        >
          Scale Chat Challenge · Celeste Colamarino
        </Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
