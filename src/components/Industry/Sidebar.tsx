
import React, {useState, useEffect} from 'react';
import { Menu } from "antd";
import { withRouter, useRouter } from "next/router";

const _Sidebar = ({router}) => {
  const getPathName = () => {
    return router.pathname
  };
  const [selection, setSelection] = useState<string>(getPathName());

  useEffect(() => {}, [selection]);
  const handleClick = (event) => {
    setSelection(event.key);
  };

  return (
    <div className="app-sidebar">
      <div className="sidebar-title">
        <div>解决方案</div>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-block">
          <Menu onClick={handleClick} selectedKeys={[selection]} >
            <Menu.Item key={"/solutions/port"}>
              <a href="/solutions/port">智慧港口</a>
            </Menu.Item>

            <Menu.Item key={"/solutions/traffic"}>
              <a href="/solutions/traffic">隧道定位</a>
            </Menu.Item>

            <Menu.Item key={"/solutions/railway"}>
              <a href="/solutions/railway">智慧地铁</a>
            </Menu.Item>

            <Menu.Item key={"/solutions/factory"}>
              <a href="/solutions/factory">智慧工厂</a>
            </Menu.Item>

            <Menu.Item key={"/solutions/parking"}>
              <a href="/solutions/parking">智慧停车</a>
            </Menu.Item>

            <Menu.Item key={"/solutions/airport"}>
              <a href="/solutions/airport">智慧机场</a>
            </Menu.Item>

            <Menu.Item key={"/solutions/hospital"}>
              <a href="/solutions/hospital">智慧医院</a>
            </Menu.Item>
            <Menu.Item key={"/solutions/exhibition"}>
              <a href="/solutions/exhibition">智慧展馆</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default withRouter(_Sidebar);
