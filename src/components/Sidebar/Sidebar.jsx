import { useState } from "react";
import { Layout } from "antd";

import Logo from "../Logo";
import MenuContents from "../MenuContents";

const { Header, Sider } = Layout;

function Sidebar() {
  return (
    <Layout>
      <Sider>
        <Logo />
        <MenuContents />
      </Sider>
    </Layout>
  );
}

export default Sidebar;
