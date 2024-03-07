import { Menu } from "antd";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";
import { IoStatsChart } from "react-icons/io5";

function MenuContents() {
  return (
    <Menu theme="light" mode="inline">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.SubMenu key="overview" icon={<IoStatsChart />} title="Overview">
        <Menu.Item key="analytics">Analytics</Menu.Item>
        <Menu.Item key="charts">Charts</Menu.Item>
        <Menu.Item key="tables">Tables</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="setting" icon={<SettingFilled />}>
        Settings
      </Menu.Item>
    </Menu>
  );
}

export default MenuContents;
